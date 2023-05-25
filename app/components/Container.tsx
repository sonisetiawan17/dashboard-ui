'use client';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div
      className="
        max-w-[1564px]
        mx-auto
        lg:px-[70px]
        md:px-10
        sm:px-6
        px-4
    "
    >
      {children}
    </div>
  );
};

export default Container;
