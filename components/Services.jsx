import { GanttChartSquare, NotebookPen, Film } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Digital & Physical Advertisements",
    description:
      "Let's unlock a brand's potential with tailored digital and physical ads, reaching your audience wherever they are online or in person.",
  },
  {
    icon: <NotebookPen size={72} strokeWidth={0.8} />,
    title: "Logo & Branding Creation",
    description:
      "Crafting a unique logo and personal brand is like designing a fingerprint for your identity. Explore the capabilities of a brand image and overall impact with personalized designs that speak to your wants and needs.",
  },
  {
    icon: <Film size={72} strokeWidth={0.8} />,
    title: "Animation & Video Production",
    description:
      "Enhance your business and brand identity by adding movement and sound. Animation and video will create a living, breathing world that enhances the overall quality of a brand that audiences will want to explore.",
  },
];

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          My Services
        </h2>
        {/* Grid Items */}
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, index) => {
            return (
              <Card
                className="mx-auto w-full max-w-[424px] xxl:max-w-[550px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative dark:drop-shadow-cyan-xl"
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-white dark:bg-transparent flex justify-center items-center ">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-2 text-2xl relative -top-[1vh]">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-lg xxl:text-xl text-left xl:text-center">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
