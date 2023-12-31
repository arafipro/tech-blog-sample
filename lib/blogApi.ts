import { FormSchemaType } from "./validationSchema/FormSchema";

export async function getAllPosts() {
  const res = await fetch(`http://localhost:3000/api/blog/`, {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch posts data");
  }
  return res.json();
}

export async function getPost(id: string) {
  const res = await fetch(`http://localhost:3000/api/blog/${id}`, {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch post data");
  }
  return res.json();
}

export async function postBlog(data: FormSchemaType) {
  const { title, content } = data;
  const res = await fetch(`http://localhost:3000/api/blog/`, {
    method: "POST",
    body: JSON.stringify({ title, content }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
