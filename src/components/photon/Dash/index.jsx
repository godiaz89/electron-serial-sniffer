import React, { useState,  useEffect } from 'react';
import DataViewer from './DataViewer';
import SwipeableViews from 'react-swipeable-views';
import { Tab, Tabs } from '@material-ui/core';
import clsx from 'clsx'
import { connect } from 'react-redux'
import styles from '../style/css/photon.min.css'


function Dashboard({ portsData, grouped }) {
    const [index, setIndex] = useState(0)
    const [portPaths, setPortPaths] = useState([]);
    const [data, setData] = useState([])
    useEffect(() => {
        setPortPaths(Object.keys(grouped));
        setData(Object.values(grouped))
    }, [grouped])


    return (
        <div className='dashboard' >
            <div className="tab-group" value={index} onChange={(e, v) => setIndex(v)}>
                <div className="tab-item" onClick={() => setIndex(0)}>
                    <span className="icon  icon-close-tab"></span>
                    Data
                </div>
                {
                    portPaths.map((p,i)=><div className="tab-item" onClick={() => setIndex(i+1)}>
                    <span className="icon  icon-close-tab"></span>
                    {p}
                </div>)
                }
                {/* <div className="tab-item tab-item-fixed">
                    <span className="icon icon-plus"></span>
                </div> */}
            </div>
            <SwipeableViews index={index} onChangeIndex={(i) => setIndex(i)} containerStyle={{ height: '100%' }} style={{ height: '100%' }}>
                <DataViewer data={portsData} />
                {data.map(d=><DataViewer data={d}/>)}
            </SwipeableViews>

        </div>

    )
}

export default connect(({ SerialPorts }) => { return { portsData: SerialPorts.portsData, grouped: SerialPorts.groupedData } })(Dashboard)
