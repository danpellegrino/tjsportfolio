import Image from "next/image";

const DevImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto"
        src={imgSrc}
        priority
        alt=""
      />
      <Image
        src="/about/frame.svg"
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto absolute top-0 left-0 opacity-80"
        priority
        alt=""
      />
    </div>
  );
};

export default DevImg;
