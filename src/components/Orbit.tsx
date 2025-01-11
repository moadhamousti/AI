// import { HTMLAttributes } from "react";
// import { twMerge } from "tailwind-merge";

// export const Orbit = (props: HTMLAttributes<HTMLDListElement>) => {
//   return (
//     <div
//       className={twMerge(
//         "size-[200px] border border-gray-200/25 rounded-full",
//         props.className
//       )}
//     ></div>
//   );
// };

import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const Orbit = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={twMerge(
        "size-[200] border border-gray-200/25 rounded-full absolute",
        props.className
      )}
    ></div>
  );
};

