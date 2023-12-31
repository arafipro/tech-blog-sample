"use client";

import MarkdownPreview from "@/components/markdown/MarkdownPreview";
import { getPost } from "@/lib/blogApi";
import { dateFormat } from "@/utils/dateFormat";
import { useEffect, useState } from "react";
export const runtime = "edge";

export default function Page({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<Post>();
  useEffect(() => {
    async function fetchPosts() {
      const data = await getPost(params.id);
      setPost(data.post);
    }
    fetchPosts();
  }, [params.id]);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-20">{post?.title}</h1>
      <div className="flex gap-x-4 justify-around mb-20">
        <p>投稿日時：{dateFormat(post?.createAt!)} </p>
        <p>編集日時：{dateFormat(post?.updateAt!)} </p>
      </div>
      <MarkdownPreview
        content={post?.content ?? ""}
        className="max-w-3xl mx-auto"
      />
    </div>
  );
}
