import Image from "next/image";
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <section className="bg-white p-10 w-1/2 flex flex-col ">{children}</section>
      <section className="bg-primary flex flex-col items-center gap-2 p-16 py-24  text-white mx-auto text-center w-1/2">
        <h1 className="text-2xl font-bold">Welcome to our HRM System</h1>
        <p>
          Lorem ipsum dolor sit amet, consectell tu orem consec Lorem ipsum
          dolor sit amet, consectetur adipiscilll adi
        </p>
        <Image className="motion-safe:animate-pulse my-10 w-auto h-auto" width={400} height={400} alt="Login" src={"/login-image.png"} />
      </section>
    </div>
  );
}
