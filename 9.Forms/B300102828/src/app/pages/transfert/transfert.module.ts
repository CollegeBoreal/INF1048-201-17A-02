import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransfertRoutingModule } from './transfert-routing.module';
import { TransfertComponent } from './transfert.component';
import { TransactionComponent } from './transaction/transaction.component';
import { HistoriqueComponent } from './historique/historique.component';
import {FormsModule} from "@angular/forms";
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';

@NgModule({
  imports: [
    CommonModule,
    TransfertRoutingModule,
    FormsModule
  ],
  declarations: [TransfertComponent, TransactionComponent, HistoriqueComponent, TransactionDetailComponent]
})
export class TransfertModule { }
