import { styled } from "styled-components";

const BlogSection = styled.section`
  display:flex;
  flex-direction:column;
`
const BlogImage = styled.img`
width:150px;
@media (max-width: 550px) {
  width:100px
}

`
const BlogPostHeading = styled.h2`
  width:100%;
  background-color: lightcoral;
`
const BlogPostDiv = styled.div`
border-top:2px solid rgba(0,0,0, 0.2);
border-radius:3px;
  padding:5px 5px;
  margin:20px;
  box-shadow:0 8px 9px black;
  transition:ease-in 0.5ms;
&:hover{

  box-shadow:0 8px 9px lightgreen;
}
@media (max-width: 550px) {
  width:250px;
  height:350px;
}

`
const BlogPostsContainer = styled.div`
  display:grid;
  grid-template-columns:repeat(3,1fr);
  @media (max-width: 550px) {
  display:flex;
  flex-direction:column;
}
`


const BlogDescriptionDiv = styled.div`

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
  