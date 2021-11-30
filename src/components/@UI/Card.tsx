import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import tw, { TwStyle } from "twin.macro";
import { H2, H3 } from "./Texts";

const getBorderColor = (color?: "pink" | "blue" | "yellow"): TwStyle =>
  color === "blue"
    ? tw`border-blue-500`
    : color === "pink"
    ? tw`border-pink-500`
    : tw`border-yellow-600`;

const getTextColor = (color?: "pink" | "blue" | "yellow"): TwStyle =>
  color === "blue"
    ? tw`text-blue-500`
    : color === "pink"
    ? tw`text-pink-500`
    : tw`text-yellow-600`;

export const Card: React.FC<{
  img?: string;
  title: string;
  linkTitle?: string;
  linkTo?: string;
  message?: string;
  messageHtml?: string;
  resize?: boolean;
  color?: "pink" | "blue" | "yellow";
  onClick?: (event: any) => void;
  subtitle?: string;
}> = ({
  img,
  title,
  message,
  linkTo,
  linkTitle,
  color,
  resize,
  onClick,
  messageHtml,
  subtitle,
  children,
}) => {
  if (!color) {
    const index = Math.round(Math.random() * 100) % 3;
    // eslint-disable-next-line no-nested-ternary
    color = index === 0 ? "blue" : index === 1 ? "pink" : "yellow";
  }
  const router = useRouter();
  return (
    <div
      role="presentation"
      onClick={(e) => {
        if (onClick) {
          onClick(e);
        } else if (linkTo) {
          router.push(linkTo);
        }
      }}
      css={[
        tw`flex flex-col content-between cursor-pointer transform scale-100 sm:hover:scale-105 sm:max-w-md mx-auto bg-white border-l-4  border-b-8 border-r-4 border-t-2  mb-4 overflow-hidden sm:m-4   `,
        getBorderColor(color),
      ]}
    >
      {children}
      {img && (
        <img
          css={[tw`h-52 `, !resize && tw` w-full object-cover `]}
          src={img}
          alt="Man looking at item at a store"
        />
      )}
      <div css={tw`p-4`}>
        <H2>{title}</H2>
        {message && <p css={tw`mt-2 mb-8 text-gray-500`}>{message}</p>}
        {messageHtml && (
          <div
            css={tw`mt-2 text-gray-500`}
            dangerouslySetInnerHTML={{ __html: messageHtml }}
          />
        )}
      </div>
      <div
        css={[getTextColor(color), tw`flex-grow flex justify-end flex-col m-2`]}
      >
        {linkTo && (
          <Link href={linkTo ?? ""}>
            <a css={tw`hover:underline`}>{linkTitle}</a>
          </Link>
        )}
        {subtitle && <i>{subtitle}</i>}
      </div>
    </div>
  );
};

export const CardHorizontal: React.FC<{
  img?: string;
  title: string;
  message?: string;
  color?: "pink" | "blue" | "yellow";
  link: string;
  onClick?: (event: any) => void;
}> = ({ img, onClick, title, message, color, link }) => {
  return (
    <div
      role="presentation"
      onClick={onClick}
      data-cy="card"
      css={[
        tw`max-w-3xl bg-white my-4  shadow-md overflow-hidden  border-l-4  border-b-8 border-r-4 border-t-2`,
        getBorderColor(color),
        onClick && tw`cursor-pointer`,
      ]}
    >
      <div css={tw`flex`}>
        <div
          css={`
            min-width: 128px;
          `}
        >
          {img && <img alt="Card" src={img} />}
        </div>
        <div css={tw`p-4`}>
          <H3>
            <a href={link}>{title}</a>
          </H3>
          {message && (
            <div
              css={tw`mt-2 text-gray-500`}
              dangerouslySetInnerHTML={{ __html: message }}
            />
          )}
        </div>
      </div>
    </div>
  );
};
