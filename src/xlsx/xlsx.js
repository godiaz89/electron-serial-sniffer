import XLSX from 'xlsx';
// import { saveAs } from 'file-saver';
// import json2xlsx from 'node-json-xlsx';
// import fs from 'fs';
import moment from 'moment';



var genXLSX=(data,name)=>{
    console.log('Datos en getXLSX: ',data);
    var ws = XLSX.utils.json_to_sheet(data);
    //var csv=XLSX.utils.sheet_to_csv(ws,{FS:';'});
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb,ws,'PRIMERA PAGINA');
    XLSX.writeFile(wb,name+'-'+moment().format('YYMMDD')+'.xlsx');
    // var wbout = XLSX.write(wb,{bookType:'xlsx',type:'binary'});
    // var blob1=new Blob([s2ab(wbout)],{type:'application/octet-stream'});
    // saveAs(blob1,'test.xlsx');

}


// var s2ab=(s)=>{
//     var buf = new ArrayBuffer(s.lenght);
//     var view=new Uint8Array(buf);
//     for(var i=0;i<s.lenght;i++) view[i]=s.charCodeAt(i) & 0xFF;
//     return buf;
// }


// var genXLSX=(data)=>{
//     console.log('Datos en getXLSX: ',data);
//     var xlsx=json2xlsx(data);
//     fs.writeFileSync('test.xlsx',xlsx,'binary');

// }






export default genXLSX;