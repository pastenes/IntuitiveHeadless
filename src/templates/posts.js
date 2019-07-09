import React, { Component } from "react"
// import PropTypes from "prop-types"
// import Img from "gatsby-image"
import Layout from "../components/layout"

class PostsTemplate extends Component {
  render() {
    const posts = this.props.data

    console.log(posts)

    return (
      <Layout>
        <div>
          <h1>Blog</h1>

          {posts.allWordpressPost.edges.map(post => (
            <div>
              <h2
                dangerouslySetInnerHTML={{
                  __html: post.node.title,
                }}
              />
              <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
            </div>
          ))}
        </div>
      </Layout>
    )
  }
}

export default PostsTemplate

export const postsQuery = graphql`
  query allPosts {
    allWordpressPost {
      edges {
        node {
          title
          id
          slug
          status
          template
          format
          content
          excerpt
        }
      }
    }
  }
`
