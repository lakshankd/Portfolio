"use client";
import React, { useEffect, useState } from "react";
import { Separator } from "../ui/separator";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import DianaLoginPage from "../../assets/images/projects/descriptions/diana-loginpage.png";
import DianaDashboard from "../../assets/images/projects/descriptions/diana-dashboard.png";
import Image from "next/image";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Skeleton } from "../ui/skeleton";
import { AlertCircle } from "lucide-react";
import { SiTailwindcss, SiSpringboot, SiReact, SiMysql } from "react-icons/si";

const DianaHRMSProject = () => {
  const contributorUsernames = [
    "lakshankd",
    "salinda-yasas-99",
    "HeshanSnjaya",
  ];
  const [contributors, setContributors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const projectLinks = {
    frontend: "https://github.com/salinda-yasas-99/HRM--Frontend",
    backend: "https://github.com/HeshanSnjaya/humanResourceManagement",
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
          Diana HRM is a full-stack human resource management system designed to
          streamline HR operations with role-based dashboards. The platform
          provides distinct interfaces for administrators and employees,
          ensuring secure access to relevant functionalities while automating
          critical workflows.
        </p>
        <Image
          src={DianaLoginPage}
          alt="Diana Login Pages - UI"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
      </div>
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
          <span className="font-bold text-neutral-700">
            Key Features & Implementation:
          </span>{" "}
          The system offers a comprehensive dashboard displaying real-time
          analytics including employee count, department/position distributions,
          and leave application statuses through interactive pie charts.
          Role-specific modules include:
        </p>
        <Image
          src={DianaDashboard}
          alt="Diana Dashboards - UI"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
      </div>
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="mb-3">
              <p className="text-neutral-600 text-base md:text-2xl font-bold">
                Technologies Used
              </p>
              <div className="flex flex-wrap gap-y-1.5 h-5 items-center space-x-4 text-sm text-neutral-700 mb-2">
                <div className="flex flex-row gap-3 items-center ">
                  ReactJs <SiReact />
                </div>
                <Separator orientation="vertical" className="bg-neutral-700" />
                <div className="flex flex-row gap-3 items-center ">
                  Tailwind CSS <SiTailwindcss />
                </div>
              </div>
              <div className="flex flex-wrap gap-y-1.5 h-5 items-center space-x-4 text-sm text-neutral-700 mb-2">
                <div className="flex flex-row gap-3 items-center ">
                  SpringBoot <SiSpringboot />
                </div>
                <Separator orientation="vertical" className="bg-neutral-700" />
                <div className="flex flex-row gap-3 items-center ">
                  MySQL <SiMysql />
                </div>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-neutral-600 text-base md:text-2xl font-bold">
                Project Links
              </p>
              <div className="flex h-5 items-center space-x-4 text-sm text-neutral-700">
                <Link
                  href={projectLinks.frontend}
                  className="flex flex-row gap-3 items-center underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Frontend <FaGithub />
                </Link>
                <Separator orientation="vertical" className="bg-neutral-700" />
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

export default DianaHRMSProject;
