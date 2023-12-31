import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { dateFormat } from "@/utils/dateFormat";
import Link from "next/link";

const PostCard = ({
  id,
  title,
  createAt,
  updateAt,
  className,
}: {
  id: string;
  title: string;
  createAt: Date;
  updateAt: Date;
  className?: string;
}) => {
  return (
    <Card className={className}>
      <Link href={`/blog/${id}/detail`}>
        <CardHeader>
          <CardTitle className="text-center mb-10">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-x-4 justify-center">
          <p>{dateFormat(createAt)}</p>
          <p>{dateFormat(updateAt)}</p>
        </CardContent>
      </Link>
    </Card>
  );
};

export default PostCard;
