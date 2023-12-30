import BlogTable from "@/components/BlogTable";
import { getAllPosts } from "@/lib/blogApi";

export default async function page() {
  const data = await getAllPosts();

  return (
    <>
      <BlogTable posts={data.posts} />
    </>
  )
}
