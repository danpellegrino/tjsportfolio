import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";
// components
import Form from "@/components/Form";

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/* text & illustration */}
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-2">
          {/* text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello 👋
            </div>
            <h1 className="h1 max-w-md mb-8">Let's Work Together.</h1>
            <p className="subtitle max-w-[380px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat,
              nostrum.
            </p>
          </div>
          {/* illustration */}
          <div className="hidden xl:flex mx-auto w-[250px] bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-[center_top_3rem] bg-no-repeat" />
        </div>
        {/* info text & form */}
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          {/* info text */}
          <div className="flex flex-col gap-y-4 xl:gap-y-12 mb-12 xl:mb-24 text-base xl:text-lg">
            {/* mail */}
            <div className="flex items-center gap-x-6">
              <MailIcon size={18} className="text-primary" />
              <div>contact@tjs-designs.com</div>
            </div>
            {/* address */}
            <div className="flex items-center gap-x-6">
              <HomeIcon size={18} className="text-primary" />
              <div>Saratoga Springs, NY</div>
            </div>
            {/* phone */}
            <div className="flex items-center gap-x-6">
              <PhoneCall size={18} className="text-primary" />
              <div>+518 299 8486</div>
            </div>
          </div>
          <div className="relative xl:-top-12">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
