import React from "react";

type Props = {};

const BannerHome = (props: Props) => {
  return (
    <div className="bg-primary  pt-2 flex justify-center border-b-4 border-white">
      <p className=" bg-white text-4xl font-bold text-center  px-20 rounded-t-3xl py-3">
        Tu lote en wan
      </p>
    </div>
  );
};

export default BannerHome;
