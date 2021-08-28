import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  username=''
  constructor() { 
  }

  ngOnInit(): void {
  }

  resetUserName() {
    this.username = '';
  }
}
