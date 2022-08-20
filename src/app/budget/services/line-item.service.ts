import { Injectable } from '@angular/core';
import { LineItem } from '../models/line-item';
import { IncomeDetail } from '../models/income-detail';
import { ExpenseDetail } from '../models/expense-detail';

@Injectable({
  providedIn: 'root'
})

export class LineItemService {

	lines : LineItem[]

  constructor() { }

	//When this is invoked (or even better when initialized, it should be done)
	getLines() : LineItem[] {
		this.lines = [
			//Example Income 
			{
				 name: "Duke Energy"
				,uuid: "1"
				,amount: 2000.01
				,day: 6
				,frequency: 4
				,notes: "Primary salary"
				,type: "W"
				,detail : <IncomeDetail>{
					type: "W"
				}
			},

			{
				 name: "Domino's"
				,uuid: "x2"
				,amount: 833.33 
				,day: 6
				,frequency: 4
				,notes: "Side job income.  Pizza delivery."
				,type: "W"
				,detail : <IncomeDetail>{
					type: "B"
				}
			},
		
			//Example Expense
			{
			  name: "Rent"
			,	uuid: "1"
			, amount: 1667.0
			, day: 6
			, frequency: 1
			, notes: "Rent payment"
			, type: "B"
			, detail : <ExpenseDetail>{
				  immutable: false
				, minpayment: 0.0
				, payoffTotal: 0.0
				, dueDate: 1
				}	
			},
			{
			  name: "Electric"
			,	uuid: "324"
			, amount: 130.31
			, day: 6
			, frequency: 1
			, notes: "Utility bills"
			, type: "B"
			, detail : <ExpenseDetail>{
				  immutable: false
				, minpayment: 0.0
				, payoffTotal: 0.0
				, dueDate: 21 
				}	
			},
			{
			  name: "Grocery Store"
			,	uuid: "1"
			, amount: 230.0
			, day: 13 
			, frequency: 1
			, notes: "Groceries and food that I love"
			, type: "B"
			, detail : <ExpenseDetail>{
				  immutable: false
				}	
			},
			{
			  name: "Gas"
			,	uuid: "xx1"
			, amount: 35
			, day: 7 
			, frequency: 1
			, notes: "Gotta get around!"
			, type: "B"
			, detail : <ExpenseDetail>{
				  immutable: true 
				}	
			},
			{
			  name: "Settlement"
			,	uuid: "1"
			, amount: 235.35
			, day: 6
			, frequency: 1
			, notes: "Had an accident.  Shouldn't have had that last beer."
			, type: "B"
			, detail : <ExpenseDetail>{
				  immutable: false
				, minpayment: 100
				, payoffTotal: 2535
				, dueDate: 21 
				}	
			},
			{
			  name: "School Loan"
			,	uuid: "1"
			, amount: 113.35
			, day: 6
			, frequency: 1
			, notes: ""
			, type: "B"
			, detail : <ExpenseDetail>{
				  immutable: false
				, minpayment: 56
				, payoffTotal: 9543.66
				, dueDate: 28 
				}	
			},
			{
			  name: "Capital One"
			,	uuid: "1"
			, amount: 157.35
			, day: 6
			, frequency: 1
			, notes: "Credit card payment"
			, type: "B"
			, detail : <ExpenseDetail>{
				  immutable: false
				, minpayment: 0.0
				, payoffTotal: 2535
				, dueDate: 14 
				}	
			},
			{
			  name: "Car Insurance"
			,	uuid: "1"
			, amount: 120.07
			, day: 6
			, frequency: 1
			, notes: "Rent payment"
			, type: "B"
			, detail : <ExpenseDetail>{
				  immutable: false
				, minpayment: 0.0
				, payoffTotal: 1220.77
				, dueDate: 13
				}	
			},
		]
		return this.lines
	}

	// A custom pipe can do this a little faster...
	// Move through each line in lines and figure out if it's an Income or Expense (types can be used or you can check for a field (like immutable or something)
	getIncome() : LineItem[] {
		let x : LineItem[] = new Array<LineItem>()
		for ( let line of this.getLines() ) {
			if ( line.detail && !( "immutable" in line.detail ) ) {
				x.push( line )
			}
		}
		return x;
	}

	getExpenses(): LineItem[] {
		//let x : LineItem[];
		let x : LineItem[] = new Array<LineItem>()
		for ( let line of this.getLines() ) {
			if ( line.detail && ( "immutable" in line.detail ) ) {
				x.push( line )
			}
		}
		return x;
	}
}
