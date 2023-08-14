import React from "react";

type Props = {
  text: string;
};

const TittleText = ({ text }: Props) => {
  return <h3 className="text-3xl font-bold  text-gray-800 my-8">{text}</h3>;
};

export default TittleText;
