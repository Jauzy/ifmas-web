import React from "react"
import Container from '@material-ui/core/Container'

import Layout from "../Components/Layout"
import SEO from "../Components/Seo"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        Home
      </Container>
    </Layout>
  )
}

export default IndexPage
