import React from 'react';
import { connect } from 'react-redux'
import { startSniffing, stopSniffing, cleanSniffing } from '../../../redux/actions'


function Footer({ startSniffing, stopSniffing, cleanSniffing, isSniffing, ports }) {
    return (
        <footer className="toolbar toolbar-footer">
            <div className="toolbar-actions" style={{
                display: 'flex',
                justifyContent: 'flex-end'
            }}>
            <button className="btn btn-default" onClick={() => cleanSniffing()}>
                Clean screen
                </button>

            <button className={`btn ${isSniffing ? 'btn-negative' : 'btn-primary'} pull-right`} onClick={isSniffing ? () => stopSniffing() : () => startSniffing(ports.filter(p => p.checked))}>
                {isSniffing ? 'Stop Sniff' : 'Start Sniff'}
            </button>
            </div>
        </footer >
    )
}


export default connect(({ SerialPorts }) => { return { isSniffing: SerialPorts.isSniffing, ports: SerialPorts.availablePorts } }, { startSniffing, stopSniffing, cleanSniffing })(Footer)