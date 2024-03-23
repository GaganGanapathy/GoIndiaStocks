import React from "react"
import Image from "next/image"
import { market } from "../data"

export default function Market() {
  return (
    <div className="flex h-full flex-col justify-around gap-y-2">
      {market.map((item, index) => (
        <div className="card shadow-md flex flex-col  mx-2" key={index}>
          {/* Image */}
          <div className="relative h-32 flex justify-center items-center overflow-hidden w-full">
            <Image
              src={item.image}
              className="object-fill"
              alt="Landscape"
              layout="fill"
              quality={100}
            />
          </div>
          {/* Card body */}
          <div className="ml-5">
            <h2 className="font-bold">{item.title}</h2>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
