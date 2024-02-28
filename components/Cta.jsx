import { Button } from "./ui/button";
import Link from "next/link";

const Cta = () => {
  return (
    <section className='py-24 bg-primary/10 dark:bg-secondary/10'>
      <div className="container mx-auto">
        <div className='flex flex-col items-center'>
            <h2 className='h2 max-w-xl text-center mb-8'>
                Prepared to turn your ideas into reality? I'm here to help
            </h2>
            <Link href='/contact'>
            <Button className="w-[165px]">Contact me</Button>
            </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
