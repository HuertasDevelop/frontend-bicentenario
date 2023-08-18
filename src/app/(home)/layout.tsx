import "@/styles/globals.css";
import type { Metadata } from "next";
import Provider from "@/redux/Provider";
import { Setup } from "@/components/utils";
import { Navbar, Footer, BannerHome } from "@/components/common";

export const metadata: Metadata = {
  title: "Bicentenario Inmobiliaria - Inicio",
  description:
    "Somos una empresa peruana, con experiencia en el sector inmobiliario, Inmobiliaria Bicentenario empresa 100% peruana encargada de brindarte la mejor oportunidad de invertir en tu futuro.",
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
