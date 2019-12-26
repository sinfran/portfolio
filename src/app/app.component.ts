import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.ngxService.start();

    setTimeout(() => {
      this.ngxService.stop(); // stop foreground loading with 'default' id
    }, 1000);


  }
  title = 'Frances Sin';

  constructor(router: Router, private ngxService: NgxUiLoaderService) {
    router.navigate(['home']);
  }

}
