"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Heading from "@/components/Heading";
import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <Heading />
      <Header />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
        <div className="text-center">
          <h1 className="text-9xl font-extrabold mb-6 drop-shadow-lg">404</h1>
          <h2 className="text-4xl font-bold mb-4 drop-shadow-lg">
            Oops! Page Not Found
          </h2>
          <p className="text-lg mb-6 drop-shadow-md">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            href="/"
            className="bg-white text-indigo-600 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-indigo-600 hover:text-white transition-all duration-300"
          >
            Go Back Home
          </Link>
        </div>

        <div className="mt-10 w-full max-w-lg">
  <img
    src="/404-illustration.png"
    alt="404 Illustration"
    className="w-1/2 h-auto mx-auto"  // Adjusted size
  />
</div>

      </div>
      <Footer/>
    </div>
  );
};

export default NotFound;
