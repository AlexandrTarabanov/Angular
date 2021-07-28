import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Card} from "../interfaces/card";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Input('item') card!: Card
  @Output() onDelete: EventEmitter<object> = new EventEmitter<object>()

  constructor(public Modal: NgbActiveModal, private modalService: NgbModal) {
  }

  public deleteCard(): void {
    this.onDelete.emit(this.card)
    this.modalService.dismissAll()
  }
}
