import React from 'react';
import {connect} from 'react-redux'
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-monokai";


function parseCOMEvents(data) {
    return data.map(com=>{
        
    })
}

function DataViewer({data}) {
    return (
        <AceEditor
        mode="json"
        theme="monokai"
        // onChange={onChange}
        value={JSON.stringify(data,null,4)}
        wrapEnabled
        // readOnly
        name="DataViewer"
      />
    )
}


export default connect(({SerialPorts})=>{return {data:SerialPorts.portsData}},)(DataViewer)