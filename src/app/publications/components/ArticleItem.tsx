import { Article } from "@/types";
import { cn } from "@/libs/utils";
import { convertNameToSlug } from "@/libs/utils";
import Link from "next/link";
import { useTranslation } from "react-i18next";

interface ArticleItemProps {
  article: Article;
}

const ArticleItem: React.FC<ArticleItemProps> = ({ article }) => {
  const { t } = useTranslation("common");
  const slug = convertNameToSlug(article.title);

  return (
    <div
      className={cn(
        "flex",
        "flex-col",
        "items-start",
        "p-4",
        "bg-white",
        "border-2",
        "border-gray-200",
        "rounded-xl"
      )}
    >
      <Link
        href={`/publications/${slug}`}
        rel="noopener noreferrer"
        className={cn(
          "text-xl",
          "font-bold",
          "text-gray-900",
          "hover:underline",
          "hover:text-gray-700"
        )}
      >
        {article.title}
      </Link>
      <div className="w-full flex flex-row justify-between mt-4">
        <div className="">
          <p className={cn("text-sm", "text-gray-700", "font-medium")}>
            {t("by")} {article.authors.join(", ")}
          </p>
          <p className={cn("text-sm", "text-gray-700", "font-medium")}>
            {article.publication
              ? `${article.publication} (${article.publication_year})`
              : t("publication_unknown")}
          </p>
          <p className={cn("text-sm", "text-gray-700", "font-medium")}>
            {t("cited_by")}{" "}
            {article.cited_by_count ? article.cited_by_count : t("unknown")}
          </p>
          <p className={cn("text-sm", "text-gray-700", "font-medium")}>
            {article.topics.join(", ")}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <Link
            href={`/publications/${slug}`}
            rel="noopener noreferrer"
            className={cn(
              "text-blue-600",
              "hover:bg-blue-800",
              "inline-block text-center",
              "bg-blue-600",
              "text-white",
              "px-4",
              "py-2",
              "rounded-full",
              "font-semibold",
              "hover:shadow-md"
            )}
          >
            {t("read_more")}
          </Link>
          <Link
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "text-gray-700",
              "inline-block text-center",
              "px-2",
              "py-1",
              "rounded-full",
              "font-medium",
              "text-sm",
              "hover:underline hover:italic"
            )}
          >
            {t("view_in_google_scholar")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleItem;
