import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";

@Component({
  selector: 'app-search-data',
  templateUrl: './search-data.component.html',
  styleUrl: './search-data.component.scss',
  standalone:true,
  imports: [NgClass]
})
export class SearchDataComponent {

  showFilterData=false;

  showFilter(){
    this.showFilterData=!this.showFilterData
  }
}
