export function dateFormat(date: Date) {
  const res = new Date(date);
  const formattedDate = res.toLocaleString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  return formattedDate;
}
