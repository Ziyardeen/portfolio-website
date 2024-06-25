import { styled } from "styled-components";


const BlogImage = styled.img`
width:20%;

`
const BlogPostHeading = styled.h2`
  background-color: lightcoral;
`
const Blog = () => {
    const blogPosts = [
      {
        title: 'Blog Post 1',
        excerpt: 'This is a short description of blog post 1.',
        thumbnail: '/blogPic.jpg',
        link: 'https://example.com/blog1'
      },
      {
        title: 'Blog Post 2',
        excerpt: 'This is a short description of blog post 2.',
        thumbnail: '/blogPic.jpg',
        link: 'https://example.com/blog2'
      },
      {
        title: 'Blog Post 3',
        excerpt: 'This is a short description of blog post 3.',
        thumbnail: '/blogPic.jpg',
        link: 'https://example.com/blog3'
      }
    ];
  
    return (
      <section id="blog" className="blog">
        <BlogPostHeading>Blog</BlogPostHeading>
        <div className="blog-posts">
          {blogPosts.map((post, index) => (
            <div className="blog-post" key={index}>
              <div className="blog-thumbnail">
                <BlogImage src={post.thumbnail} alt={post.title} />
              </div>
              <div className="blog-content">
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <a href={post.link} target="_blank" rel="noopener noreferrer">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Blog;
  