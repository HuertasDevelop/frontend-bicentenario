"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
type Props = {
  benefits: Benefit[];
};

const Benefits = ({ benefits }: Props) => {
  return (
    <Accordion variant="splitted">
      {benefits.map(({ description, id, name }) => (
        <AccordionItem
          key={id}
          aria-label={name}
          title={name}
          className="bg-secondary-50 my-1 text-white rounded-3xl px-5"
        >
          {description}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Benefits;
