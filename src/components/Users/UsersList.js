import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
});

class UsersList extends React.Component {

    // constructor(props){
    //     super(props);
    //     this.state={
    //         data:[]
    //     };
    // }

    // componentDidMount=()=>{
    //     this.setState({
    //         data:this.props.data
    //     });
    // }

    render(){

        const { classes } = this.props;
        return (
            <List className={classes.root}>
            
            {this.props.data.map(n=>{
                return(
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                    <Avatar alt="ALB" src={require('../../images/logoalb.png')} />
                    </ListItemAvatar>
                    <ListItemText
                    primary={n.Username}
                    secondary={n.Rol + ', Extension: '+n.Extension}
                    />
                </ListItem>
                );
            })}
            </List>
        );
    }

}

UsersList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UsersList);
