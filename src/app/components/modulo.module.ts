import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuditoriasComponent } from './auditorias/auditorias.component';
import { NumeralComponent } from './numeral/numeral.component';

@NgModule({
  declarations: [
    AuditoriasComponent,
    NumeralComponent
  ],
  exports: [
    AuditoriasComponent,
    NumeralComponent
  ],
  imports: [
    CommonModule
  ],
})
export class ModuloModule { }
