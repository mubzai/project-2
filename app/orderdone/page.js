"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";

const Page = () => {
  const router = useRouter();

  const handleContinueShopping = () => {
    router.push("/"); // Navigate back to home page using Next.js router
  };

  return (
    <div>
      <Heading/>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <section className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md mx-auto">
          <h1 className="text-3xl font-extrabold text-blue-950 mb-6" aria-live="assertive">
            Your Order is Complete
          </h1>
          <p className="text-gray-700 mb-8">
            Thank you for shopping with us! We hope to see you again soon.
          </p>
          <button
            onClick={handleContinueShopping}
            className="bg-pink-500 text-white px-5 py-3 rounded-lg hover:bg-pink-600 transition duration-300"
          >
            Continue Shopping
          </button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
