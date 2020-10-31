import React from 'react';
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

// import { makeStyles } from '@material-ui/core/styles';
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// import GridListTileBar from '@material-ui/core/GridListTileBar';
// import ListSubheader from '@material-ui/core/ListSubheader';

// import tileData from './tileData';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     overflow: 'hidden',
//     backgroundColor: theme.palette.background.paper,
//   },
//   gridList: {
//     width: 500,
//     height: 450,
//   },
//   icon: {
//     color: 'rgba(255, 255, 255, 0.54)',
//   },
// }));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

// const Recommended = ({ data }) => {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <GridList cellHeight={180} className={classes.gridList}>
//         <GridListTile key="Subheader" cols={1} style={{ height: 'auto' }}>
//           <ListSubheader component="div">December</ListSubheader>
//         </GridListTile>
//         {tileData.map((tile) => (
//           <GridListTile key={tile.img}>
//             <img src={tile.img} alt={tile.title} />
//             <GridListTileBar
//               title={tile.title}
//               subtitle={<span>by: {tile.author}</span>}
//             />
//           </GridListTile>
//         ))}
//       </GridList>
//     </div>
//   )
// }

const Recommended = ({ data }) => {
  return (
    <Box>
      <Box>
        <Typography variant='h5'>
          {data.frontmatter.title}
        </Typography>
      </Box>
      <Box>
        <img src={require(`../../static/collections/articles/${data.frontmatter.thumbnail.relativePath}`)} width='100%'
          style={{ borderRadius: '1em', margin: '1em 0' }} alt={data.frontmatter.title}
        />
      </Box>
    </Box>
  )
}

export default Recommended