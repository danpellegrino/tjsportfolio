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

const Hero = () => {
  return (
    <section className='py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none'>
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
              iconsStyles='text-primary text-[22px] hover:text-foreground transition-all'
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
            <DevImg
              containerStyles='bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom'
              imgSrc='/hero/developer.png'
            />
          </div>
        </div>
        {/* Icons */}
        <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
          <RiArrowDownSLine className='text-3xl text-primary' />
        </div>
      </div>
    </section>
  );
};

export default Hero
