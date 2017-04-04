import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'rb-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  private switchi = true;
  private items = [1, 2, 3, 4, 5, 6];
  private value = 10000;

  constructor() {
  }

  ngOnInit() {
  }

  onSwitch(parametro) {
    if (parametro === true) {

      this.switchi = !this.switchi;
    } else {

      this.switchi = this.switchi;
    }

  }

  mudarVariavel() {
    this.switchi = !this.switchi;
  }


}
