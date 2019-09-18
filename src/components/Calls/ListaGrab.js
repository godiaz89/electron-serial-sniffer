import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
//import AudioPlayer from './AudioPlayer';
import AudioPlayer from 'react-h5-audio-player';
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core';

const styles = {
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
};



class ListaGrab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: [],
            playeropen:null,
            playerid: [],
            rooturl:'http://192.168.0.18:8000/grabaciones/'
        }
    }

    handleClick = (e, id) => {
        this.setState({ playerid: id,playeropen:true });
        //console.log(this.state.playerid);
    }
    handleClose=()=>{
        this.setState({playeropen:false});
    }

    isSelected = id => this.state.selected.indexOf(id) !== -1;

    render() {
        const { classes } = this.props;


        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow key='cabecera'>
                            {console.log('Log en el render de la tabla: ', this.props.data)}
                            {
                                this.props.data != undefined && this.props.data[0] ?
                                    Object.keys(this.props.data[0]).map(key => <TableCell align="center">{key}</TableCell>)
                                    :
                                    <TableRow key='cabecera2'>
                                        <TableCell align="center">Cargando</TableCell>
                                    </TableRow>
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            this.props.data != undefined ?
                                this.props.data.map((n, index) => {
                                    const c = Object.values(n);
                                    return (<TableRow hover
                                        onClick={e => this.handleClick(e, n.codigo)}
                                        key={index}>
                                        {c.map((f, index) => {
                                            return index === 0 ?
                                                <TableCell component="th" scope="row" align="center">
                                                    {f}
                                                </TableCell>
                                                :
                                                <TableCell align="center">{f}</TableCell>

                                        })}
                                    </TableRow>)
                                })
                                :
                                <TableRow key='cabe3'>
                                    <TableCell align="center">Cargando</TableCell>
                                </TableRow>
                        }
                    </TableBody>
                </Table>
                {this.state.playeropen ==true ?
                    <Dialog open={this.state.playeropen}
                        onClose={this.handleClose}>
                        <DialogTitle>
                            Reproduciendo Grabacion
                        </DialogTitle>
                        <DialogContent>
                            <AudioPlayer
                            autoPlay
                            //src='http://www.kozco.com/tech/LRMonoPhase4.wav'
                            //src='https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
                            src={this.state.rooturl+this.state.playerid}
                            //onCanPlay={alert('ya deberia arrancar')}
                            title='test'
                            />
                        </DialogContent>
                    </Dialog>
                    :
                    <div></div>

                }

            </Paper>
        );
    }

}

ListaGrab.propTypes = {
    classes: PropTypes.object.isRequired,
};

ListaGrab.defaultProps = {
    data: [{ id: '0', test: 1 }, { id: '1', test: 2 }]
};

export default withStyles(styles)(ListaGrab);
