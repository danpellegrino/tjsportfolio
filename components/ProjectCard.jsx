import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { ExpandIcon, Share2Icon } from "lucide-react";
import { Badge } from "./ui/badge";

import { useToast } from "@/components/ui/use-toast";

const ProjectCard = ({ project }) => {
  const { toast } = useToast();

  return (
    <Card className="group overflow-hidden relative">
      <CardHeader className="p-0">
        {/* image */}
        {project.image && (
          <div className="relative w-full h-[300px] flex items-center justify-center bg-primary/15 dark:bg-secondary/20 xl:bg-work_project_bg xl:bg-cover xl:bg-no-repeat overflow-hidden">
            <Image
              className={`absolute drop-shadow-2xl`}
              src={project.image}
              width={project.width || project.height || 247}
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
            <div className="flex gap-x-4">
              <Link
                href={project.url}
                className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
              >
                <ExpandIcon className="text-white" />
              </Link>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(project.url);
                  toast({
                    title: "Project URL copied to clipboard!",
                  });
                }}
                href={project.url}
                className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
              >
                <Share2Icon className="text-white" />
              </button>
            </div>
          </div>
        )}
        {/* video */}
        {/*
                {project.video &&
                    <div className='relative w-full h-[300px] flex items-center justify-center bg-black overflow-hidden'>
                        <video
                            className='absolute w-full h-full object-cover'
                            alt={project.name}
                            autoPlay
                            loop
                            muted
                            playsInline
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
                        />
                        */}
        {/* btn links */}
        {/*
                        <div className='flex gap-x-4'>
                            <Link
                                href={project.url}
                                className='bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200'
                            >
                                <ExpandIcon className='text-white' />
                            </Link>
                            <button
                                onClick={() => {
                                    navigator.clipboard.writeText(project.url)
                                    toast({
                                        title: "Project URL copied to clipboard!",
                                    })
                                }}
                                href={project.url}
                                className='bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200'
                            >
                                <Share2Icon className='text-white' />
                            </button>
                        </div>
                    </div>
                    */}
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
          {project.category}
        </Badge>
        <h4 className="h4 mb-1">{project.name}</h4>
        <p className="text-muted-foreground text-lg">{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
