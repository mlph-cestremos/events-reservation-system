import React from 'react';
import {IconButton,Tooltip,TextField,Button,Grid,Paper,Typography,Toolbar,AppBar} from '@material-ui/core';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import {Refresh as RefreshIcon,Search as SearchIcon} from '@material-ui/icons';
import {Route, Switch, Redirect} from 'react-router-dom';
import RoutePaths from 'constants/RoutePaths';
import {Login, Registration, DashboardContainer, UserContainer, VenueContainer, ReservationContainer } from 'containers';


const styles = (theme: Theme) =>
  createStyles({
    paper: {
      maxWidth: 936,
      margin: 'auto',
      overflow: 'hidden',
    },
    searchBar: {
      borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    },
    searchInput: {
      fontSize: theme.typography.fontSize,
    },
    block: {
      display: 'block',
    },
    addUser: {
      marginRight: theme.spacing(1),
    },
    contentWrapper: {
      margin: '40px 16px',
    },
  });

export interface ContentProps extends WithStyles<typeof styles> {}

function Content(props: ContentProps) {
  const { classes } = props;

  return (
    <Paper className={classes.paper}>
      <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            
            <Grid item xs>
            -
            </Grid>
            
          </Grid>
        </Toolbar>
      </AppBar>
      <div className={classes.contentWrapper}>
        <Typography color="textSecondary" >
        


    <div>
  
      
     <Switch>
       <Route path={ RoutePaths.LOGIN } component={ Login } />
       <Route path={ RoutePaths.REGISTER } component={ Registration } />
     </Switch>
   </div> 



        </Typography>
      </div>
    </Paper>
  );
}

export default withStyles(styles)(Content);