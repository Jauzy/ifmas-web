import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

const Article = ({ data }) => {
    return (
        <Paper style={{ padding: '2vw', borderRadius: '1em' }} elevation={3}>
            <Typography variant='h3'>
                {data.frontmatter.title}
            </Typography>
            <Box>
                <Typography variant='subtitle1' color='textSecondary'>
                    By Admin · {data.frontmatter.date}
                </Typography>
            </Box>
            <img src={require(`../../static/collections/articles/${data.frontmatter.thumbnail.relativePath}`)} width='100%'
                style={{ borderRadius: '1em', margin: '1em 0' }} alt={data.frontmatter.title}
            />
            <Box dangerouslySetInnerHTML={{ __html: data.html }} />
        </Paper>
    )
}

export default Article