import { TittleText } from "@/components/common";
import CarouselHome from "@/components/common/carousel";
import { getCarousel } from "@/redux/actions/getCarousel";
import { getProjects } from "@/redux/actions/getProjects";
import { Suspense } from "react";
import { FamilyHappy, ProjectCard } from "./components";
import { getHome } from "@/redux/actions/getHome";
import Image from "next/image";
import { FormLead } from "@/components/forms";
import { getComment } from "@/redux/actions/getComment";

export default function Home() {
  const projects = getProjects();
  const carouselData = getCarousel();
  const home = getHome();
  const comments = getComment();

  return (
    <main>
      {/* <HeroSectionHome /> */}
      <CarouselHome promise={carouselData} />

      {/* <div className="bg-gray-300  -pt-4 flex justify-center">
        <p className=" bg-primary text-white text-4xl font-bold text-center  px-20 rounded-t-3xl py-3">
          Obtén tu lote soñado con intereses <br /> bajísimoscon intereses
          bajísimos
        </p>
      </div> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <TittleText text="Proyectos disponibles" />
        <Suspense fallback={<>loading...</>}>
          <ProjectsList promise={projects} />
        </Suspense>
        <TittleText text="Familias felices" />

        <FamilyHappy promise={comments} />
      </div>
      <Suspense fallback={<>loading...</>}>
        <Feature promise={home} />
      </Suspense>
    </main>
  );
}

async function ProjectsList({ promise }: { promise: Promise<Project[]> }) {
  const projects = await promise;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

async function Feature({ promise }: { promise: Promise<Home[]> }) {
  const home = await promise;
  const banner3 = home.find((item) => item.type === "BANNER_3");
  const formImage = home.find((item) => item.type === "FORM");
  if (!banner3) return null;
  if (!formImage) return null;
  return (
    <>
      <div className="flex justify-center my-16 ">
        <Image
          src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${banner3.photo}`}
          alt={banner3?.description}
          width={1300}
          height={500}
        />
      </div>
      <div className="max-w-8xl mx-auto ">
        <FormLead image={formImage} />
      </div>
    </>
  );
}
