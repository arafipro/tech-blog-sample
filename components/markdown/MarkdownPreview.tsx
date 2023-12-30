import { cn } from "@/utils/cn";
import parse from "html-react-parser";
import "zenn-content-css";
import markdownToHtml from "zenn-markdown-html";

const MarkdownPreview = ({
  content,
  className,
}: {
  content: string;
  className?: string;
}) => {
  const html = parse(markdownToHtml(content));
  return <div className={cn("space-y-6 znc", className)}>{html}</div>;
};

export default MarkdownPreview;
