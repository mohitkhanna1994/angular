import { Component, OnInit } from '@angular/core';
import { Event } from './Calendar';
import { CalendarService } from './calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
public calendars:Array<any>;
  constructor(private calendarService:CalendarService) { }

  ngOnInit() {
    this.getCalendars();
  }
getCalendars(){
  this.calendarService.getCal().subscribe((resp)=>{
  console.log(resp);
  this.calendars=resp.result});
}
// public changeListener(files: FileList){
//   console.log(files);
//   if(files && files.length > 0) {
//      let file : File = files.item(0); 
//        console.log(file.name);
//        console.log(file.size);
//        console.log(file.type);
//        let reader: FileReader = new FileReader();
//        reader.readAsText(file);
//        reader.onload = (e) => {
//           let csv: string = reader.result;
//           console.log(csv);
//        }
//     }
// }
uploadDatasource(fileInput: any) {

  let file = fileInput.target.files[0];
  let fileName = file.name;
  
  
  let payload = {
    file,
  }
  
  let formData: FormData = new FormData();
  formData.append('file',file,file.name);
  
  
  this.calendarService.uploadDatasource(formData)
    .subscribe(
      response => { 
        console.log('UPLOADING success');
  
  
      },
      error => {
        console.log('error',error)
      });
  
  }
}
