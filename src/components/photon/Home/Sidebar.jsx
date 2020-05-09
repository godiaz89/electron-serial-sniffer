import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Divider } from '@material-ui/core'
import { updatePort } from '../../../redux/actions'
import { Checkbox, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import Config from './PortConfig'





function Sidebar({ ports, updatePort }) {
    const [open, setOpen] = useState([]);

    useEffect(() => {
        setOpen(new Array(ports.length).fill(false))
    }, [ports])

    
    return (
        <nav className="nav-group">
            {/* <h5 className="nav-group-title">Favorites</h5>
            <a className="nav-group-item com-nav-group-item " >
                <span className="icon icon-home" ></span>
                Home
            </a>
            <span className="nav-group-item com-nav-group-item">
                <span className="icon icon-download"></span>
                Config
            </span>
            <Divider /> */}
            <h5 className="nav-group-title">Select ports</h5>
            {ports && ports.map((p, i) =>
                <span key={i} className="nav-group-item com-nav-group-item">
                    
                    <div key={i} className="comcheckbox checkbox " >
                        <label>
                            <input type="checkbox" onClick={(e) => updatePort({ ...p, checked: e.target.checked })} />{p.path}
                        </label>
                    </div>
                    <span className="icon icon-down-open-big com-icon" onClick={()=>setOpen(open.map((p,j)=>j===i?!open[j]:open[j]))} />
                    <div hidden={!open[i]}><Config port={p}/></div>
                </span>
            )
            }
        </nav>
    )
}


export default connect(({ SerialPorts }) => { return { ports: SerialPorts.availablePorts } }, { updatePort })(Sidebar)