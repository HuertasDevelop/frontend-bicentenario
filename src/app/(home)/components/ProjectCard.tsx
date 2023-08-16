import Image from "next/image";

type Props = {
  project: Project;
};

const ProjectCard = ({
  project: {
    location,
    price,
    from_price,
    from_area,
    logo,
    photo_miniature,
    people_miniature,
  },
}: Props) => {
  console.log(photo_miniature);
  return (
    <div className=" relative ">
      <div className="relative h-96 ">
        <Image
          src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${photo_miniature}`}
          alt="photo_miniature"
          layout="fill"
          objectFit="cover"
          className="rounded-3xl"
        />
      </div>
      <div className="absolute bottom-0 -left-14 flex items-end ">
        <Image
          src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${people_miniature}`}
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
          <p className="text-white text-2xl font-bold mb-6">Asia</p>
          <p className="text-sm ">
            Al contado desde:
            <br />{" "}
            <span className="text-2xl  font-extrabold">{from_price}</span>
          </p>
          <p className="bg-white text-secondary-900 w-full px-5">
            Inicial desde:
            <br /> <span className=" font-bold text-3xl">{price}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
