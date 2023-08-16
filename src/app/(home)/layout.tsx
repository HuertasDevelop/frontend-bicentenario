import "@/styles/globals.css";
import type { Metadata } from "next";
import Provider from "@/redux/Provider";
import { Setup } from "@/components/utils";
import { Navbar, Footer, BannerHome } from "@/components/common";

export const metadata: Metadata = {
  title: "Full Auth",
  description: "Full Auth application that provides jwt authentication",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Provider>
      <Setup />
      {/* <BannerHome /> */}
      <Navbar />
      <div className=" ">{children}</div>
      <Footer />
    </Provider>
  );
}
