import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pond',
  templateUrl: './pond.page.html',
  styleUrls: ['./pond.page.scss'],
})
export class PondPage implements OnInit {

  item:any;
  constructor(private router: Router) {
  const navigation = this.router.getCurrentNavigation();
  this.item = navigation?.extras?.state?.['item'];
  }
  ngOnInit() {
  }

}
