'use client';

interface WrapperProps {
  children: React.ReactNode;
  sidebar?: boolean;
}

const Wrapper: React.FC<WrapperProps> = ({ children, sidebar }) => {
  return (
    <div
      className={`
        ${sidebar ? 'lg:mt-[25px]' : 'lg:mr-[70px]  lg:ml-[20px]'} 
    `}
    >
      {children}
    </div>
  );
};

export default Wrapper;
