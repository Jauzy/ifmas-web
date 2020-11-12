import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'

import deepPurple from '@material-ui/core/colors/deepPurple'

const accent = deepPurple['500']; // #e040fb

// const CheckList = ({ text }) => {
//     return text.map((textData,index)=> {
//         if (index<4) {
//           return <>
//             <ListItem alignItems="flex-start">
//                 <ListItemIcon>
//                     <CheckCircleOutlineIcon />
//                 </ListItemIcon>
//                 <ListItemText
//                     primary= {textData}
//                 />
//             </ListItem>
//             <Divider/>
//           </>
//         }
//         return <ListItem alignItems="flex-start">
//                     <ListItemIcon>
//                         <CheckCircleOutlineIcon />
//                     </ListItemIcon>
//                     <ListItemText
//                         primary= {textData}
//                     />
//                 </ListItem>
//       })
// }

const CheckList = ({ text }) => {
        return (
            <ListItem alignItems="flex-start">
                <ListItemIcon>
                    <CheckCircleOutlineIcon style={{color: `${accent}`}} />
                </ListItemIcon>
                <ListItemText
                    primary= {text}
                    style={{marginTop: '2%'}}
                />
            </ListItem>
        )
}

export default CheckList