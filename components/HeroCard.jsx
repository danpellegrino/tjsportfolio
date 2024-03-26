import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlayIcon,
  PauseIcon,
} from "lucide-react";
import { Badge } from "./ui/badge";
import React, { useRef } from "react";

import { useToast } from "@/components/ui/use-toast";

import { useSwiper } from "swiper/react";

const HeroCard = ({ project }) => {
  const { toast } = useToast();
  const swiper = useSwiper();
  const vidRef = useRef(null);

  return (
    <Card className="group overflow-hidden relative">
      <CardHeader className="p-0">
        {/* image */}
        {project.image && (
          <div className="relative w-full xxl:h-[570px] xl:h-[390px] flex items-center justify-center bg-primary/15 dark:bg-secondary/20 xl:bg-work_project_bg xl:bg-cover xl:bg-no-repeat overflow-hidden">
            <Image
              className={`absolute drop-shadow-2xl`}
              src={project.image}
              width={project.width || project.height || 250}
              height={project.height || project.width || 250}
              alt={project.name}
              priority
              quality={100}
            />
            {/* overlay (prevent click on image) */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
              }}
            />

            {/* btn links */}
            <div className="flex gap-x-12 xxl2:gap-x-36">
              <button
                onClick={() => {
                  swiper.slidePrev();
                }}
                className="relative right-48 xxl:right-80 bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all"
              >
                <ChevronLeftIcon className="text-white" />
              </button>
              <button
                onClick={() => {
                  swiper.slideNext();
                }}
                className="relative left-48 xxl:left-80 bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all"
              >
                <ChevronRightIcon className="text-white" />
              </button>
            </div>
          </div>
        )}
        {/* video */}
        {/*
                {project.video &&
                    <div className='relative w-full xxl:h-[570px] xl:h-[400px] flex items-center justify-center bg-black overflow-hidden'>
                        <video
                            className='absolute w-full h-full object-cover'
                            alt={project.name}
                            autoPlay
                            loop
                            ref={vidRef}
                            muted
                        >
                            <source src={project.video} type='video/mp4' />
                        </video>
                */}
        {/* overlay (prevent click on video) */}
        {/*
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                            }}
                            onClick={() => {
                                if (vidRef.current && vidRef.current.paused) {
                                    vidRef.current.play()
                                } else {
                                    vidRef.current.pause()
                                }
                            }}
                        />
                */}

        {/* btn links */}
        {/*
                        <div className='flex gap-x-10 xxl:gap-x-16 xxl2:gap-x-20'>
                            <button
                                onClick={() => {
                                    swiper.slidePrev()
                                    vidRef.current.pause()
                                }}
                                className='relative right-36 xxl:right-64 xxl2:right-72 bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all'
                            >
                                <ChevronLeftIcon className='text-white' />
                            </button>
                            <button
                                onClick={() => {
                                    if (vidRef.current && vidRef.current.paused) {
                                        vidRef.current.play()
                                    } else {
                                        vidRef.current.pause()
                                    }
                                }}
                                className='relative bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all'
                            >
                                <PlayIcon className='text-white' />
                            </button>
                            <button
                                onClick={() => {
                                    swiper.slideNext()
                                    vidRef.current.pause()
                                }}
                                className='relative left-36 xxl:left-64 xxl2:left-72 bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all'
                            >
                                <ChevronRightIcon className='text-white' />
                            </button>
                        </div>
                    </div>
                            */}
      </CardHeader>
    </Card>
  );
};

export default HeroCard;
