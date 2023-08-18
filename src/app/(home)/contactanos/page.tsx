import { FormLead } from "@/components/forms";
import { getContact } from "@/redux/actions/getContact";
import Image from "next/image";
import { Suspense } from "react";

export default function ContactPage() {
  const contact = getContact();
  return (
    <main>
      <Suspense fallback={<>loading...</>}>
        <Feature promise={contact} />
      </Suspense>
    </main>
  );
}

async function Feature({ promise }: { promise: Promise<Contact> }) {
  const contact = await promise;
  if (!contact) return null;
  const {
    banner_bot,
    banner_top,
    id,
    number_phone,
    people_photo,
    photo_number_phone,
  } = contact;
  return (
    <>
      <div className="flex justify-center flex-col items-center space-y-20">
        <Image
          src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${banner_top}`}
          alt="Como podemos ayudarte"
          width={2500}
          height={500}
        />
        <div className="relative">
          <Image
            src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${photo_number_phone}`}
            alt="Como podemos ayudarte"
            width={1000}
            height={500}
          />

          <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h2 className="text-white text-7xl text-center font-extrabold tracking-widest">
              {/* separar cada 3 numeros con un espacio */}
              {number_phone
                .toString()
                .replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3")}
            </h2>
          </div>
        </div>
      </div>
      <div className="max-w-8xl mx-auto ">
        <FormLead
          image={{
            photo: people_photo,
            description: "Como podemos ayudarte",
            link: "",
            id: id,
            type: "FORM",
          }}
        />
      </div>
      <div className="flex justify-center flex-col items-center space-y-20">
        <Image
          src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${banner_bot}`}
          alt="Como podemos ayudarte"
          width={2500}
          height={500}
        />
      </div>
    </>
  );
}
