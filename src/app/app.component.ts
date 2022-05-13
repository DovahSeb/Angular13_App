import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular13-App';

  constructor(private ngxPermissionsService: NgxPermissionsService){

  }

  ngOnInit(): void {
    this.ngxPermissionsService.loadPermissions(['DEVELOPPER']);
  }

}
