import React from "react"
import { graphql } from 'gatsby'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import ArticleWrapper from '../Components/ArticleWrapper'
import Layout from "../Components/Layout"
import SEO from "../Components/Seo"

const Articles = ({ data }) => {

  const [state, setState] = React.useState({
    maxPosts: 6, marker: [6]
  })

  const onLoadMore = () => {
    setState({ ...state, maxPosts: state.maxPosts + 6, marker: [...state.marker, state.maxPosts + 6] })
  }

  return (
    <Layout>
      <SEO title="Articles" />
      <Container>
        <Typography variant='h3' style={{ fontWeight: 'bold' }}>
          Articles
        </Typography>
        <Typography variant='subtitle1' color='textSecondary' style={{ maxWidth: '400px', fontWeight: 'bold' }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </Typography>

        <Box id='articles' style={{ margin: '2em 0' }}>
          {state.marker.map((marker, idx) => (
            <ArticleWrapper datas={data?.allMarkdownRemark.nodes.slice(marker - 6, marker)} key={idx + '-articles'} />
          ))}
        </Box>

        {data?.allMarkdownRemark.nodes.length > state.maxPosts && <Box style={{ display: 'flex', justifyContent: 'center' }}>
          <Button endIcon={<ExpandMoreIcon />} onClick={onLoadMore}>
            Load More
          </Button>
        </Box>}

      </Container>
    </Layout>
  )
}

export default Articles

export const query = graphql`
query GetArticles {
  allMarkdownRemark(filter: {frontmatter: {stock: {eq: null}}}, sort: {fields: frontmatter___date, order: DESC}) {
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