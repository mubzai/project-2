import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'How to Choose the Perfect Sofa for Your Living Room',
      image: '/blog.jpg', // Replace with your actual image path
      description: 'Find out the top tips for selecting the perfect sofa for comfort and style in your living room.',
      link: '#',
    },
    {
      title: '5 Furniture Trends You Can’t Miss This Year',
      image: '/blog.jpg', // Replace with your actual image path
      description: 'Stay ahead of the curve with these trending furniture styles that will transform your home.',
      link: '#',
    },
    {
      title: 'How to Care for Your Wooden Furniture',
      image: '/blog.jpg', // Replace with your actual image path
      description: 'Learn how to properly maintain your wooden furniture to keep it looking fresh and lasting longer.',
      link: '#',
    },
  ];

  return (
    <div style={{ padding: '40px 20px', textAlign: 'center' }}>
      <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '30px' }}>Latest Blog Posts</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          marginBottom: '20px',
        }}
      >
        {blogPosts.map((post, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#fff',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
              textAlign: 'center',
              padding: '20px',
            }}
          >
            <img
              src={post.image}
              alt={post.title}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                marginBottom: '15px',
              }}
            />
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>{post.title}</h3>
            <p style={{ fontSize: '16px', color: '#555', marginBottom: '15px' }}>{post.description}</p>
            <a
              href={post.link}
              style={{
                color: '#4CAF50',
                fontSize: '16px',
                textDecoration: 'none',
                fontWeight: 'bold',
              }}
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
