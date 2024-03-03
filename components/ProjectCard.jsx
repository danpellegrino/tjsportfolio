import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Link2Icon } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogleDrive } from "@fortawesome/free-brands-svg-icons";
import { Badge } from "./ui/badge";

const ProjectCard = ({ project }) => {
    return (
        <Card className='group overflow-hidden relative'>
            <CardHeader className='p-0'>
                {/* image */}
                {project.image &&
                    <div className='relative w-full h-[300px] flex items-center justify-center bg-primary/15 dark:bg-secondary/20 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden'>
                        {/* image */}
                        <Image
                            className={`absolute drop-shadow-2xl`}
                            src={project.image}
                            width={project.width || project.height || 247}
                            height={project.height || project.width || 250}
                            alt=''
                            priority
                        />

                        {/* btn links */}
                        <div className='flex gap-x-4'>
                            <Link
                                href={project.link}
                                className='bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200'
                            >
                                <Link2Icon className='text-white' />
                            </Link>
                            <Link
                                href={project.drive}
                                className='bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200'
                            >
                                <FontAwesomeIcon icon={faGoogleDrive} className='text-white' />
                            </Link>
                        </div>
                    </div>
                }
                {/* video */}
                {project.video &&
                    <div className='relative w-full h-[300px] flex items-center justify-center bg-primary/15 dark:bg-secondary/20 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden'>
                        {/* image */}
                        <video
                            className={`absolute shadow-2xl`}
                            width={project.width || project.height || 247}
                            height={project.height || project.width || 250}
                            controls
                            preload='metadata'
                        >
                            <source src={project.video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                }
            </CardHeader>
            <div className='h-full px-8 py-6'>
                <Badge className='uppercase text-sm font-medium mb-2 absolute top-4 left-5'>
                    {project.category}
                </Badge>
                <h4 className='h4 mb-1'>{project.name}</h4>
                <p className='text-muted-foreground text-lg'>{project.description}</p>
            </div>
        </Card>
    );
};

export default ProjectCard;
