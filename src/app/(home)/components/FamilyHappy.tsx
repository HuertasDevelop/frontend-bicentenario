import Image from "next/image";

type Props = {
  promise: Promise<Comment[]>;
};

const FamilyHappy = async ({ promise }: Props) => {
  const comments = await promise;
  return (
    <div className="flex md:flex-row flex-col space-y-10 md:space-y-0  w-full justify-between md:space-x-20">
      <div className="flex items-center bg-primary py-10 px-20 rounded-r-3xl">
        <span className="text-7xl font-bold text-secondary-900 mr-2">+</span>
        <p>
          <span className="text-2xl  text-secondary-900">de</span>
          <br />
          <span className="text-5xl font-extrabold text-secondary-900">
            2000
          </span>{" "}
          <br />
          <span className="text-md font-bold text-secondary-900 ">
            lotes vendidos
          </span>
        </p>
      </div>
      <div className="flex  space-x-6 overflow-y-scroll">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="bg-secondary-900  flex justify-between flex-col rounded-3xl  min-w-[300px] overflow-hidden"
          >
            <p className="text-white text-xs  p-10">{comment.comment}</p>
            <div className="bg-naranja py-3 text-center text-white text-lg relative ">
              {comment.name}
              <div>
                <Image
                  src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${comment.photo}`}
                  alt="photo"
                  width={100}
                  height={100}
                  className="w-14 h-14 rounded-full mx-auto absolute -top-10 left-1/2 transform -translate-x-1/2 "
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FamilyHappy;
