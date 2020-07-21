import React from 'react';
import {IconButton,Tooltip,TextField,Button,Grid,Paper,Typography,Toolbar,AppBar} from '@material-ui/core';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import {Refresh as RefreshIcon,Search as SearchIcon} from '@material-ui/icons';
import {Route, Switch, Redirect} from 'react-router-dom';
import RoutePaths from 'constants/RoutePaths';
import { DashboardContainer, UserContainer, VenueContainer, ReservationContainer } from 'containers';


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
            <Grid item>
              <SearchIcon className={classes.block} color="inherit" />
            </Grid>
            <Grid item xs>
              <TextField
                fullWidth
                placeholder="Search by email address, phone number, or user UID"
                InputProps={{
                  disableUnderline: true,
                  className: classes.searchInput,
                }}
              />
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" className={classes.addUser}>
                Add user
              </Button>
              <Tooltip title="Reload">
                <IconButton>
                  <RefreshIcon className={classes.block} color="inherit" />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div className={classes.contentWrapper}>
        <Typography color="textSecondary" >
        


    <div>
     
      
     <Switch>
       <Route path={ RoutePaths.DASHBOARD } component={ DashboardContainer } />
       <Route path={ RoutePaths.USER } component={ UserContainer } />
       <Route path={ RoutePaths.VENUE } component={ VenueContainer } />
       <Route path={ RoutePaths.RESERVATION } component={ ReservationContainer } />
       <Redirect exact from={ RoutePaths.MAIN }  to={ RoutePaths.DASHBOARD } />
     </Switch>
   </div> 



        </Typography>
      </div>
    </Paper>
  );
}

export default withStyles(styles)(Content);