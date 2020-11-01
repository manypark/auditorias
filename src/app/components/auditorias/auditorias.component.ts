import { Component, OnInit, Input } from '@angular/core';
import { Auditorias } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-auditorias',
  templateUrl: './auditorias.component.html',
  styleUrls: ['./auditorias.component.scss'],
})
export class AuditoriasComponent implements OnInit {

  @Input() auditorias:Auditorias;

  constructor() { }

  ngOnInit() { }

  unread(event) {
    console.log(event);
  }

}