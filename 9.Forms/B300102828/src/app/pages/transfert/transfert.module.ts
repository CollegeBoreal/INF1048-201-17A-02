import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransfertRoutingModule } from './transfert-routing.module';
import { TransfertComponent } from './transfert.component';
import { TransactionComponent } from './transaction/transaction.component';
import { HistoriqueComponent } from './historique/historique.component';

@NgModule({
  imports: [
    CommonModule,
    TransfertRoutingModule
  ],
  declarations: [TransfertComponent, TransactionComponent, HistoriqueComponent]
})
export class TransfertModule { }
