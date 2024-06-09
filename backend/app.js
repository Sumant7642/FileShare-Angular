const express = require('express');
const app = express();

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    next();
});

app.use('/files',(req,res,next)=>{
    const rowData = [
        { fileName: 'report.pdf', uploadedBy: 'Alice', date: '2023-04-01', fileLength: '2 MB', fileType: 'PDF' },
        { fileName: 'image.png', uploadedBy: 'Bob', date: '2023-04-02', fileLength: '3 MB', fileType: 'PNG' },
        { fileName: 'presentation.pptx', uploadedBy: 'Charlie', date: '2023-04-03', fileLength: '5 MB', fileType: 'PPTX' }
        // ... more data
      ];
    res.status(200).json({
        message : 'Data fetched Successfully',
        files:rowData
    })
});

module.exports = app;