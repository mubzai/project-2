import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'How to Choose the Perfect Sofa for Your Living Room',
      image: '/blog.jpg', // Replace with your actual image path
      description: 'Find out the top tips for selecting the perfect sofa for comfort and style in your living room.',
      link: 'blog',
    },
    {
      title: '5 Furniture Trends You Can’t Miss This Year',
      image: '/blog.jpg', // Replace with your actual image path
      description: 'Stay ahead of the curve with these trending furniture styles that will transform your home.',
      link: 'blog',
    },
    {
      title: 'How to Care for Your Wooden Furniture',
      image: '/blog.jpg', // Replace with your actual image path
      description: 'Learn how to properly maintain your wooden furniture to keep it looking fresh and lasting longer.',
      link: 'blog',
    },
  ];

  return (
    <div className="py-10 px-5 text-center">
      <h2 className="text-3xl font-bold mb-10">Latest Blog Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden text-center p-6"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
            <p className="text-base text-gray-600 mb-4">{post.description}</p>
            <a
              href={post.link}
              className="text-green-500 text-base font-bold hover:underline"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
