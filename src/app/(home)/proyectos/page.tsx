import { getProject } from "@/redux/actions/getProject";
import { getProjects } from "@/redux/actions/getProjects";
import Image from "next/image";
import { Suspense } from "react";
import { ProjectDetail } from "../components";
import { FormLead } from "@/components/forms";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bicentenario Inmobiliaria - Proyectos",
  description:
    "Bicentenario Inmobiliaria, cuenta con una amplia gama de proyectos inmobiliarios en Lima y provincias, conoce nuestros proyectos y encuentra el que más se adapte a tus necesidades.",
};

export default function Projects() {
  const projects = getProjects();
  const images_page = getProject();

  return (
    <main>
      <Suspense fallback={<>loading...</>}>
        <Feature promise={images_page} />
      </Suspense>
      <Suspense fallback={<>loading...</>}>
        <ProjectsList promise={projects} />
      </Suspense>
      <Suspense fallback={<>loading...</>}>
        <FormContact promise={images_page} />
      </Suspense>
      <Suspense fallback={<>loading...</>}>
        <Banner2 promise={images_page} />
      </Suspense>
    </main>
  );
}
async function Feature({ promise }: { promise: Promise<Home[]> }) {
  const home = await promise;
  const banner3 = home.find((item) => item.type === "BANNER_1");
  if (!banner3) return null;
  return (
    <>
      <div className="flex justify-center ">
        <Image
          src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${banner3.photo}`}
          alt={banner3?.description}
          width={2000}
          height={400}
          className=" "
        />
      </div>
    </>
  );
}
async function ProjectsList({ promise }: { promise: Promise<Project[]> }) {
  const projects = await promise;

  return (
    <div className="max-w-7xl mx-auto flex flex-col">
      {projects.map((project) => (
        <ProjectDetail key={project.id} project={project} />
      ))}
    </div>
  );
}

async function FormContact({ promise }: { promise: Promise<Home[]> }) {
  const home = await promise;
  const formImage = home.find((item) => item.type === "FORM");
  if (!formImage) return null;
  return (
    <div className="max-w-8xl mx-auto ">
      <FormLead image={formImage} />
    </div>
  );
}

async function Banner2({ promise }: { promise: Promise<Home[]> }) {
  const home = await promise;
  const banner2 = home.find((item) => item.type === "BANNER_2");
  if (!banner2) return null;
  return (
    <>
      <div className="flex justify-center my-16 ">
        <Image
          src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${banner2.photo}`}
          alt={banner2?.description}
          width={2000}
          height={400}
          className="object-fill "
        />
      </div>
    </>
  );
}
