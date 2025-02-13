"use client";

import { useMemo } from "react";
import { usePublicationsContext } from "../context/PublicationsContext";
import ArticleItem from "./ArticleItem";
import { useTranslation } from "react-i18next";

const PublicationList = () => {
  const { t } = useTranslation("common");
  const { articles, yearFilter } = usePublicationsContext();

  // TODO: implement filtering for articles
  const filteredArticles = useMemo(() => {
    return articles.filter(
      (article) => !yearFilter || article.publication_year === yearFilter
    );
  }, [articles, yearFilter]);

  if (filteredArticles.length > 0) {
    return (
      <div className="w-full flex flex-col gap-4">
        {filteredArticles.map((article, index) => (
          <ArticleItem key={`${article.title}-${index}`} article={article} />
        ))}
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col justify-center items-center mt-8">
      <p className="text-2xl text-gray-500">{t("no_articles_found")}</p>
      <p className="text-lg text-gray-600 mt-2">
        {t("adjust_filters_message")}
      </p>
    </div>
  );
};

export default PublicationList;
