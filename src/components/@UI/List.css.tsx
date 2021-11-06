import styled from "styled-components";
import tw from "twin.macro";

export const OL = styled.div`
  ol {
    padding: 2rem;
    list-style: none;
    counter-reset: my-awesome-counter;
    li::before {
      content: counter(my-awesome-counter);
      font-weight: bold;
      font-size: 3rem;
      margin-right: 1rem;
      font-family: "Lemonism-Regular", serif;
      line-height: 1.5;
    }
    li {
      counter-increment: my-awesome-counter;
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    div {
      display: flex;
    }
  }

  ${tw`py-4 pr-4`}
`;

export const UL = styled.div`
  ${tw`py-4 `}
  ul {
    padding: 2rem;
    text-indent: 10px;
    list-style: disc inside;
    div {
      display: inline;
    }
  }
`;