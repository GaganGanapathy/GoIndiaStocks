import React from "react";
import Image from "next/image";
import { data } from "../data";

export default function Discussion() {
  return (
    <div className="h-full flex lg:gap-y-9 flex-col justify-around">
      {data.map((item, index) => (
        <div className="card flex shadow-md p-1 items-between mx-2" key={index}>
          {/* image */}
          <div className="rounded-full overflow-hidden size-10  flex items-center justify-center bg-gray-200 relative">
            <Image
              src="https://images.unsplash.com/photo-1710104434425-6ae10f736622?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"
              className=" object-cover"
              layout="fill"
              alt="Avatar"
              quality={100}
            />
          </div>
          {/* card body */}
          <div className="ml-3 w-10/12">
            <div className="flex justify-between">
              <span>
                <span className="font-semibold">Lorem Ipsum</span>{" "}
                <span className="py-1 px-2 text-sm rounded-full bg-indigo-400">
                  Sector 2
                </span>
              </span>
              <span className="text-sm text-blue-400">2 min ago</span>
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              excepturi accusamus dignissimos iure eaque facere obcaecati.
            </div>
            <div className="flex justify-between mt-2">
              {/* heart */}
              <div className="flex items-center gap-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-4"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
                <span className="text-sm">2k</span>
              </div>
              {/* seen */}
              <div className="flex items-center gap-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-4"
                >
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                <span className="text-sm">2k</span>
              </div>
              {/* comment */}
              <div className="flex items-center gap-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-4"
                >
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                </svg>
                <span className="text-sm">2k Comments</span>
              </div>
              {/* share */}
              <div className="flex items-center gap-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-4"
                >
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
                  <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
                </svg>
                <span className="text-sm">Share</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
