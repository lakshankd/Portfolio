"use client";
import React, { useEffect, useState } from "react";
import { Separator } from "../ui/separator";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Skeleton } from "../ui/skeleton";
import { AlertCircle } from "lucide-react";
import { SiSpringboot, SiPostgresql, SiMysql, SiMongodb } from "react-icons/si";

const ECommercePlatformProject = () => {
  const contributorUsernames = ["lakshankd"];
  const [contributors, setContributors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const projectLinks = {
    backend: "https://github.com/lakshankd/Microservices-Springboot",
  };

  useEffect(() => {
    const fetchContributors = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const contributorPromises = contributorUsernames.map((username) =>
          fetch(`https://api.github.com/users/${username}`).then((response) => {
            if (!response.ok) {
              throw new Error(
                `Failed to fetch ${username}: ${response.status}`
              );
            }
            return response.json();
          })
        );

        const contributorData = await Promise.all(contributorPromises);

        const formattedContributors = contributorData.map((user) => ({
          id: user.name || user.login,
          name: user.name || user.login, // Use username if name isn't available
          designation: "Full-stack Developer",
          github: user.html_url,
          image: user.avatar_url,
        }));

        setContributors(formattedContributors);
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching GitHub contributors:", err);
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchContributors();
  }, []);

  return (
    <>
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
          This distributed e-commerce system implements a decoupled
          microservices architecture using Spring Boot, featuring three core
          domain services each powered by purpose-built databases. The Product
          Service manage dynamic product catalogs. The Order Service processes
          purchases. Completing the trio, the Inventory Service maintain
          real-time stock accuracy across high-volume SKUs. These specialized
          services communicate through an API Gateway that centralizes request
          routing, while a Eureka discovery server dynamically coordinates
          inter-service connections.
        </p>
      </div>

      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="space-y-1 mb-3">
              <p className="text-neutral-600 text-base md:text-2xl font-bold">
                Technologies Used
              </p>

              <div className="flex h-5 items-center space-x-4 text-sm text-neutral-700 mb-2">
                <div className="flex flex-row gap-3 items-center ">
                  SpringBoot <SiSpringboot />
                </div>
              </div>
              <div className="flex h-5 items-center space-x-4 text-sm text-neutral-700 mb-2">
                <div className="flex flex-row gap-3 items-center ">
                  MongoDB <SiMongodb />
                </div>
                <Separator orientation="vertical" className="bg-neutral-700" />
                <div className="flex flex-row gap-3 items-center ">
                  MySQL <SiMysql />
                </div>
                <Separator orientation="vertical" className="bg-neutral-700" />
                <div className="flex flex-row gap-3 items-center ">
                  PostgreSQL <SiPostgresql />
                </div>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-neutral-600 text-base md:text-2xl font-bold">
                Project Links
              </p>
              <div className="flex h-5 items-center space-x-4 text-sm text-neutral-700">
                <Link
                  href={projectLinks.backend}
                  className="flex flex-row gap-3 items-center underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Backend
                  <FaGithub />
                </Link>
              </div>
            </div>
          </div>
          <div>
            <p className="text-neutral-600 text-base md:text-2xl font-bold">
              Contributors
            </p>
            {isLoading ? (
              <div className="flex flex-row items-center justify-start my-5 w-full">
                <Skeleton className="h-12 w-12 rounded-full bg-[#b6b6b8] group relative -mr-4" />
                <Skeleton className="h-12 w-12 rounded-full bg-[#b6b6b8] group relative -mr-4" />
                <Skeleton className="h-12 w-12 rounded-full bg-[#b6b6b8] group relative -mr-4" />
                <Skeleton className="h-12 w-12 rounded-full bg-[#b6b6b8] group relative -mr-4" />
                <Skeleton className="h-12 w-12 rounded-full bg-[#b6b6b8] group relative -mr-4" />
              </div>
            ) : error ? (
              <Alert variant="destructive" className="my-5 w-full">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error!</AlertTitle>
                <AlertDescription>Couldn't load contributors</AlertDescription>
              </Alert>
            ) : (
              <div className="flex flex-row items-center justify-start my-5 w-full">
                <AnimatedTooltip items={contributors} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ECommercePlatformProject;
