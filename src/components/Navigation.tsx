import React from 'react';
import clsx from 'clsx';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Drawer, { DrawerProps } from '@material-ui/core/Drawer';
import {People as PeopleIcon,Home as HomeIcon} from '@material-ui/icons';
import {ListItemIcon, ListItem,ListItemText,List,Divider} from '@material-ui/core';
import { Omit } from '@material-ui/types';
import {  NavLink } from 'react-router-dom'
import RoutePaths from 'constants/RoutePaths'
const categories = [
  {
    id: 'Develop',
    children: [
      { id: 'DASHBOARD', icon: <PeopleIcon />, active: true,href:RoutePaths.DASHBOARD },
      { id: 'VENUE', icon: <PeopleIcon />,active: false,href:RoutePaths.VENUE },
      { id: 'USER', icon: <PeopleIcon />,active: false,href:RoutePaths.USER },
      { id: 'RESERVATION', icon: <PeopleIcon />,active: false,href:RoutePaths.RESERVATION },
   
    ],
  }
];

const styles = (theme: Theme) =>
  createStyles({
    categoryHeader: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    categoryHeaderPrimary: {
      color: theme.palette.common.white,
    },
    item: {
      paddingTop: 1,
      paddingBottom: 1,
      color: 'rgba(255, 255, 255, 0.7)',
      '&:hover,&:focus': {
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
      },
    },
    itemCategory: {
      backgroundColor: '#232f3e',
      boxShadow: '0 -1px 0 #404854 inset',
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    firebase: {
      fontSize: 24,
      color: theme.palette.common.white,
    },
    itemActiveItem: {
      color: '#4fc3f7',
    },
    itemPrimary: {
      fontSize: 'inherit',
    },
    itemIcon: {
      minWidth: 'auto',
      marginRight: theme.spacing(2),
    },
    divider: {
      marginTop: theme.spacing(2),
    },
  });

export interface NavigatorProps extends Omit<DrawerProps, 'classes'>, WithStyles<typeof styles> {}

function Navigator(props: NavigatorProps) {
  const { classes, ...other } = props;

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem className={clsx(classes.firebase, classes.item, classes.itemCategory)}>
          Event Registration
        </ListItem>
        <ListItem className={clsx(classes.item, classes.itemCategory)}>
          <ListItemIcon className={classes.itemIcon}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText
            classes={{
              primary: classes.itemPrimary,
            }}
          >
             Overview
          </ListItemText>
        </ListItem>
        {categories.map(({ id, children }) => (
          <React.Fragment key={id}>
            <ListItem className={classes.categoryHeader}>
              <ListItemText
                classes={{
                  primary: classes.categoryHeaderPrimary,
                }}
              >
                  
               
              </ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active,href }) => (
              <ListItem
                key={childId}
                button
                className={clsx(classes.item, active && classes.itemActiveItem)}
              >
                <ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.itemPrimary,
                  }}
                >
                 
                  <NavLink to={ href }>  {childId} </NavLink>
                </ListItemText>
              </ListItem>
            ))}
            <Divider className={classes.divider} />
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
}

export default withStyles(styles)(Navigator); 