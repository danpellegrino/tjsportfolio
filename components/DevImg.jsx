import Image from 'next/image';

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
        alt=''
      />
    </div>
  );
};

export default DevImg
