import Image from 'next/image';

export default function Header() {
  return (
    <div>
      {/* Left */}
      <div>
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
          alt="Facebook Logo"
        />
      </div>

      {/* Center */}

      {/* Right */}
    </div>
  );
}
