import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'complete-total',
  templateUrl: './complete-total.component.html',
  styleUrls: ['./complete-total.component.css']
})

export class CompleteTotalComponent implements OnInit {

	totalExpense : number = 2688.43

	totalIncome : number = 2833.34

	totalDiff: number = 0

  constructor() { }

  ngOnInit(): void {
		this.totalDiff = this.totalIncome - this.totalExpense;
  }
}
