"use client";

import { motion } from "framer-motion";

import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

// Variants
const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

const projectData = [
  {
    image: "/work/logo/AWLogoExplosion.png",
    width: 200,
    height: 250,
    category: "logo",
    name: "Apocalypse Week Logo",
    description:
      "Illustrator: client wants a logo for Apocalypse Week, a week of student activity events",
    url: "/",
    frontPage: true,
  },
  /*
  {
    video: "/work/video/KeepClearFinal.mp4",
    width: 640,
    height: 480,
    category: "video",
    name: "SFM Keep Clear Animation",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing.",
    url: "/",
    frontPage: true,
  },
  */
  {
    image: "/work/logo/LiquadosB.svg",
    width: 247,
    height: 250,
    category: "logo",
    name: "Liquados Logo",
    description:
      "Illustrator: client wants a logo for a refreshing dairy-based fruit juice company",
    url: "/",
    frontPage: false,
  },
  {
    image: "/work/poster/InterstellarPoster.png",
    width: 175,
    height: 250,
    category: "poster",
    name: "Interstellar Poster Concept",
    description: "Photoshop: client wanted a fan-made movie poster",
    url: "/",
    frontPage: false,
  },
  {
    image: "/work/poster/ExecutiveDebateSGU2024.png",
    width: 200,
    height: 250,
    category: "poster",
    name: "SGU Executive Debate Poster",
    description:
      "Canva + Photoshop: client requested a debate event poster for a student government election",
    url: "/",
    frontPage: true,
  },
  {
    image: "/work/poster/Fall 2022 Senate Interest Form Poster.png",
    width: 200,
    height: 250,
    category: "poster",
    name: "SGU Senate Interest Form Poster",
    description:
      "Canva: client needed interest in senator positions for student government (SGU)",
    url: "/",
    frontPage: true,
  },
  {
    image: "/work/poster/Hiring Org Heads.png",
    width: 200,
    height: 250,
    category: "poster",
    name: "SGU Organizational Head Hiring Poster",
    description:
      "Canva + Photoshop: client needs org head positions filled for events, club funding, esports, etc",
    url: "/",
    frontPage: true,
  },
  {
    image: "/work/poster/Spring 2023 Election Poster.png",
    width: 200,
    height: 250,
    category: "poster",
    name: "SGU Spring 2023 Election Poster",
    description:
      "Canva + Photoshop: client needs a poster for the student government election (SGU)",
    url: "/",
    frontPage: false,
  },
  {
    image: "/work/poster/Positions.png",
    width: 200,
    height: 250,
    category: "poster",
    name: "SGU PR Positions Poster",
    description:
      "Canva + Photoshop: client needs public relations team positions filled (SGU)",
    url: "/",
    frontPage: false,
  },
  {
    image: "/work/poster/TFT Org Head Post.png",
    width: 247,
    height: 250,
    category: "poster",
    name: "The Factory Times Org Head Poster",
    description:
      "Canva: client wants org head position poster specific to Factory times",
    url: "/",
    frontPage: false,
  },
  {
    image: "/work/poster/TurkeyDonation.png",
    width: 200,
    height: 250,
    category: "poster",
    name: "SGU Türkiye Donation Poster",
    description:
      "Canva + Photoshop: helped client promote donations toward the Turkey earthquake victims",
    url: "/",
    frontPage: false,
  },
  {
    image: "/work/poster/WCM Org Head Post.png",
    width: 247,
    height: 250,
    category: "poster",
    name: "Wildcat Media Org Head Instagram Post",
    description:
      "Canva: client wants org head position post specific to Wildcat Media",
    url: "/",
    frontPage: false,
  },
  {
    image: "/work/poster/WCM Org Head Poster.png",
    width: 200,
    height: 250,
    category: "poster",
    name: "Wildcat Media Org Head Poster",
    description:
      "Canva: client wants org head position poster specific to Wildcat Media",
    url: "/",
    frontPage: false,
  },
  {
    image: "/work/poster/WEB Org Head Post.png",
    width: 247,
    height: 250,
    category: "poster",
    name: "Wildcat Events Board Org Head Poster",
    description:
      "Canva: client wants org head position post specific to Wildcat Events board",
    url: "/",
    frontPage: false,
  },
  /*
  {
    video: "/work/video/30secCommercial.mp4",
    width: 640,
    height: 480,
    category: "video",
    name: "30 Second Rockstar Commercial",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing.",
    url: "/",
    frontPage: false,
  },
  */
  {
    image: "/work/poster/SFMKeepClear2.png",
    width: 175,
    height: 250,
    category: "poster",
    name: "Keep Clear Poster Design",
    description:
      "Photoshop: client requested a movie poster for an animation assignment",
    url: "/",
    frontPage: false,
  },
  /*
  {
    video: "/work/video/TheConductorsExpress.mp4",
    width: 640,
    height: 480,
    category: "video",
    name: "The Conductor's Express Edit",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing.",
    url: "/",
    frontPage: true,
  },
  */
];

// remove category duplicates
const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-3 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <motion.main
                    variants={variants}
                    initial="hidden"
                    animate="enter"
                    transition={{ type: "linear", delay: 0.0, duration: 0.4 }}
                  >
                    <ProjectCard project={project} />
                  </motion.main>
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
