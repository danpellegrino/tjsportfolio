import Link from "next/link";
import Socials from "./Socials";
import { LinkIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          {/* socials */}
          <Socials
            containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
            iconsStyles="text-primary text-[20px] hover:text-white transition-all"
          />
          {/* copyright */}
          <div className="text-white/70">
            Copyright &copy; TJSDesigns. All rights reserved.
          </div>
          {/* creator */}
          <div className="text-white/70">
            Website created by <Link className="hover:text-white transition-all" href="https://danieljpellegrino.com">Daniel Pellegrino
            <LinkIcon className="inline-block ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
