import { Suspense } from "react";

import { Metadata } from "next";
import { getSlugProject } from "@/redux/actions/getSlugProject";
import Image from "next/image";
import { FormLead } from "@/components/forms";
import { formatCoin } from "@/utils/coin";
import { MapPinIcon } from "@heroicons/react/24/solid";

import { SiGooglemaps, SiWaze } from "react-icons/si";
import Link from "next/link";
import { Benefits, Carroucel } from "./components";

interface Props {
  params: { slug: string };
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await getSlugProject(params.slug);
  if (!project) {
    return {
      title: "Bicentenario Inmobiliaria - No encontrado",
      description:
        "Somos una empresa peruana, con experiencia en el sector inmobiliario, Inmobiliaria Bicentenario empresa 100% peruana encargada de brindarte la mejor oportunidad de invertir en tu futuro.",
    };
  }

  return {
    title: `${project.name} - Bicentenario Inmobiliaria`,
    description: project.description,
  };
}

export default async function Project({ params }: Props) {
  const project = getSlugProject(params.slug);
  return (
    <Suspense fallback={<>...</>}>
      <ProjectDetail promise={project} />
    </Suspense>
  );
}

async function ProjectDetail({
  promise,
}: {
  promise: Promise<Project | null>;
}) {
  const project = await promise;
  if (!project) return <>No se encontro el proyecto</>;

  const {
    areas,
    banner,
    description,
    price,
    location,
    type_coin,
    from_price,
    ref_location,
    name,
    photo_map,
    link_google_maps,
    link_waze,
    photo_feature,
    benefits,
    gallery,
  } = project;
  return (
    <section>
      <Image
        src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${banner}`}
        alt={description}
        width={3000}
        height={500}
        className="object-fill flex justify-center "
      />
      <div className="flex mx-auto max-w-7xl justify-between ">
        <div className="w-full">
          <div className="flex">
            <div className="w-full bg-secondary-900 px-4 text-center">
              <p className=" text-5xl text-primary">
                <strong className="text-lg font-normal text-white">
                  Inicial desde:
                </strong>
                <br />
                {formatCoin(price, type_coin)}
              </p>
              <p className="text-white text-3xl">
                <strong className="text-lg font-normal ">
                  Al contado desde:
                </strong>
                <br />
                {formatCoin(from_price, type_coin)}
              </p>
            </div>
            <div className="w-full bg-primary p-4 flex flex-col space-y-6">
              <div className="flex items-center justify-center space-x-4 text-secondary-900 text-xl font-bold">
                <MapPinIcon className="w-10 h-10 text-red-500" />
                <p>{location}</p>
              </div>
              <p className="text-secondary-50  w-48 mx-auto">{ref_location}</p>
            </div>
          </div>
          <div className=" px-10 ">
            <p className="text-secondary-900 text-justify text-lg py-5 tracking-tight">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignis
            </p>
            <div>
              <h2 className="text-primary text-4xl font-bold uppercase text-center my-5">
                Atributos del condominio
              </h2>
              <div className="bg-primary grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 rounded-2xl">
                {areas?.map(({ id, name, photo }) => (
                  <div
                    key={id}
                    className=" bg-secondary-900 rounded-3xl flex justify-center items-center flex-col  p-3"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${photo}`}
                      alt={description}
                      width={110}
                      height={100}
                      className="object-fill flex justify-center"
                    />
                    <p className="text-white text-lg text-center uppercase">
                      {name}
                    </p>
                  </div>
                ))}
              </div>
              <h2 className="text-primary text-4xl font-bold uppercase text-center my-5">
                Como llegar a {name}
              </h2>
              <div className="flex justify-center items-center relative">
                <Image
                  src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${photo_map}`}
                  alt={description}
                  width={500}
                  height={500}
                  className="border-4 border-celeste"
                />
                <div className="absolute bottom-5 left-0 w-64">
                  <Link
                    href={link_google_maps}
                    target="_blank"
                    className="bg-celeste p-4 rounded-2xl flex justify-center items-center space-x-2 hover:bg-sky-500"
                  >
                    <p className="text-white  text-center text-md">
                      ir con google maps
                    </p>
                    <SiGooglemaps className="w-5 h-5 text-white" />
                  </Link>
                </div>
                <div className="absolute bottom-5 right-0 w-64">
                  <Link
                    href={link_waze}
                    target="_blank"
                    className="bg-celeste p-4 rounded-2xl flex justify-center items-center space-x-2 hover:bg-sky-500"
                  >
                    <p className="text-white  text-center text-md">
                      ir con waze
                    </p>
                    <SiWaze className="w-5 h-5 text-white" />
                  </Link>
                </div>
              </div>
              <div className="flex justify-center items-center my-10">
                <Image
                  src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${photo_feature}`}
                  alt={description}
                  width={500}
                  height={500}
                  className=""
                />
              </div>
              <h2 className="text-celeste text-4xl font-bold uppercase text-center my-5">
                BENEFICIOS DE INVERSIÓN
              </h2>
              <div className="bg-primary p-2 rounded-3xl">
                <Benefits benefits={benefits} />
              </div>
              <h2 className="text-celeste text-4xl font-bold uppercase text-center my-5">
                GALERIA DE FOTOS
              </h2>
              <div className=" h-80 mx-5 ">
                <Carroucel gallery={gallery} />
              </div>
            </div>
          </div>
        </div>

        <div className="-m-20 w-full ">
          <FormLead sticky={true} />
        </div>
      </div>
    </section>
  );
}
