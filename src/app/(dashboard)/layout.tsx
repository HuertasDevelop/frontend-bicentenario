import type { Metadata } from "next";

import { RequireAuth } from "@/components/utils";
import Provider from "@/redux/Provider";
import { Setup } from "@/components/utils";
import Image from "next/image";
import {
  SecundaryNav,
  Sidebar,
  Navbar,
  MobileSidebar,
} from "@/components/common/dashboard";
export const metadata: Metadata = {
  title: "Dashboard",
  description: "Full Auth application that provides jwt authentication",
};
interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <Provider>
      <Setup />
      {/* <Navbar /> */}
      <MobileSidebar />

      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-60 lg:flex-col ">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto items-center bg-white px-2 pb-4 border-r ">
          <div className="flex h-16 shrink-0 items-center ">
            <Image
              className="mx-auto"
              alt="Huertas Inmobiliaria "
              src="/icons/logo.webp"
              priority={true}
              width={200}
              height={200}
            />
          </div>
          <nav className="flex flex-1 flex-col ">
            <ul role="list" className="flex flex-1 flex-col gap-y-7 ">
              <li>
                <Sidebar />
              </li>

              <li className="mt-auto">
                <SecundaryNav />
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="lg:pl-60 ml-5 pr-5 pt-5 bg-gray-50">
        <Navbar />

        <main
          className="py-8 bg-gray-50"
          style={{ minHeight: "calc(100vh - 7rem)" }}
        >
          <RequireAuth>{children}</RequireAuth>
        </main>
      </div>

      {/* <Footer /> */}
    </Provider>
  );
}
