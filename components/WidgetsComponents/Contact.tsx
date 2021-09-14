import Image from 'next/image';

type ContactProps = {
  src: string;
  name: string;
};

export default function Contact({ src, name }: ContactProps) {
  return (
    <div className="flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl">
      <Image
        className="rounded-full"
        objectFit="cover"
        width={50}
        height={50}
        layout="fixed"
        src={src}
        alt="Contact Image"
      />

      <p>{name}</p>

      <div className="absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full"></div>
    </div>
  );
}
