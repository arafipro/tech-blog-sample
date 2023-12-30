"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import MarkdownPreview from "./markdown/MarkdownPreview";

const FormSchema = z.object({
  title: z.string().min(2, {
    message: "title must be at least 2 characters.",
  }),
  content: z.string().min(2, {
    message: "content must be at least 2 characters.",
  }),
});

export default function BlogForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  async function postBlog(data: Post) {
    const { title, content } = data;
    const res = await fetch(`http://localhost:3000/api/blog/`, {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    await postBlog(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Button type="submit" className="w-full">
          記事投稿
        </Button>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="w-full flex break-words gap-4">
                  <Input
                    placeholder="title"
                    {...field}
                    className="text-lg font-medium leading-relaxed lg:w-1/2"
                  />
                  <div>
                    <h1 className="text-2xl font-bold">
                      {form.getValues().title}
                    </h1>
                  </div>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="w-full flex break-words gap-4">
                  <Textarea
                    placeholder="content"
                    {...field}
                    className="text-lg font-medium leading-relaxed resize-none lg:w-1/2"
                  />
                  <div className="overflow-y-auto lg:w-1/2 lg:block hidden">
                    <MarkdownPreview content={form.getValues().content} />
                  </div>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
