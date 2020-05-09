import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { updatePort } from '../../../redux/actions'
import clsx from 'clsx';


function PortConfig({ port, updatePort }) {

    const [config, setConfig] = useState({});

    useEffect(() => {
        setConfig(port)
        // console.log(port)
    }, [port])

    return (
        <form>
            <div className="form-group com-form-group">
                <label>Baud Rate</label>
                <input type="number" className='form-control com-input' value={config.baudRate} onChange={(e) => setConfig({ ...config, baudRate: e.target.valueAsNumber })} />
            </div>
            <div className="form-group com-form-group">
                <label>Data Bits</label>
                <input type="number" className="form-control com-input" value={config.dataBits} onChange={(e) => setConfig({ ...config, dataBits: e.target.valueAsNumber })} min='5' max='8' />
            </div>
            <div className="form-group com-form-group">
                <label>Stop Bits</label>
                <input type="number" className="form-control com-input" value={config.stopBits} onChange={(e) => setConfig({ ...config, stopBits: e.target.valueAsNumber })} min='1' max='2' />
            </div>
            <div className="form-group com-form-group">
                <label>Parity</label>
                <select className="form-control com-input" onChange={(e) => setConfig({ ...config, parity: e.target.value })}>
                    <option value='none'>None</option>
                    <option value='even'>Even</option>
                    <option value='mark'>Mark</option>
                    <option value='odd'>Odd</option>
                    <option value='space'>Space</option>
                </select>
            </div>
            <div className="checkbox">
                <label>
                    <input type="checkbox" value={config.rtscts} onChange={(e) => setConfig({ ...config, rtscts: e.target.checked })} /> RTSCTS
                </label>
            </div>
            <div className="checkbox">
                <label>
                    <input type="checkbox" value={config.xon} onChange={(e) => setConfig({ ...config, xon: e.target.checked })} /> XON
                </label>
            </div>
            <div className="checkbox">
                <label>
                    <input type="checkbox" value={config.xoff} onChange={(e) => setConfig({ ...config, xoff: e.target.checked })} /> XOFF
                </label>
            </div>
            <div className="checkbox">
                <label>
                    <input type="checkbox" value={config.xany} onChange={(e) => setConfig({ ...config, xany: e.target.checked })} /> XANY
                </label>
            </div>
            <div className="form-actions">
                <button type="submit" className="btn btn-form btn-default">Cancel</button>
                <button type="submit" className="btn btn-form btn-primary" onClick={(e) => {e.preventDefault();updatePort(config)}}>OK</button>
            </div>
        </form>
    )
}

PortConfig.propTypes = {
    ports: PropTypes.shape({
        baudRate: PropTypes.number.isRequired,
        dataBits: PropTypes.number.isRequired,
        stopBits: PropTypes.number.isRequired,
        parity: PropTypes.string.isRequired,
        rtscts: PropTypes.bool.isRequired,
        xon: PropTypes.bool.isRequired,
        xoff: PropTypes.bool.isRequired,
        xany: PropTypes.bool.isRequired,
    }),
}

export default connect(null, { updatePort })(PortConfig)