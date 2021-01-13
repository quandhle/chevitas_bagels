import React, {Fragment, useState} from 'react';
import {Typography} from '@material-ui/core';
import {Add} from '@material-ui/icons';
import {Collapse} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

const styles = () => ({
  categoryContainer: {
    '&:hover': {
      cursor: 'pointer'
    }
  },
  itemContainer: {
    padding: 10
  }
})

const MenuSection = ({
  classes,
  type,
  lang
}) => {
  const [expanded, setExpanded] = useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Fragment>
      <div
        onClick={handleExpandClick}
        className={classes.categoryContainer}
      >
        <Typography variant='h2'>+ {type.label} +</Typography>
      </div>
      <Collapse
        className={classes.container}
        in={expanded}
      >
        {type.items.map(item => (
          <div className={classes.itemContainer}>
            <Typography variant={'h5'}>{item.id}</Typography>
            <Typography variant={'subtitle2'}>{item.description[lang]}</Typography>
          </div>
        ))}
      </Collapse>
    </Fragment>
  )
}

export default withStyles(styles)(MenuSection);