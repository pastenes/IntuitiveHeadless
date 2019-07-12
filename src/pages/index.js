import React, { Component } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

class IndexPage extends Component {
  render() {
    const homePage = this.props.data.allWordpressPage.edges[0].node
    console.log(homePage)

    return (
      <Layout>
        <SEO title="Home Page" />
        <div>
          <div dangerouslySetInnerHTML={{ __html: homePage.content }} />
        </div>
      </Layout>
    )
  }
}

export default IndexPage

export const homePageQuery = graphql`
  query homePage {
    allWordpressPage(filter: { title: { eq: "Home" } }) {
      edges {
        node {
          content
        }
      }
    }
  }
`
