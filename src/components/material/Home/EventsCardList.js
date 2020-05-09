import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography } from "@material-ui/core";
import { red } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    roboCard: {
        backgroundColor: red[500],
        display:'flex',
        flexDirection:'column'
    }
}));

export default function EventsCardList({data}) {

    // const [rows, setRows] = useState([])

    // useEffect(() => {
    //     setRows(props.data)
    // }, [props.data])

    const classes = useStyles();

    return (
        <div>
            {
                data?.length > 0 && data.map((row,i) =>
                    <Card key={i} className={classes.roboCard}>
                        <CardContent>
                            <Typography variant="subtitle1" color="textPrimary">
                                ROBO CLIENTE PREFERENCIAL
                    </Typography>
                            <Typography color="textPrimary" variant='body1'>
                                {row.CLIENTE}
                            </Typography>
                            <Typography color="textPrimary" variant='body2'>
                                {row.NOMBRE}
                            </Typography>
                            <Typography color="textPrimary" variant='overline'>
                                {row.FECHAHORA}
                            </Typography>
                        </CardContent>
                    </Card>
                )
            }
        </div>
    )
}
