"use client"

import React, { useState } from "react"

export default function Sidebar() {
  const [sidebar, setSidebar] = useState(false)
  return (
    <div
      className={`absolute lg:relative h-full lg:h-auto ${
        sidebar ? "w-1/2 lg:w-1/4 p-2" : "w-0"
      } z-30 bg-blue-600 sidebar duration-300 `}
    >
      {/* Open && close sidebar button */}
      <div
        className="absolute w-4 h-16 bg-blue-600 -right-4 top-1/2 -translate-y-1/2 flex items-center cursor-pointer"
        onClick={() => setSidebar(!sidebar)}
      >
        {sidebar ? (
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
            className="stroke-white"
          >
            <line x1="6" x2="6" y1="4" y2="20" />
            <polygon points="10,4 20,12 10,20" />
          </svg>
        ) : (
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
            className="stroke-white"
          >
            <line x1="18" x2="18" y1="20" y2="4" />
            <polygon points="14,20 4,12 14,4" />
          </svg>
        )}
      </div>

      {sidebar && (
        <div>
          {/* User */}
          <div className="flex justify-between items-center mb-3">
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
                className="stroke-white"
              >
                <circle cx="12" cy="8" r="5" />
                <path d="M20 21a8 8 0 0 0-16 0" />
              </svg>
              <span className="text-white">Hello, User</span>
            </div>
            <div>
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
                className="stroke-white"
              >
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
              </svg>
            </div>
          </div>
          <div className="border border-slate-400 w-full"></div>
          {/* Sidebar options */}
          <div className="flex justify-between items-center mt-3">
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
                className="stroke-white size-5"
              >
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                <path d="M8 12h.01" />
                <path d="M12 12h.01" />
                <path d="M16 12h.01" />
              </svg>
              <span className="text-white whitespace-nowrap text-xs lg:text-base">
                Disscussion Fourm
              </span>
            </div>
            <div>
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
                className="stroke-white fill-white size-5"
              >
                <path d="M15 6v6h4l-7 7-7-7h4V6h6z" />
              </svg>
            </div>
          </div>
          <div className="mt-3">
            <div className="flex  gap-x-1">
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
                className="stroke-white size-5"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                <path d="M12 18V6" />
              </svg>
              <div className="flex flex-col gap-y-3">
                <span className="text-white text-xs lg:text-base">
                  Market Stories
                </span>
                <span className="text-white text-xs lg:text-base">
                  Sentiment
                </span>
                <span className="text-white text-xs lg:text-base">Market</span>
                <span className="text-white text-xs lg:text-base">Sector</span>
                <span className="text-white text-xs lg:text-base">
                  Watchlist
                </span>
                <span className="text-white text-xs lg:text-base">Events</span>
                <span className="text-white text-xs lg:text-base">
                  News/Interviews
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
