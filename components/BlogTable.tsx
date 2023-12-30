"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { dateFormat } from "@/utils/dateFormat";

const BlogTable = ({ posts }: { posts: Post[] }) => {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Create Date</TableHead>
          <TableHead>Update Date</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {posts.map((post: Post) => (
          <TableRow key={post.id}>
            <TableCell>{post.title}</TableCell>
            <TableCell>{dateFormat(post.createAt)}</TableCell>
            <TableCell>{dateFormat(post.updateAt)}</TableCell>
            <TableCell>
              <Button
                onClick={() => {
                  console.log(post.id);
                }}
              >
                Preview
              </Button>
              <Button
                onClick={() => {
                  console.log(post.id);
                }}
              >
                Edit
              </Button>
              <Button
                onClick={() => {
                  console.log(post.id);
                }}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default BlogTable;
