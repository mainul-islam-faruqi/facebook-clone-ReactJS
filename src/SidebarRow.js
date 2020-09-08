import React from 'react';
import "./SidebarRow.css"
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
  }));

const SidebarRow = ({src,Icon, title}) => {
    const classes = useStyles();
    return (
        <div className="sidebarRow">
            {src && <Avatar className={classes.small} src={src} />}
            {Icon && <Icon />}
            <h4>{title}</h4>
        </div>
    );
};

export default SidebarRow;