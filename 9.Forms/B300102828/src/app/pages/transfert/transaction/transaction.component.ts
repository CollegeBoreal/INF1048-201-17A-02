import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {Hero} from "../../../data/hero";

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {


  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  constructor( private router: Router) { }

  ngOnInit() {
  }
  goHistorique() {
    this.router.navigateByUrl('/pages/transfert/historique');
  }

}
