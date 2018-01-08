import { Component, OnInit } from '@angular/core';
import {Client} from "../../../data/client";

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.scss']
})
export class TransactionDetailComponent implements OnInit {

    clients: Client[] = [
    {
      id: 1,
      name: 'Whirlwind',
      addresses: [
        {street: '123 Main',  city: 'Anywhere', state: 'CA',  zip: '94801'},
        {street: '456 Maple', city: 'Somewhere', state: 'VA', zip: '23226'},
      ]
    },
    {
      id: 2,
      name: 'Bombastic',
      addresses: [
        {street: '789 Elm',  city: 'Smallville', state: 'OH',  zip: '04501'},
      ]
    },
    {
      id: 3,
      name: 'Magneta',
      addresses: [ ]
    },
  ];

   states = ['CA', 'MD', 'OH', 'VA'];

  constructor() { }

  ngOnInit() {
  }

}
