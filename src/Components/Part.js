import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const Part = ({ data }) => {
    return (
        <Paper style={{ padding: '1em', borderRadius: '1em', maxWidth: '20em' }} elevation={3}>
            <img src={require(`../../static/collections/parts/${data.frontmatter.thumbnail.relativePath}`)} width='100%' />
            <Typography variant='h5'>
                {data.frontmatter.title} : {data.frontmatter.stock} Left
            </Typography>
            <Typography variant='body1'>
                {data.frontmatter.description}
            </Typography>
        </Paper>
    )
}

export default Part