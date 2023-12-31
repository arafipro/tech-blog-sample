import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { deletePost } from "@/lib/blogApi";
import { dateFormat } from "@/utils/dateFormat";
import { useRouter } from "next/navigation";
import CustomDialog from "./CustomDialog";

const BlogTable = ({ posts }: { posts: Post[] }) => {
  const router = useRouter();
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>タイトル</TableHead>
          <TableHead>投稿日時</TableHead>
          <TableHead>更新日時</TableHead>
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
                onClick={async () =>
                  await router.push(`/blog/${post.id}/detail`)
                }
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
              <CustomDialog title="記事を削除しますか？" cancel="キャンセル" ok="削除">
                <Button
                  onClick={async () => {
                    await deletePost(post.id);
                  }}
                >
                  Delete
                </Button>
              </CustomDialog>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default BlogTable;
