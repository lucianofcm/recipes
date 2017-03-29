import {Component, HostBinding, OnInit, ViewChild} from '@angular/core';
import {ModalDirective} from 'ng2-bootstrap/modal';

@Component({
  selector: 'rb-modal-addrecipes',
  templateUrl: './modal-addrecipes.component.html',
  styleUrls: ['./modal-addrecipes.component.css']
})
export class ModalAddrecipesComponent implements OnInit {

  private fechaModar;
  @ViewChild('autoShownModal') public autoShownModal: ModalDirective;
  public isModalShown = false;

  constructor() {
  }

  ngOnInit() {
  }

  @HostBinding('class.open') get opened() {
    return this.fechaModar;
  }
  public showModal(): void {
    this.isModalShown = true;
  }
  public hideModal(): void {
    this.autoShownModal.hide();
  }
  public onHidden(): void {
    this.isModalShown = false;
  }


}
