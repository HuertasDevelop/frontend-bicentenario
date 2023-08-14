"use client";
import React from "react";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

// eslint-disable-next-line react/display-name
const FormInput = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    return (
      <div>
        <div className="relative z-0 bg-white p-2 rounded-lg ">
          <input
            ref={ref}
            maxLength={props.maxLength}
            {...props}
            placeholder=" "
            className={`peer input_form  ${
              props["aria-errormessage"] ? "" : ""
            } `}
          />

          <label className="label_form">{props.title}</label>
        </div>
        {props["aria-errormessage"] && (
          <span className="text-red-500 text-xs">
            {props["aria-errormessage"]}
          </span>
        )}
      </div>
    );
  }
);

export default FormInput;
