import { Button } from "./ui/button";
import Link from "next/link";

const Cta = () => {
  return (
    <section className='py-24 bg-primary/10 dark:bg-secondary/10'>
      <div className="container mx-auto">
        <div className='flex flex-col items-center'>
            <h2 className='h2 max-w-xl text-center mb-8'>
                Lorem ipsum (CTA text here)
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
