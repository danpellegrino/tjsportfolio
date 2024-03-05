"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from 'lucide-react';

import localFont from 'next/font/local'
const myFont = localFont({
  src: '../fonts/kimberley.otf',
  weight: '200',
  style: 'normal',
})

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowUpSLine,
  RiArrowDownSLine,
} from 'react-icons/ri';

// Components
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";
import HeroCard from "./HeroCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

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
  {
    category: "extra",
    name: "extra placeholder",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing.",
    url: "/",
    frontPage: false,
  },
];

const Hero = () => {
  return (
    <section className='py-12 xl:py-24 xxl:py-36 xxl2:py-48 md:h-[98vh] lg:h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none'>
      <div className="container mx-auto">
        <div className='flex justify-between gap-x-8'>
          {/* Text */}
          <div className='flex max-w-[680px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
            <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'>
              Graphic Designer
            </div>
            <h1 className={`${myFont.className} h1 mb-4 text-white antialiased font-sans`}>Hello, my name is Tyler Senecal</h1>
            <p className='subtitle max-w-[490px] mx-auto xl:mx-0'>
              I am a graphic designer based in Saratoga Springs,
              New York specializing in marketing, branding, and
              digital advertising.
            </p>
            {/* Buttons */}
            <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
              <Link href='/contact'>
                <Button className='gap-x-2 w-[225px]'>
                  Contact Me <Send size={18} />
                </Button>
              </Link>
              <Button variant='secondary' className='gap-x-2 w-[225px]'>
                Download Resume
                <Download size={18} />
              </Button>
            </div>
            {/* Socials */}
            <Socials
              containerStyles='flex gap-x-6 mx-auto xl:mx-0'
              iconsStyles='text-primary text-[27px] hover:text-foreground transition-all'
            />
          </div>
          {/* Image */}
          <div className='hidden xl:flex relative'>
            {/* Badge 1 */}
            {/*
            <Badge
              containerStyles='absolute top-[24%] -left-[5rem]'
              icon={<RiBriefcase4Fill />}
              endCountNum={3}
              badgeText='Years Of Experience'
            /> 
            */}
            {/* Badge 2 */}
            {/*
            <Badge
              containerStyles='absolute top-[80%] -left-[1rem]'
              icon={<RiTodoFill />}
              endCountNum={6}
              endCountText='k'
              badgeText='Finsihed Projects'
            /> 
            */}
            {/* Badge 3 */}
            {/*
            <Badge
              containerStyles='absolute top-[55%] -right-8'
              icon={<RiTeamFill />}
              endCountNum={9}
              endCountText='k'
              badgeText='Happy Clients'
            />
            */}
            <div className='bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2'></div>
            {/* slider*/}
            <div className="xl:absolute xxl:max-w-[850px] xxl2:max-w-[950px] xl:max-w-[600px] xxl:-right-1 xl:right-0 xxl:-top-[4vh] xl:top-[4vh]">
              <Swiper
                className="absolute xxl:h-[580px] xl:h-[410px]"
                slidesPerView={1}
                spaceBetween={30}
                modules={[Pagination]}
                pagination={{ clickable: true }}
              >
                {/* show only the projects with frontPage set to true for the slides */}
                {projectData.filter(project => project.frontPage).map((project, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <HeroCard project={project} />
                    </SwiperSlide>
                  );
                })}

              </Swiper>
            </div>
          </div>
        </div>

      </div>
      {/* Icons */}
      <div className='hidden md:flex absolute justify-center w-full bottom-12 animate-bounce'>
        <RiArrowDownSLine className='text-3xl text-primary' />
      </div>
    </section>
  );
};

export default Hero
