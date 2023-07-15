import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBeer } from "react-icons/fa";
import AuthLayout from "../pages/auth/layout";

export default function index() {
  return (
    <AuthLayout>
      <div className="flex justify-between">
        <Image
          alt="Secure Sphere"
          src={"/SS-logo.png"}
          width={200}
          height={60}
          className="w-auto h-auto"
        />
        <div className="flex items-center gap-2">
          Invite New User <FaBeer />
        </div>
      </div>
      <div className="flex self-center flex-col gap-2 text-center my-32 w-[400px]">
        <h1 className="font-bold text-2xl">Hello Again</h1>
        <p>
          Lorem ipsum dolor sit amet, consectell tu orem consec Lorem ipsum
          dolor sit amet, consectetur adipiscilll adi
        </p>
        <input
          className="border-l-4 outline-none bg-gray-300 px-3 py-2 border-l-primary rounded-md"
          type="email"
          placeholder="input your user ID or Email"
        />
        <input
          className="border-l-4 outline-none bg-gray-300 px-3 py-2 border-l-primary rounded-md mt-2"
          type="password"
          placeholder="input your password"
        />
        <div className="flex justify-between items-center text-sm my-3">
          <p>
            <input type="checkbox" /> Remember me
          </p>
          <p>
            <Link href="#">Forgot Password?</Link>
          </p>
        </div>
        <Button type="submit" variants="solid" text="SIGN IN" />
      </div>
    </AuthLayout>
  );
}
