import React from 'react'
import { connect } from 'react-redux';
import {changePageState, maximizePage,minimizePage,closePage} from '../../../redux/actions'
import clsx from 'clsx';

function Header({showConfig,changePageState,maximizePage,minimizePage,closePage}) {
    return (
        <header className="toolbar toolbar-header">
            {/* <div style={{display:'flex',justifyContent:'center'}}>
            <h1 className="title" style={{marginLeft:'auto'}}>Serial Port Sniffer</h1>
            <div style={{display:'flex',marginLeft:'auto', justifyContent:'space-evenly',width:'50px'}}>
            <span class="icon icon-record" onClick={()=>minimizePage()} style={{color:'#34c84a'}}></span>
            <span class="icon icon-record" onClick={()=>maximizePage()} style={{color:'#fdbc40'}}></span>
            <span class="icon icon-record" onClick={()=>closePage()} style={{color:'#fc605b'}}></span>
            </div>
            
            </div> */}
            
            <div className="toolbar-actions">
                {/* <div className="btn-group">
                    <button className="btn btn-default">
                        <span className="icon icon-home"></span>
                    </button>
                    <button className="btn btn-default">
                        <span className="icon icon-folder"></span>
                    </button>
                    <button className="btn btn-default">
                        <span className="icon icon-popup"></span>
                    </button>
                </div> */}

                <button className="btn btn-default" onClick={()=>changePageState(!showConfig)}>
                    <span className={clsx('icon',showConfig?'icon-left-open-big':'icon-menu','icon-text')}></span>
                Configuration
                </button>

                {/* <button className="btn btn-default btn-dropdown pull-right">
                    <span className="icon icon-megaphone"></span>
                </button> */}
            </div>
        </header>
    )
}


export default connect(({PageState})=>{return {showConfig:PageState.showConfig}},{changePageState,maximizePage,minimizePage,closePage})(Header)