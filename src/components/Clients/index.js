import React, { useState, useEffect } from 'react';
import ss from 'socket.io-stream'
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Grid,LinearProgress } from '@material-ui/core';
import * as socketcli from '../../socket/cliente';
import * as events from '../../socket/events';
import ClientsListDT from './ClientsListDT';
const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
        height: '100%'
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        //height: '100vh',
        overflow: 'auto',
    },
    tableContainer: {
        display: 'flex',
        height: '90/*  */%',
    }
});


const Clients = (props) => {
    const [data, setData] = useState(ss.createStream())
    const [completed, setCompleted] = useState(false)
    const [rendered, setRendered] = useState(false)
    
    var pagesize=process.env.CLIENTSLIST_PAGE_SIZE||10;


    useEffect(() => {
        console.log('montado CLIENTES');

        socketcli.traeClientes();
        socketcli.consumeClientes((rows)=>{setData(rows);setCompleted(true)});
        // var datastream = ss.createStream({objectMode: true});
        // let clientbuffer=[];
        // socketcli.readDataStream(events.CLIENTES, 1, datastream)
        //     .then(stream => {
        //         console.log('estamos dentro del then',datastream);
        //         //stream.pipe(process.stdout);
        //         stream.on('data', fields => {

        //             console.log('dentro de data')
                    
        //             clientbuffer.push(fields)
        //             if(clientbuffer.length % 100 === 0){
        //                 //stream.pause();
        //                 setData(clientbuffer);
        //                 setRendered(true);
        //                 //stream.resume();
        //             }
                    

        //         }).on('end', function () {
        //             console.log('termino fetch de clients con ',clientbuffer);
        //             setData(clientbuffer);
        //             setcompleted(true)

        //         });
        //     })
        //     .catch(error => console.log(error))

        return () => {
            console.log('matando CLIENTES');
        };
    }, [])

    const { classes } = props;
    return (
        <div className={classes.root}>
            <CssBaseline />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Grid container spacing={24} className={classes.tableContainer}>
                    <Grid item xs={12} >
                        <div className={classes.tableContainer}>
                            <ClientsListDT data={data}  />
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        {completed===false&&<LinearProgress/>}
                        
                    </Grid>
                    <Grid item xs={12}>
                        {data.length}
                        
                    </Grid>
                </Grid>
            </main>
        </div>
    )
}


export default withStyles(styles)(Clients);