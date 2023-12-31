"use client";

import BlogTable from "@/components/BlogTable";
import { getAllPosts } from "@/lib/blogApi";
import { useEffect, useState } from "react";

export default function Page() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const data = await getAllPosts();
      setPosts(data.posts);
    }
    fetchPosts();
  }, []);

  return (
    <>
      <BlogTable posts={posts} />
    </>
  );
}
