"use client";

import { Publication } from "@/types";
import { useState } from "react";

interface PublicationItemsProps {
  publication: Publication;
}

const PublicationItem: React.FC<PublicationItemsProps> = ({ publication }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg p-4">
      <h2 className="text-lg leading-6 font-medium text-gray-900">
        {publication.info.name}
      </h2>
      <p className="mt-1 max-w-2xl text-sm text-gray-500">
        {publication.info.affiliations}
      </p>
      <p className="mt-1 max-w-2xl text-sm text-gray-500">
        {publication.info.email}
      </p>
      <div className="mt-4">
        <strong>Interests:</strong>
        <ul className="mt-1 list-disc list-inside">
          {publication.info.interests.map((interest, index) => (
            <li key={index} className="text-sm text-gray-700">
              {interest}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <strong>Articles:</strong>
        <ul className="mt-1 list-disc list-inside">
          {publication.articles.map((article, index) => (
            <li key={index} className="text-sm text-gray-700">
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                {article.title}
              </a>
              <span className="text-gray-500">
                {article.publication_year
                  ? `(${article.publication_year})`
                  : ""}
              </span>
              <span className="text-gray-500">
                {article.cited_by_count
                  ? `Cited by ${article.cited_by_count}`
                  : ""}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={toggleExpand}
        className="mt-4 w-full flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {isExpanded ? "Collapse" : "Expand"}
      </button>
      {isExpanded && (
        <div className="s mt-4">
          <strong>Co-Authors:</strong>
          <ul className="mt-1 list-disc list-inside">
            {publication["co-authors"].map((author, index) => (
              <li key={index} className="text-sm text-gray-700">
                <a
                  href={author.profile_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  {author.name}
                </a>
                <span className="text-gray-500">{author.affiliation}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PublicationItem;
