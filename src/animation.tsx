import { AnimationProps } from "./types";

const Animation = ({ axis, reverse, offset }: AnimationProps) => {
  return (
    <style>
      {`
        @keyframes slide${offset} {
          from {
            transform: translate${axis || "X"}(${offset * 100}%);
          }
          to {
            transform: translate${axis || "X"}(${
        (reverse ? -100 : 100) + 100 * offset
      }%);
          }
        }

      @media (prefers-reduced-motion) {
          animation: none;
      }
      `}
    </style>
  );
};

export default Animation;
