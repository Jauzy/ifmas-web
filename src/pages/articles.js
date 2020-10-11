import React from "react"
import { graphql } from 'gatsby'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import Layout from "../Components/Layout"
import SEO from "../Components/Seo"
import Article from '../Components/Article'

const Articles = ({ data }) => {
    return (
        <Layout>
            <SEO title="Articles" />
            <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={8}>
                        {data?.allMarkdownRemark?.nodes.map(article => (
                            <Article data={article} key={article.id} />
                        ))}
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper style={{ height: '100%' }}>

                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    )
}

export default Articles

export const query = graphql`
query GetArticles {
  allMarkdownRemark(filter: {frontmatter: {stock: {eq: null}}}) {
      nodes {
        frontmatter {
          date(fromNow: true)
          title
          thumbnail {
            relativePath
          }
        }
        id
        html
      }
    }
  }
  
`
