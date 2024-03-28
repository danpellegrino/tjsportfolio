import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Tyler Senecal",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+518 299 8486",
  },
  {
    icon: <MailIcon size={20} />,
    text: "contact@tjs-designs.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on June 23, 2002",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Bachelor in Communications and Media Design",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Saratoga Springs, NY",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "SUNY Polytechnic Institute",
        qualification: "Bachelor of Science",
        years: "2020 - 2024",
      },
      {
        university: "SUNY Polytechnic Institute",
        qualification: "Master of Science",
        years: "2024 - 2025",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Student Government at Utica",
        role: "Director of Public Relations",
        years: "2021 - 2022",
      },
      {
        company: "Student Government at Utica",
        role: "Creative Design Coordinator",
        years: "2022 - Present",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "UI/UX Design",
      },
      {
        name: "Advertising",
      },
      {
        name: "Social Media Marketing",
      },
      {
        name: "HTML, CSS",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/photoshop.svg",
      },
      {
        imgPath: "/about/illustrator.svg",
      },
      {
        imgPath: "/about/aftereffects.svg",
      },
      {
        imgPath: "/about/indesign.svg",
      },
      {
        imgPath: "/about/premierepro.svg",
      },
      {
        imgPath: "/about/canva.svg",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 md:py-12 lg:py-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* Image */}
          <div className="hidden xl:flex flex-1 relative -top-[50px]">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[520px] h-[520px] bg-no-repeat relative"
              imgSrc="/about/developer.png"
            />
          </div>
          {/* Tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid grid-cols-3 xl:max-w-[520px] border">
                <TabsTrigger className="w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger className="w-auto" value="qualifications">
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* Tabs Content */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* Personal */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Know Me Better <span className="text-secondary">!</span>
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      Student, Graphic Designer, and Creative Innovator
                    </p>
                    {/* Icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-4">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* Languages */}
                    {/*
                    <div className='flex flex-col gap-y-2'>
                      <div className='text-primary'>Language Skill</div>
                      <div className='border-b border-border'></div>
                      <div>English, French, Spanish, Italian</div>
                    </div>
                    */}
                  </div>
                </TabsContent>
                {/* Qualifications */}
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      Qualifications
                    </h3>
                    {/* Experience & Education Wrapper */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* Experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "experience").title}
                          </h4>
                        </div>
                        {/* List */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "experience").data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div>
                                      <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* Education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>
                        {/* List */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education").data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div>
                                      <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* Skills */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">
                      Skills <span className="text-secondary">&</span> Tools
                    </h3>
                    {/* Skills */}
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* Skill List */}
                      <div>
                        {getData(skillData, "skills").data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                className="w-2/4 mb-2.5 text-center xl:text-left mx-auto xl:mx-0"
                                key={index}
                              >
                                <div className="font-medium">{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* Tools */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Tools
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* Tool List */}
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillData, "tools").data.map((item, index) => {
                          const { imgPath } = item;
                          return (
                            <div key={index}>
                              <Image
                                src={imgPath}
                                width={48}
                                height={48}
                                alt=""
                                priority
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
