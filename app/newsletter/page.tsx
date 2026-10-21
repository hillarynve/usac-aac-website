import { fetchNewsletter } from "@/lib/sheetson";
import NewsletterClient from "./newsletter";

export default async function NewsletterPage() {
  const rows = await fetchNewsletter();

 console.log(
  "Sheetson rows:",
  rows.map((row: any) => ({
    title: row.Title,
    image: row.Img,
    pages: row.Pages,
  }))
);

  return <NewsletterClient newsletters={rows} />;
}

