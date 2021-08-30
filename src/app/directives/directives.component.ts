import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  toggleParagraph = false;
  count = 0;
  clicks = []
  constructor() { }

  ngOnInit(): void {
  }

  onDisplayDetailsClick() {
    this.toggleParagraph= !this.toggleParagraph;
    this.count++;
    this.clicks.push(this.count);
    console.log(this.clicks)
  }

  getBackgroudColor(number: Number) {
    return number >=5 ? 'green':'white';
  }
}
