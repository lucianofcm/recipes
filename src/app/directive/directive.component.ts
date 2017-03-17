import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'rb-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  private switch = true;

  constructor() { }

  ngOnInit() {
  }

  onSwitch(parametro){

    if(parametro == true) {

      this.switch = !this.switch;
    }else {

      this.switch = this.switch;
    }

  }


}
