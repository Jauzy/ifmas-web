import React from 'react'
import { graphql } from 'gatsby'
import Container from '@material-ui/core/Container'

import Layout from '../Components/Layout'
import SEO from '../Components/Seo'
import Part from '../Components/Part'

const Parts = ({ data }) => {
    return (
        <Layout>
            <SEO title='Parts List' />
            <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                {data?.allMarkdownRemark?.nodes.map(part => (
                    <Part key={part.id} data={part} />
                ))}
            </Container>
        </Layout>
    )
}

export default Parts

export const query = graphql`
query GetParts {
  allMarkdownRemark(filter: {frontmatter: {stock: {ne: null}}}) {
    nodes {
      frontmatter {
        date(fromNow: true)
        title
        thumbnail {
          relativePath
        }
        stock
        description
      }
      id
    }
  }
}
`