"use client";

import { useParams } from "next/navigation";
import { publications } from "@/cron";
import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Publication } from "@/types";
import { validateNameWithSlug } from "@/libs/utils";

const TeamDetailPage = () => {
  const { slug } = useParams();
  const publication = useMemo<Publication | undefined>(() => {
    if (slug) {
      return publications.find((pub) =>
        validateNameWithSlug(pub.info.name, slug.toString())
      );
    }
  }, [slug]);

  if (!publication) {
    return <div>Member not found</div>;
  }

  const { info, articles, "co-authors": coAuthors } = publication;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3">
            <div className="relative h-64 w-full">
              <Image
                src=""
                alt={`${info.name}'s profile`}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="p-8 md:w-2/3">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {info.name}
            </h1>
            <p className="text-gray-600 mb-4">{info.affiliations}</p>
            <p className="text-gray-600 mb-4">
              <span className="font-semibold">Email: </span>
              <a
                href={`mailto:${info.email}`}
                className="text-blue-600 hover:underline"
              >
                {info.email}
              </a>
            </p>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Research Interests
              </h2>
              <div className="flex flex-wrap gap-2">
                {info.interests.map((interest, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 border-t">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Publications
          </h2>
          <div className="space-y-6">
            {articles.map((article, index) => (
              <div key={index} className="border-b pb-4 last:border-b-0">
                <Link
                  href={article.link}
                  className="text-lg font-medium text-blue-600 hover:underline"
                  target="_blank"
                >
                  {article.title}
                </Link>
                <p className="text-gray-600 mt-2">
                  {article.authors.join(", ")}
                </p>
                <div className="flex gap-4 mt-2 text-sm text-gray-500">
                  {article.publication && <span>{article.publication}</span>}
                  {article.publication_year && (
                    <span>{article.publication_year}</span>
                  )}
                  {article.cited_by_count !== null && (
                    <span>Cited by: {article.cited_by_count}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetailPage;
