import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-kuroir";
import 'ace-builds/src-noconflict/theme-monokai';




function parseCOMEvents(data) {
    // console.log(data)
    return data&&data.reduce((acc,curr)=>{
        // console.log(curr)
        let line = JSON.stringify(curr).replace('/{|}/gi','')+'\r'
        return acc+line},'')
}

function DataViewer({data}) {
    return (
        <AceEditor
        mode="json"
        theme="monokai"
        className='dataviewer'
        width='100%'
        height='100%'
        showPrintMargin={false}
        // onChange={onChange}
        value={parseCOMEvents(data)}
        wrapEnabled
        // readOnly
        name="DataViewer"
      />
    )
}


DataViewer.propTypes = {
    data:PropTypes.array,
}


export default DataViewer;