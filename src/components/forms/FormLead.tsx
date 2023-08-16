"use client";

import Image from "next/image";
import { useState } from "react";
import FormData from "./FormData";
import { SubmitHandler } from "react-hook-form";
import { FormInput, FormTextArea } from ".";
import cn from "classnames";

type Props = {
  image?: Home;
  sticky?: boolean;
};

const FormLead = ({ image, sticky }: Props) => {
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<FormContact> = (data) => {
    setLoading(true);
    // SendMessageSevice(data, project_id)
    //   .then((send) => {
    //     if (send) {
    //       location.reload();
    //     }
    //   })flex bg-primary ml-16 rounded-l-[90px] space-x-24 my-20 sticky top-40
    //   .finally(() => {
    //     setLoading(false);
    //   });
  };
  return (
    <div
      className={cn(
        "flex flex-col lg:flex-row bg-primary  lg:ml-16 ml-0 rounded-l-[90px] lg:space-x-24 my-20 ",
        {
          "rounded-t-[90px]": !image,
          "sticky top-40": sticky,
        }
      )}
    >
      {image && (
        <Image
          src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${image.photo}`}
          alt={image?.description}
          width={500}
          height={500}
        />
      )}

      <div className="bg-secondary-900 p-10 -my-10 rounded-[45px] mx-2">
        <FormData<FormContact> onSubmit={onSubmit}>
          {({ register, watch, reset, formState: { errors } }) => (
            <div className="flex flex-col space-y-5">
              <h2 className="text-white text-4xl text-center font-extrabold tracking-widest">
                Quiero que me contacten <br /> para mayor información
              </h2>
              <span className="text-gray-500  font-montserrat text-center">
                Déjanos tus datos y un asesor se contactará contigo lo antes
                posible.
              </span>
              <div className=" grid gap-5 grid-cols-2">
                <FormInput
                  title="Nombres"
                  type="text"
                  id="name"
                  aria-errormessage={
                    errors.name ? "Formato no valido" : undefined
                  }
                  {...register("name", {
                    required: true,
                    maxLength: 120,
                  })}
                />
                <FormInput
                  title="Apellidos"
                  type="text"
                  id="lastname"
                  aria-errormessage={
                    errors.lastname ? "Formato no valido" : undefined
                  }
                  {...register("lastname", {
                    required: true,
                    maxLength: 120,
                  })}
                />
                <FormInput
                  title="Correo electrónico"
                  type="email"
                  id="email"
                  // defaultValue={session?.user.email || ""}
                  aria-errormessage={
                    errors.email ? "Formato no valido" : undefined
                  }
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    maxLength: 120,
                  })}
                />
                <FormInput
                  title="Número de teléfono"
                  type="text"
                  id="phone"
                  aria-errormessage={
                    errors.phone ? "Formato no valido" : undefined
                  }
                  {...register("phone", {
                    required: true,
                    maxLength: 20,
                  })}
                />
                <div className="col-span-2">
                  <FormTextArea
                    title="Mensaje"
                    id="message"
                    defaultValue={`Me gustaría recibir más información sobre el proyecto  `}
                    aria-errormessage={
                      errors.message ? "Formato no valido" : undefined
                    }
                    {...register("message")}
                  />
                </div>
              </div>

              <button
                disabled={loading}
                type="submit"
                className="bg-white  px-5 py-4 rounded-full mx-10 "
              >
                {loading ? (
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block">
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray="24 24"
                      d="M12 2a10 10 0 100 20 10 10 0 000-20z"
                    ></path>
                  </svg>
                ) : (
                  <span className="text-2xl font-futura text-secondary-900">
                    Solicitar información
                  </span>
                )}
              </button>
              <p className="text-gray-500  text-xs">
                Al enviar este formulario, aceptas que los datos que nos
                proporcionas se utilicen para responder a tu consulta.
              </p>
            </div>
          )}
        </FormData>
      </div>
    </div>
  );
};

export default FormLead;
