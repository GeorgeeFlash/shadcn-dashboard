import Image from "next/image";
import React from "react";

export type SalesProps = {
  name: string;
  email: string;
  saleAmount: string;
};

const SalesCard = (props: SalesProps) => {
  return (
    <div className="flex flex-wrap justify-between gap-3 ">
      <div className="flex justify-between gap-3">
        <div className="h-12 w-12 rounded-full bg-gray-100 p-1">
          <Image
            src={"/avatar/04.png"}
            alt="Customer avatar"
            height={200}
            width={200}
          />
        </div>
        <div className="text-sm">
          <p className="">{props.name}</p>
          <div className="text-ellipsis overflow-hidden whitespace-nowrap w-[120px] sm:w-auto text-gray-400">
            {props.email}
          </div>
        </div>
      </div>
      <p className="">{props.saleAmount}</p>
    </div>
  );
};

export default SalesCard;
