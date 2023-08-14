import { LoginForm } from "@/components/forms";
import Image from "next/image";

const LoginPage = () => {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
          <Image
            src="/icons/logo.webp"
            className="mx-auto"
            alt="Logo"
            width={200}
            height={200}
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Dashboard Huertas Inmboliaria
          </h2>
        </div>
        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
