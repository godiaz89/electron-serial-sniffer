import React,{useEffect} from 'react';
import Sidebar from './Sidebar'
import Header from './Header'
import Footer from './Footer'
import Dashboard from '../Dash'
import {connect} from 'react-redux'
import {loadPorts} from '../../../redux/actions'
import '../style/css/photon.min.css'


function Home({loadPorts,showConfig}) {


    useEffect(() => {
        loadPorts();
      }, [])

    return (
        <div className="window">
            <Header/>
            <div className="window-content">
                <div className="pane-group">
                    {showConfig&&<div className="pane-sm sidebar"><Sidebar /></div>}
                    <div className="pane" style={{overflowY:'hidden'}}><Dashboard/></div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default connect(({SerialPorts,PageState})=>{return {data:SerialPorts.portsData,showConfig:PageState.showConfig}},{loadPorts})(Home)
