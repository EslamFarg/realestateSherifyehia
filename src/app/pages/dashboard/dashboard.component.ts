  import { Component } from '@angular/core';

  @Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss'
  })
  export class DashboardComponent {

    showAndHideSidebar: any=true;



    showAndHideSidebarInDashboard(e:any){

this.showAndHideSidebar=!this.showAndHideSidebar
      // console.log(e);
      // this.showAndHideSidebar=e
    // if(e==true){this.showAndHideSidebar=false}else{this.showAndHideSidebar=true}

    }


  }
