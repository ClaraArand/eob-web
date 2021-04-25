import { ErrorMessage, Field } from "formik";
import React from "react";
import tw from "twin.macro";

type PropType = {
  field: string;
  type?: "text" | "number";
  label: string;
  placeholder?: string;
};

export const TwInput = tw`text-lg font-gt  border-solid border-gray-400 leading-6 p-3 rounded mt-1 block w-full focus:border-blue-800`;

export const FieldInput: React.FC<PropType> = ({
  field,
  label,
  type = "text",
  placeholder,
}) => {
  return (
    <div css={tw`m-2`}>
      <ErrorMessage
        render={(msg) => <p className={`text-red-500 text-xs italic`}>{msg}</p>}
        name={field}
      />
      <label css={tw`block`} htmlFor={field}>
        <span css={tw`text-gray-700 font-gt`}> {label}</span>
        <Field
          css={`
            border-width: 1px;
            ${TwInput}
          `}
          name={field}
          id={field}
          placeholder={placeholder ?? ""}
          type={type}
        />
      </label>
    </div>
  );
};
