import { Component, OnInit } from '@angular/core';

// Dummy service
import { DummyService } from '../../services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // Declare variables and consts
  dummyServiceResult: string;
  title = 'app';

  // Declare dummy service
  constructor( private dummy: DummyService) { }

  ngOnInit() {
      this.dummyServiceResult  = this.dummy.dummyFunction();
      console.log(this.dummyServiceResult);
  }

}
