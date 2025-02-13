"use client";

import { useParams } from "next/navigation";
import { usePublicationsContext } from "../context/PublicationsContext";
import { validateNameWithSlug } from "@/libs/utils";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

export default function PublicationdetailPage() {
  const { slug } = useParams();
  const { publications } = usePublicationsContext();
  const { t } = useTranslation("common");

  const publication = publications.find((publication) =>
    publication.articles.some(
      (article) => slug && validateNameWithSlug(article.title, slug.toString())
    )
  );

  const currentArticle = useMemo(
    () =>
      publication?.articles.find(
        (article) =>
          slug && validateNameWithSlug(article.title, slug.toString())
      ),
    [publication, slug]
  );

  if (!publication) {
    return (
      <div className="text-center text-lg text-gray-500">
        {t("publication_not_found")}
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-sm">
      <h1 className="text-2xl font-normal text-gray-800 mb-2">
        {publication.info.name}
      </h1>
      <p className="text-base text-gray-600 mb-6">
        {publication.info.affiliations}
      </p>
      <div className="flex flex-col gap-4">
        {currentArticle && (
          <div className="border-b border-gray-200 pb-6">
            <h2 className="text-lg font-medium text-blue-700 hover:underline mb-2">
              {currentArticle.title}
            </h2>
            <p className="text-sm text-gray-700 mb-2">
              {currentArticle.authors.join(", ")}
            </p>
            <p className="text-sm text-gray-600 mb-3 italic">
              {currentArticle.publication}
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-gray-600">{t("year")}: </span>
                <span>{currentArticle.publication_year}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-600">{t("cited_by")}: </span>
                <span className="text-blue-700 hover:underline cursor-pointer">
                  {currentArticle.cited_by_count}
                </span>
              </div>
              <a
                href={currentArticle.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 hover:underline"
              >
                {t("view_in_google_scholar")}
              </a>
            </div>
            <div className="mt-4">
              <div className="flex gap-2 flex-wrap">
                {currentArticle.authors.map((author, index) => (
                  <span
                    key={index}
                    className="text-sm text-gray-600 hover:text-blue-700 hover:underline cursor-pointer"
                  >
                    {author}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
