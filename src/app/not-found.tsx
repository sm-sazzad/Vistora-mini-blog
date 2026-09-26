import Link from "next/link";
import React from "react";

interface NotFoundPageProps {
  message?: string;
  homeLink?: string;
}

const NotFoundPage: React.FC<NotFoundPageProps> = ({
  message = "Oops! The page you're looking for doesn't exist.",
  homeLink = "/",
}) => {
  const Illustration = () => (
    <svg
      className="w-64 h-64 md:w-80 md:h-80 mx-auto text-indigo-500 animate-float"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background circle / glow */}
      <circle cx="100" cy="100" r="80" className="fill-indigo-100/50" />

      {/* Robot body */}
      <rect
        x="70"
        y="110"
        width="60"
        height="50"
        rx="8"
        className="fill-indigo-200"
      />

      {/* Robot head */}
      <rect
        x="75"
        y="70"
        width="50"
        height="45"
        rx="10"
        className="fill-indigo-300"
      />

      {/* Antenna */}
      <line
        x1="100"
        y1="70"
        x2="100"
        y2="50"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="100" cy="45" r="6" className="fill-indigo-500" />

      {/* Eyes (looking confused / lost) */}
      <circle cx="88" cy="90" r="5" className="fill-indigo-800" />
      <circle cx="112" cy="90" r="5" className="fill-indigo-800" />

      {/* Mouth (sad / confused) */}
      <path
        d="M90 105 Q100 98 110 105"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        className="text-indigo-800"
      />

      {/* Question marks floating around */}
      <text
        x="50"
        y="60"
        className="fill-indigo-400 text-2xl font-bold select-none"
        style={{ fontFamily: "sans-serif" }}
      >
        ?
      </text>
      <text
        x="140"
        y="40"
        className="fill-indigo-400 text-3xl font-bold select-none"
        style={{ fontFamily: "sans-serif" }}
      >
        ?
      </text>
      <text
        x="150"
        y="130"
        className="fill-indigo-400 text-xl font-bold select-none"
        style={{ fontFamily: "sans-serif" }}
      >
        ?
      </text>

      {/* Broken wire / cable */}
      <path
        d="M130 130 Q150 110 170 130"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        className="text-indigo-400 opacity-60"
      />
      <path
        d="M70 140 Q50 120 30 140"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        className="text-indigo-400 opacity-60"
      />
    </svg>
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-slate-50 via-white to-indigo-50 px-4 py-12">
      {/* CSS-in-JS for the floating animation (or you can move this to your global CSS) */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
        `}
      </style>

      <div className="max-w-lg w-full text-center space-y-8">
        {/* Illustration */}
        <Illustration />

        {/* Error code with gradient text */}
        <h1 className="text-7xl md:text-8xl font-extrabold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent tracking-tight">
          404
        </h1>

        {/* Message */}
        <div className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Page Not Found
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-md mx-auto leading-relaxed">
            {message}
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href={"/"}
            className="inline-flex items-center justify-center px-8 py-3 rounded-full text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-full sm:w-auto"
          >
            <svg
              className="w-5 h-5 mr-2 -ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Go Home
          </Link>
        </div>

        {/* Optional footer / hint */}
        <p className="text-sm text-gray-400 pt-8">
          If you believe this is a mistake, please contact support.
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
