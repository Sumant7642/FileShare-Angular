import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {
  columnDefs: any[] = [];
  rowData: any[] = [];
  constructor() { }

  ngOnInit(): void {
     this.columnDefs = [
    { headerName: 'File Name', field: 'fileName' },
    { headerName: 'Uploaded By', field: 'uploadedBy' },
    { headerName: 'Date', field: 'date' },
    { headerName: 'File Length', field: 'fileLength' },
    { headerName: 'File Type', field: 'fileType' }
  ];


   this.rowData = [
    { fileName: 'report.pdf', uploadedBy: 'Alice', date: '2023-04-01', fileLength: '2 MB', fileType: 'PDF' },
    { fileName: 'image.png', uploadedBy: 'Bob', date: '2023-04-02', fileLength: '3 MB', fileType: 'PNG' },
    { fileName: 'presentation.pptx', uploadedBy: 'Charlie', date: '2023-04-03', fileLength: '5 MB', fileType: 'PPTX' }
    // ... more data
  ];
  }

}

// import { Component, OnInit } from '@angular/core';
// import { ColDef } from 'ag-grid-community';

// @Component({
//   selector: 'app-files',
//   templateUrl: './files.component.html',
//   styleUrls: ['./files.component.scss']
// })
// export class UploadListComponent implements OnInit {
//   columnDefs: ColDef[] = [
//     { field: 'fileName', sortable: true, filter: true },
//     { field: 'uploadedBy', sortable: true, filter: true },
//     { field: 'date', sortable: true, filter: 'agDateColumnFilter' },
//     { field: 'fileLength', sortable: true, filter: 'agNumberColumnFilter' },
//     { field: 'fileType', sortable: true, filter: true }
//   ];

//   rowData = [
//     { fileName: 'Report.pdf', uploadedBy: 'Alice', date: '2023-04-01', fileLength: '2 MB', fileType: 'PDF' },
//     { fileName: 'Image.png', uploadedBy: 'Bob', date: '2023-04-02', fileLength: '3 MB', fileType: 'PNG' },
//     { fileName: 'Presentation.pptx', uploadedBy: 'Charlie', date: '2023-04-03', fileLength: '5 MB', fileType: 'PPTX' },
//     // ... more mock data
//   ];

//   constructor() { }

//   ngOnInit(): void {
//   }
// }


