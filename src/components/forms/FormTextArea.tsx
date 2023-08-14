"use client";

import React from "react";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

// eslint-disable-next-line react/display-name
const FormTextArea = React.forwardRef<HTMLTextAreaElement, InputProps>(
  (props, ref) => {
    return (
      <div>
        <div className="relative z-0 bg-white p-2 rounded-lg">
          <textarea
            placeholder=" "
            ref={ref}
            maxLength={props.maxLength}
            rows={5}
            {...props}
            className={`peer input_form resize-none  ${
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

export default FormTextArea;
