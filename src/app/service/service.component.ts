import { Component } from '@angular/core';

import { DataService } from './data.service';

@Component({
    selector: 'rb-si-service',
    template: `
      <br/><br/><br/>
    <rb-si-cmp-a></rb-si-cmp-a>
    <rb-si-cmp-b></rb-si-cmp-b>
  `
})
export class ServiceComponent {
}
