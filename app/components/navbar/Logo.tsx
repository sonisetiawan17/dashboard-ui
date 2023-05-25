'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push('/')}
      alt="Logo"
      className="cursor-pointer"
      height="77"
      width="181"
      src="/images/logo.png"
    />
  );
};

export default Logo;
