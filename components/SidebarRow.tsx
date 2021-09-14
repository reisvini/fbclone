import Image from 'next/image';

type SidebarRowProps = {
  src?: string;
  Icon?: any;
  title: string;
};

export default function SidebarRow({ src, Icon, title }: SidebarRowProps) {
  return (
    <div className="flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer">
      {src && (
        <>
          <Image
            className="rounded-full"
            src={src}
            width={30}
            height={30}
            layout="fixed"
            alt="Profile Image"
          />
          <p className="hidden sm:inline-flex font-medium">{title}</p>
        </>
      )}

      {Icon && (
        <>
          <Icon className="h-8 w-8 text-blue-500" />

          <p className="hidden sm:inline-flex font-medium">{title}</p>
        </>
      )}
    </div>
  );
}
