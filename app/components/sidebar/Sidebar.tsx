'use client';

import Image from 'next/image';
import Outlet from './Outlet';
import { useCallback, useState } from 'react';

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = useCallback(() => {
    setToggle((value) => !value);
  }, []);

  return (
    <div>
      <Outlet />
      <div className="cursor-pointer">
        <div className="mb-[10px] flex flex-row items-center justify-between text-white hover:bg-[#b42526] pr-[24px] py-3 transition">
          <div className="flex flex-row items-center gap-[13px]  w-full pl-[73px] ">
            <Image
              alt="Icon"
              src="/icons/dashboard.png"
              width="20"
              height="20"
            />
            <p className="font-base text-sm">Dashboard</p>
          </div>
        </div>
        <div className="mb-[10px] flex flex-row items-center justify-between text-white hover:bg-[#b42526]  pr-[24px] transition  py-3 ">
          <div className="flex flex-row items-center gap-[13px] w-full pl-[73px]">
            <Image alt="Icon" src="/icons/laporan.png" width="20" height="20" />
            <p className="font-base text-sm">Laporan</p>
          </div>
          <div>
            <Image
              alt="Logo"
              src="/icons/down.png"
              width="16"
              height="16"            
            />
          </div>
        </div>
        <div className="mb-[10px] flex flex-row items-center justify-between text-white hover:bg-[#b42526]  pr-[24px] transition  py-3 ">
          <div className="flex flex-row items-center gap-[13px] w-full pl-[73px]">
            <Image
              alt="Icon"
              src="/icons/analisis.png"
              width="20"
              height="20"
            />
            <p className="font-base text-sm">Analisis Laporan</p>
          </div>
          <div>
            <Image
              alt="Logo"
              src="/icons/down.png"
              width="16"
              height="16"
            />
          </div>
        </div>
        <div className="mb-[10px] flex flex-row items-center justify-between text-white hover:bg-[#b42526]  pr-[24px] transition  py-3 ">
          <div className="flex flex-row items-center gap-[13px] w-full pl-[73px]">
            <Image alt="Icon" src="/icons/produk.png" width="20" height="20" />
            <p className="font-base text-sm">Produk</p>
          </div>
          <div>
            <Image
              alt="Logo"
              src="/icons/down.png"
              width="16"
              height="16"
            />
          </div>
        </div>
        <div className="mb-[10px] flex flex-row items-center justify-between text-white hover:bg-[#b42526]  pr-[24px] transition  py-3">
          <div className="flex flex-row items-center gap-[13px] w-full pl-[73px]">
            <Image
              alt="Icon"
              src="/icons/pelanggan.png"
              width="20"
              height="20"
            />
            <p className="font-base text-sm">Pelanggan</p>
          </div>
          <div>
            <Image
              alt="Logo"
              src="/icons/down.png"
              width="16"
              height="16"
            />
          </div>
        </div>
        <div className="mb-[10px] flex flex-row items-center justify-between text-white hover:bg-[#b42526]  pr-[24px] transition  py-3">
          <div className="flex flex-row items-center gap-[13px] w-full pl-[73px]">
            <Image alt="Icon" src="/icons/promosi.png" width="20" height="20" />
            <p className="font-base text-sm">Promosi</p>
          </div>
          <div>
            <Image
              alt="Logo"
              src="/icons/down.png"
              width="16"
              height="16"
            />
          </div>
        </div>
        <div className="relative mb-[10px] flex flex-row items-center justify-between text-white hover:bg-[#b42526] pr-[24px] transition py-3">
          <div
            className="flex flex-row items-center gap-[13px] w-full pl-[73px]"
            onClick={toggleHandler}
          >
            <Image
              alt="Icon"
              src="/icons/inventori.png"
              width="20"
              height="20"
            />
            <p className="font-base text-sm">Inventori</p>
          </div>
          <div>
            <Image
              alt="Logo"
              src="/icons/down.png"
              width="16"
              height="16"
            />
          </div>
          {toggle && (
            <div className="absolute font-base text-sm top-[45px] w-full pl-[100px] py-2 flex flex-col h-fit">
              <p className="py-[10px] pl-[20px]">Pembelian stock</p>
              <div className="relative flex flex-row items-center justify-between pr-[24px]">
                <p className="py-[10px] pl-[20px]">Kelola stock</p>
                <Image
                  alt="Logo"
                  src="/icons/down.png"
                  width="16"
                  height="16"
                />
              </div>
              <p className="py-[10px] pl-[20px]">Daftar Pemasok (Suplier)</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
