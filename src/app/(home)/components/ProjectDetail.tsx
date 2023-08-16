import { formatCoin } from "@/utils/coin";
import Image from "next/image";
import Link from "next/link";

type Props = {
  project: Project;
};

const ProjectDetail = ({
  project: {
    price,
    from_price,
    people_card,
    type_coin,
    place,
    description,
    slug,
    gallery,
    banner_detail,
    slogan,
    name,
  },
}: Props) => {
  return (
    <section className="my-10 mx-4 ">
      <h1 className="sr-only">{name}</h1>
      <h2 className="text-3xl font-bold text-celeste my-4 ">{slogan}</h2>
      <div className=" relative ">
        <div className=" h-96  ">
          <Image
            src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${banner_detail}`}
            alt="banner_card"
            layout="fill"
            objectFit="cover"
            className="rounded-3xl"
          />
        </div>
        <div className="absolute bottom-0 -left-14 flex items-end ">
          <Image
            src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${people_card}`}
            alt="photo_miniature"
            width={270}
            height={270}
          />
        </div>

        <div className="absolute top-0 right-5 md:right-20 bg-primary pb-5 rounded-b-xl">
          <div className="flex flex-col items-center">
            <p className="text-white text-3xl font-bold mb-6 uppercase mt-2">
              {place}
            </p>
            <p className="text-xs text-center">
              Al contado desde:
              <br />{" "}
              <span className="text-2xl  " style={{ fontWeight: 700 }}>
                {formatCoin(from_price, type_coin)}
              </span>
            </p>
            <p className="bg-white text-secondary-900 text-center px-5">
              Inicial desde:
              <br />{" "}
              <span style={{ fontWeight: 700 }} className="  text-3xl">
                {formatCoin(price, type_coin)}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between flex-col md:flex-row bg-primary md:space-x-10 space-y-5 md:space-y-0 py-5 px-10 text-white  mt-5 rounded-3xl">
        <div className="flex flex-col space-y-5 md:w-1/2 w-full">
          <p className="w-full text-justify ">{description}</p>
          <Link
            href={`/proyectos/${slug}`}
            className="text-secondary-900 text-center px-5 bg-white py-2 rounded-xl hover:bg-secondary-900 hover:text-white"
          >
            Ver más
          </Link>
        </div>
        <Image
          src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${gallery[0].photo}`}
          alt={gallery[0].alt}
          width={500}
          height={200}
          className="w-full rounded-3xl "
        />
      </div>
    </section>
  );
};

export default ProjectDetail;
