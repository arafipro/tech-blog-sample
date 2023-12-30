import { z } from "zod";

export const FormSchema = z.object({
  title: z.string().min(2, {
    message: "title must be at least 2 characters.",
  }),
  content: z.string().min(2, {
    message: "content must be at least 2 characters.",
  }),
});

export type FormSchemaType = z.infer<typeof FormSchema>;
