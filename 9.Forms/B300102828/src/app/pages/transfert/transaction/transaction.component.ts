import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }
  goHistorique() {
    this.router.navigateByUrl('/pages/transfert/historique');
  }

}
