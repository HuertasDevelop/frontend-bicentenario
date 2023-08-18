import { getAbout } from "@/redux/actions/getAbout";
import { getOffices } from "@/redux/actions/getOficces";
import { getProjects } from "@/redux/actions/getProjects";
import { getStats } from "@/redux/actions/getStats";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { SiWaze, SiGooglemaps } from "react-icons/si";
export default function AboutPage() {
  const about = getAbout();
  const stats = getStats();
  const projects = getProjects();
  const offices = getOffices();

  return (
    <main>
      <Suspense fallback={<>loading...</>}>
        <Feature promise={about} />
      </Suspense>
      <Suspense fallback={<>loading...</>}>
        <Stats promise={stats} />
      </Suspense>
      <Suspense fallback={<>loading...</>}>
        <ProjectsList promise={projects} />
      </Suspense>
      <Suspense fallback={<>loading...</>}>
        <Banner2 promise={about} />
      </Suspense>
      <Suspense fallback={<>loading...</>}>
        <OfficeList promise={offices} />
      </Suspense>
    </main>
  );
}

async function Feature({ promise }: { promise: Promise<About> }) {
  const contact = await promise;
  if (!contact) return null;
  const { banner_bg, description } = contact;

  return (
    <>
      <div
        className="flex justify-center flex-col items-center relative h-[500px] lg:h-[650px] w-full overflow-hidden"
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_MEDIA_URL}${banner_bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute top-5 mx-2 rounded-xl lg:top-20  lg:right-20  bg-celeste bg-opacity-70 p-10 flex justify-center flex-col items-center space-y-10 ">
          <h1 className="lg:text-7xl text-2xl font-bold tracking-widest text-secondary-900">
            QUIÉNES SOMOS
          </h1>
          <p className="text-lg lg:text-2xl font-bold tracking-widest max-w-lg text-justify text-white">
            {description}
          </p>
        </div>
      </div>
    </>
  );
}
async function Banner2({ promise }: { promise: Promise<About> }) {
  const contact = await promise;
  if (!contact) return null;
  const { banner_info, description } = contact;

  return (
    <div className="flex justify-center mb-10">
      <Image
        src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${banner_info}`}
        alt={description}
        width={1200}
        height={500}
      />
    </div>
  );
}
async function Stats({ promise }: { promise: Promise<Stats[]> }) {
  const stats = await promise;
  if (!stats) return null;

  return (
    <div className="bg-secondary-900 flex justify-center flex-col items-center space-y-10 pt-16 pb-10 mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-20 gap-10  max-w-8xl mx-5">
        {stats.map((stat) => {
          const { id, title, description } = stat;
          return (
            <div
              key={id}
              className="flex justify-center flex-col items-center space-y-10 bg-primary lg:-mb-20 px-16 pt-10 pb-20 rounded-[45px]"
            >
              <div className="flex justify-center flex-col items-center space-y-5 text-secondary-50">
                <h2 className=" text-3xl lg:text-6xl font-bold text-center">
                  {title}
                </h2>
              </div>
              <p className="text-lg lg:text-xl font-bold tracking-tight text-justify max-w-xs">
                {description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
async function ProjectsList({ promise }: { promise: Promise<Project[]> }) {
  const projects = await promise;

  return (
    <div className="py-10 flex justify-center max-w-7xl mx-auto ">
      <div className="bg-secondary-900 py-20 px-8 rounded-l-[45px] ">
        <h2 className="text-center text-7xl max-w-lg font-bold tracking-widest text-white ">
          Nuestros Proyectos
        </h2>
      </div>
      <div className="bg-primary   rounded-r-[45px] flex  p-10 overflow-x-auto overflow-y-hidden relative w-full">
        {projects.map(({ slug, description, logo }) => (
          <Link
            href={`/proyectos/${slug}`}
            key={slug}
            className="flex justify-center  items-center p-5 bg-white  rounded-xl shadow-xl w-60 h-60 hover:w-64 hover:mx-7 -mx-5 transition-all duration-500 ease-in-out overflow-hidden"
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${logo}`}
              alt={description}
              width={150}
              height={150}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
async function OfficeList({ promise }: { promise: Promise<Office[]> }) {
  const projects = await promise;

  return (
    <div className="py-10 flex justify-center max-w-7xl mx-auto ">
      <div className="bg-secondary-900 py-20 px-8 rounded-l-[45px] ">
        <h2 className="text-center text-6xl max-w-lg font-bold tracking-widest text-white ">
          OFICINAS DE VENTAS
        </h2>
      </div>
      <div className="bg-primary   rounded-r-[45px] flex  p-10 overflow-x-auto overflow-y-hidden relative w-full">
        {projects.map(
          ({ address, id, link_google_maps, link_waze, reference }) => (
            <div
              key={id}
              className="flex justify-center relative flex-col  items-center p-5 bg-white  rounded-xl shadow-xl w-60 h-60 group"
            >
              <HiOutlineOfficeBuilding className="text-6xl text-secondary-50" />
              <p>{address}</p>

              <Link
                target="_blank"
                className="hidden group-hover:flex justify-center items-center space-x-5 absolute bottom-5 right-5 p-1 border rounded-lg hover:bg-gray-100"
                href={link_google_maps}
              >
                <SiGooglemaps className="text-2xl text-secondary-50" />
              </Link>
              <Link
                target="_blank"
                href={link_waze}
                className=" justify-center items-center space-x-5 absolute bottom-5 left-5 hidden group-hover:flex p-1 border rounded-lg  hover:bg-gray-100 "
              >
                <SiWaze className="text-2xl text-secondary-50  " />
              </Link>
            </div>
          )
        )}
      </div>
    </div>
  );
}
