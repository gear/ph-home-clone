"use client";

import { useTeamContext } from "@/context/TeamContext";
import { Info } from "@/types";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { convertNameToSlug } from "@/libs/utils";

const InfoList = () => {
  const { members } = useTeamContext();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
      {members.map((member: Info) => (
        <div
          key={member.email}
          className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow items-center justify-center"
        >
          <div className="relative w-full h-36 bg-gray-100 flex items-center justify-center">
            <div className="relative w-32 h-32">
              <div className="absolute inset-0">
                <Image
                  src="/img/precision-health-logo.svg"
                  alt={`${member.name}'s profile`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="p-6">
            <Link href={`/members/${convertNameToSlug(member.name)}`}>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2 hover:underline">
                {member.name}
              </h3>
            </Link>
            <div className="space-y-2">
              <p className="text-gray-600">
                <span className="font-medium">Affiliations:</span>{" "}
                {member.affiliations}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Email:</span>{" "}
                <a
                  href={`mailto:${member.email}`}
                  className="text-blue-500 hover:text-blue-700"
                >
                  {member.email}
                </a>
              </p>
              <div>
                <span className="font-medium text-gray-600">Interests:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {member.interests.map((interest, index) => (
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
        </div>
      ))}
    </div>
  );
};

export default InfoList;
