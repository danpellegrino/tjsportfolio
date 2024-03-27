"use client";
import Link from "next/link";
import { Button } from "./ui/button";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagi, Pagination } from "swiper/modules";

// components
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/logo/AWLogoExplosion.png",
    width: 200,
    height: 250,
    category: "logo",
    name: "Apocalypse Week Logo",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing.",
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
    description: "Lorem ipsum dolor sit amet consectetur adipiscing.",
    url: "/",
    frontPage: false,
  },
  {
    image: "/work/poster/InterstellarPoster.png",
    width: 175,
    height: 250,
    category: "poster",
    name: "Interstellar Poster Concept",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing.",
    url: "/",
    frontPage: false,
  },
  {
    image: "/work/poster/ExecutiveDebateSGU2024.png",
    width: 200,
    height: 250,
    category: "poster",
    name: "SGU Executive Debate Poster",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing.",
    url: "/",
    frontPage: true,
  },
  {
    image: "/work/poster/Fall 2022 Senate Interest Form Poster.png",
    width: 200,
    height: 250,
    category: "poster",
    name: "SGU Senate Interest Form Poster",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing.",
    url: "/",
    frontPage: true,
  },
  {
    image: "/work/poster/Hiring Org Heads.png",
    width: 200,
    height: 250,
    category: "poster",
    name: "SGU Organizational Head Hiring Poster",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing.",
    url: "/",
    frontPage: true,
  },
  {
    image: "/work/poster/Spring 2023 Election Poster.png",
    width: 200,
    height: 250,
    category: "poster",
    name: "SGU Spring 2023 Election Poster",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing.",
    url: "/",
    frontPage: false,
  },
  {
    image: "/work/poster/Positions.png",
    width: 200,
    height: 250,
    category: "poster",
    name: "SGU PR Positions Poster",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing.",
    url: "/",
    frontPage: false,
  },
  {
    image: "/work/poster/TFT Org Head Post.png",
    width: 247,
    height: 250,
    category: "poster",
    name: "The Factory Times Org Head Poster",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing.",
    url: "/",
    frontPage: false,
  },
  {
    image: "/work/poster/TurkeyDonation.png",
    width: 200,
    height: 250,
    category: "poster",
    name: "SGU Türkiye Donation Poster",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing.",
    url: "/",
    frontPage: false,
  },
  {
    image: "/work/poster/WCM Org Head Post.png",
    width: 247,
    height: 250,
    category: "poster",
    name: "Wildcat Media Org Head Instagram Post",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing.",
    url: "/",
    frontPage: false,
  },
  {
    image: "/work/poster/WCM Org Head Poster.png",
    width: 200,
    height: 250,
    category: "poster",
    name: "Wildcat Media Org Head Poster",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing.",
    url: "/",
    frontPage: false,
  },
  {
    image: "/work/poster/WEB Org Head Post.png",
    width: 247,
    height: 250,
    category: "poster",
    name: "Wildcat Events Board Org Head Poster",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing.",
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
    description: "Lorem ipsum dolor sit amet consectetur adipiscing.",
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
  {
    category: "video",
    name: "video placeholder",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing.",
    url: "/",
    frontPage: false,
  },
  {
    category: "extra",
    name: "extra placeholder",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing.",
    url: "/",
    frontPage: false,
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Check out what I've recently been working on:
          </p>
          <Link href="/projects">
            <Button className="w-[165px]">All projects</Button>
          </Link>
        </div>
        {/* slider*/}
        <div className="xl:max-w-[1000px] xxl2:max-w-[1400px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1800: {
                slidesPerView: 3,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first 5 projects for the slides */}
            {projectData.slice(0, 5).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
