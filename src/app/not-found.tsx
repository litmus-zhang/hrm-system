import Button from "@/components/Button";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex items-center bg-gray-300 h-screen flex-col justify-center ">
      <h1 className="text-8xl font-black -my-20 -z-1 text-gray-200 fill-transparent">
        404
      </h1>
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p>The page you are looking for doesn’t exist or has been moved</p>{" "}
      <div className="flex gap-2 my-2">
        <Button variants="outline" text="Go Back" />
        <Button variants="solid" text="Dashboard" />
      </div>
    </div>
  );
}
