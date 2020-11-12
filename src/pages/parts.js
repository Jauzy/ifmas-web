import React from 'react'
import { graphql } from 'gatsby'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import Layout from '../Components/Layout'
import SEO from '../Components/Seo'
import Part from '../Components/Part'

const Parts = ({ data }) => {
  const [state, setState] = React.useState({
    view: []
  })

  const [value, setValue] = React.useState(null);
  const [inputValue, setInputValue] = React.useState('');

  React.useEffect(() => {
    if (data) {
      if (inputValue == '')
        setState({ ...state, view: data.allMarkdownRemark.nodes })
      else
        setState({ ...state, view: data.allMarkdownRemark.nodes.filter(node => node.frontmatter.title.includes(value))})
    }
  }, [data, value])

  return (
    <Layout>
      <SEO title='Parts List' />
      <Container>
        <Typography variant='h3' style={{ fontWeight: 'bold' }}>
          Parts List
        </Typography>
        <Typography variant='subtitle1' color='textSecondary' style={{ maxWidth: '400px', fontWeight: 'bold' }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </Typography>
        <Box style={{ marginTop: '2em' }}>
          <Autocomplete
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            options={data?.allMarkdownRemark.nodes.map(node => (node.frontmatter.title))}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Search" variant="outlined" />}
          />
        </Box>
        <Box style={{ margin: '2em 0' }}>
          {state.view?.map(part => (
            <Part key={part.id} data={part} />
          ))}
        </Box>
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
        price
      }
      id
    }
  }
}
`