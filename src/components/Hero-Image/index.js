import React from 'react';
import {withStyles} from '@material-ui/core';
import menuHeaderImage from '../images/menu-photo-1.jpg';
import "./hero-image.css"

export default function HeroImage({ heroStyles: {header, image, text}, imageText }) {
  return (
    <header className="hero-image-wrapper" style={header}>
      <div className="hero-image" style={image}>
        <h1 style={text}>{imageText}</h1>
      </div>
    </header>
  )
}

// const styles = () => ({
// 	image: {
// 		backgroundImage: `url(${menuHeaderImage})`,
// 		backgroundPosition: "center",
// 		backgroundSize: "cover",
// 		height: "100vh",
// 		width: "100vw"
// 	},
// 	text: {
// 		color: "white",
// 		fontSize: "7rem",
// 		fontFamily: `'Courgette', cursive`,
// 		textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"
//   },
//   imageContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   heroImage: {
//     height: '100vh'
//   }
// })

// const HeroImage = ({
//   classes,
//   imageText
// }) => (
//   <header className={`${classes.heroImage} ${classes.imageContainer}`}>
//     <div className={classes.image}>
//       {imageText && <h1 classNName={classes.text}>{imageText}</h1>}
//     </div>
//   </header>
// )

// export default withStyles(styles)(HeroImage)
