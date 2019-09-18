import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import PauseIcon from '@material-ui/icons/Pause'
import ReactHowler from 'react-howler'
import FFplay from 'ffplay';

const styles = theme => ({
    card: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
    },
    playIcon: {
        height: 38,
        width: 38,
    },
});

class AudioPlayer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            playing: false,
            sound: null,
        }
    }

    componentDidMount=()=>{
        //this.state.sound=new FFplay(this.props.src);
        console.log(this.props.src);
    }


    handlePlay = () => {
        if (this.state.playing == true) {
            this.setState({ playing: false });
            //this.state.sound.pause();
            console.log(this.state.playing, this.props.src);
        }
        else {
            this.setState({ playing: true });
            // this.state.sound.resume();
            console.log(this.state.playing);
        }

    }

    render = () => {
        const { classes, theme } = this.props;
        return (
            <Card className={classes.card}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                            Grabacion Monitoreo
            </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {this.props.title}
                        </Typography>
                    </CardContent>
                    <div className={classes.controls}>
                        <IconButton aria-label="Previous">
                            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                        </IconButton>
                        <IconButton aria-label="Play/pause" onClick={this.handlePlay}>
                            {this.state.playing == false ?
                                <PlayArrowIcon className={classes.playIcon} />
                                :
                                <PauseIcon className={classes.playIcon} />
                            }
                            <ReactHowler
                                src={this.props.src}
                                playing={this.state.playing}
                                //html5='true'
                                //buffer='true'
                                format='wav'
                                //onLoad={alert('cargada')}
                            />

                        </IconButton>
                        <IconButton aria-label="Next">
                            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                        </IconButton>
                    </div>
                </div>
                <CardMedia
                    className={classes.cover}
                    image={require('../../images/logoalb.png')}
                    title="Grabacion Monitoreo"
                />
            </Card>
        );
    }

}

AudioPlayer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(AudioPlayer);