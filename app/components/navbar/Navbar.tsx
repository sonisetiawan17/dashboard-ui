'use client';

import Container from '../Container';
import Logo from './Logo';
import UserMenu from './UserMenu';

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-lg">
      <div className="border-b-[1px]">
        <Container>
          <div
            className="
                flex
                flex-row
                items-center
                justify-between
                gap-3
                md:gap-0
            "
          >
            <Logo />
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
