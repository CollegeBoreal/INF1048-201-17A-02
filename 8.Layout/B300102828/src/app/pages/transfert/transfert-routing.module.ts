import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TransfertComponent} from './transfert.component';
import {TransactionComponent} from './transaction/transaction.component';
import {HistoriqueComponent} from './historique/historique.component';

const routes: Routes = [ {
  path: '',
  redirectTo: '/pages/transfert/transaction',
  pathMatch: 'full'
}, {
  path: '',
  component: TransfertComponent,
  children: [{
    path: 'transaction',
    component: TransactionComponent
  }, {
    path: 'historique',
    component: HistoriqueComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransfertRoutingModule { }
