import { styled } from "styled-components";

const BlogSection = styled.section`
  display:flex;
  flex-direction:column;
  justify-content:center;
`
const BlogImage = styled.img`
margin:2px;
width:100%;

`
const BlogPostHeading = styled.h2`
  background-color: lightcoral;
`
const BlogPostDiv = styled.div`
padding:40px;
margin:20px;
box-shadow:0 4px 8px rgba(0,0,0,0.1);

&:hover{
  box-shadow:0 4px 28px rgb(8, 249, 4);
}
`
const BlogPostsContainer = styled.div`
display:grid;
grid-template-columns:repeat(3, 1fr);
`


const BlogDescriptionDiv = styled.div`
  width:90%;
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
      },
      {
        title: 'Blog Post 3',
        excerpt: 'This is a short description of blog post 3.',
        thumbnail: '/blogPic.jpg',
        link: 'https://example.com/blog3'
      }
    ];
  
    return (
      <BlogSection id="blog" className="blog">
        <BlogPostHeading>Blog</BlogPostHeading>
        <BlogPostsContainer className="blog-posts">
          {blogPosts.map((post, index) => (
            <BlogPostDiv className="blog-post" key={index}>
              
                <BlogImage src={post.thumbnail} alt={post.title} />
              <BlogDescriptionDiv className="blog-content">
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <a href={post.link} target="_blank" rel="noopener noreferrer">Read More</a>
              </BlogDescriptionDiv>
            </BlogPostDiv>
          ))}
        </BlogPostsContainer>
      </BlogSection>
    );
  }
  
  export default Blog;
  