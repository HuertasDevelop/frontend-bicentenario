import { formatCoin } from "@/utils/coin";
import Image from "next/image";

type Props = {
  project: Project;
};

const ProjectCard = ({
  project: {
    price,
    from_price,
    from_area,
    banner_card,
    people_card,
    type_coin,
    place,
  },
}: Props) => {
  return (
    <div className=" relative ">
      <div className="relative h-96 ">
        <Image
          src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${banner_card}`}
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
        <div className="bg-indigo-500 text-white p-2 rounded-xl  ">
          Lotes desde {from_area} m²
        </div>
      </div>

      <div className="absolute top-0 right-5 bg-primary pb-5 rounded-b-xl">
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
  );
};

export default ProjectCard;
