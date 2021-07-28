import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Card} from "../interfaces/card";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalComponent} from "../modal/modal.component";


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})


export class CardComponent {

  @Input('item') card!: Card
  @Output() onDelete: EventEmitter<object> = new EventEmitter<object>()

  constructor(private modalService: NgbModal) {
  }

  openModal() {
    const opend = this.modalService.open(ModalComponent, {
      ariaLabelledBy: 'modal-basic-title',
    });
    opend.componentInstance.card = this.card;
    opend.componentInstance.onDelete = this.onDelete;

  }
}
