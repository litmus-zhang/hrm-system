import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBeer } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="h-screen fixed left-0 top-0 flex flex-col bg-primary justify-between text-gray-200 w-fit">
      <div className="p-3">
        <img
          alt="Secure Sphere"
          src={"/SS-logo-white.png"}
          className="w-auto h-auto my-2"
          width={200}
          height={60}
        />
        <input
          className="p-1 bg-gray-600 rounded text-sm outline-none"
          type="text"
          placeholder="Search"
        />
      </div>

      <div className="">
        {new Array(4).fill(0).map((_, i) => (
          <SidebarItem key={i} icon={<FaBeer />} text="Dashboard" />
        ))}
        <p className="text-sm pl-3 my-2 text-gray-500">Others</p>
        {new Array(6).fill(0).map((_, i) => (
          <SidebarItem key={i} icon={<FaBeer />} text="Dashboard" />
        ))}
      </div>

      <div className="flex gap-2 pl-3 my-2 mb-4">
        <Image
          src={
            "https://gravatar.com/avatar/e15d88f84f8959b51bb4562fe9eec02a?s=400&d=robohash&r=x"
          }
          alt="avatar"
          width={40}
          height={40}
          className="rounded-full bg-gray-500"
        />
        <div className="">
          <p className="text-sm">John Doe</p>
          <p className="text-xs text-gray-500">Super Admin</p>
        </div>
      </div>
    </div>
  );
}

interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
  link?: string;
}
const SidebarItem = (props: SidebarItemProps) => {
  return (
    <Link
      href={"#"}
      className=" w-full cursor-pointer flex items-center gap-2 pl-3 hover:bg-secondary hover:text-primary p-2 rounded-sm text-sm"
    >
      <div className="w-4 h-4">{props.icon}</div>
      <p>{props.text}</p>
    </Link>
  );
};
