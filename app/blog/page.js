import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";

const BlogPage = () => {
  return (
    <div> <Heading/>
      <Header />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          How to Choose the Perfect Sofa for Your Living Room
        </h1>

        <p className="text-lg text-gray-700 mb-8 text-center">
          Selecting the right sofa is crucial in creating a comfortable and
          stylish living room. Whether you're moving into a new space or simply
          looking to upgrade your current setup, the perfect sofa can make all
          the difference. Here are some essential tips to help you make the best
          choice for your living space.
        </p>

        {/* First Image */}
        <div className="mb-8">
          <img
            src="/sofa.jpg"
            alt="Modern Sofa in Living Room"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          1. Consider Your Space
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Before you start shopping, it's important to measure your living room
          to ensure the sofa fits. A large sectional may overwhelm a small room,
          while a compact sofa may look lost in a spacious area. Take note of the
          room's dimensions and visualize how the sofa will work with your other
          furniture and decor.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          2. Choose the Right Style
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Sofas come in various styles—from traditional to modern and everything
          in between. Choose a sofa that complements the existing design of your
          living room. If you have a contemporary look, a sleek, minimalist sofa
          might be ideal. For a more classic space, you may prefer a plush, 
          traditional design with soft cushions and elegant arms.
        </p>

        {/* Second Image */}
        <div className="mb-8">
          <img
            src="/sofa2.jpg"
            alt="Classic Sofa Design"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          3. Think About Comfort and Fabric
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Comfort is key when choosing a sofa. Sit on the sofa to test its
          comfort level. Consider the seat depth, cushion softness, and support.
          Additionally, think about the fabric—choose a durable, easy-to-clean
          material if you have kids or pets, or go for something luxurious like
          velvet if you prefer elegance and comfort.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          4. Color and Pattern Choices
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          The color of your sofa can set the tone of the entire room. Neutral
          colors like beige, gray, and taupe are versatile and can work with
          various decor themes. Bold colors or patterns can add personality to
          your living room, but be sure they complement your existing color
          scheme. If you choose a bold color, balance it with neutral accents.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          5. Consider Functionality and Storage
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          If your living room is multipurpose, consider a sofa with built-in
          functionality, like a sleeper sofa or a sectional with storage space
          underneath. These features can help you maximize space and enhance
          your living room's versatility.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Conclusion
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Choosing the right sofa for your living room doesn't have to be a
          stressful process. By considering the size, style, comfort, color,
          and functionality, you'll be able to find the perfect sofa that fits
          both your living room and lifestyle. Take your time and explore all
          your options to create a cozy, inviting space.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPage;
