import { Component, OnInit } from '@angular/core';
import { LineItem } from '../models/line-item';
import { ExpenseDetail } from '../models/expense-detail';
import { LineItemService } from '../services/line-item.service';

@Component({
  selector: 'expense-total',
  templateUrl: './expense-total.component.html',
  styleUrls: ['./expense-total.component.css'],
	providers: [ LineItemService ]
})

export class ExpenseTotalComponent implements OnInit {

	expenseLines : LineItem[];

  constructor( private expenseSvc: LineItemService ) { 
		this.expenseSvc = new LineItemService();
	}

	//If this is ngOnChanges, it's possible that this will work on
	//property updates, which is what I want...
  ngOnInit(): void {
		//Your components can do the processing...
		//this.incomeLines = this.incomeSvc.getIncome()
		this.expenseLines = this.expenseSvc.getExpenses()
  }

}
