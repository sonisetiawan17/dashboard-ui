'use client';

import Avatar from '../Avatar';
import Notification from '../Notification';

const UserMenu = () => {
  return (
    <div
      className="
        flex
        flex-row
        items-center
    "
    >
      <Notification />
      <Avatar />
      <div
        className="
          hidden
          sm:flex
          flex-col
          justify-start
          tracking-wider
        "
      >
        <p className="text-base font-medium">Muaffa Syukur</p>
        <p className="text-xs font-normal text-[#667085]">Hitnes Muharram</p>
      </div>
    </div>
  );
};

export default UserMenu;
