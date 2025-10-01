import { Component } from '@angular/core';

@Component({
  selector: 'app-addsendmessage',
  templateUrl: './addsendmessage.component.html',
  styleUrl: './addsendmessage.component.scss'
})
export class AddsendmessageComponent {
active = 1;


searchdataCheckRealtor:any=[];

showPopupRealtor=false

arrDataCheck(val:any){

  this.searchdataCheckRealtor.push(val);


  console.log(this.searchdataCheckRealtor);

}

}
