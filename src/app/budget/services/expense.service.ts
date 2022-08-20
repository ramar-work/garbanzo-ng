import { Injectable } from '@angular/core';
import { ExpenseItem } from '../expense-total/expense';

@Injectable({
  providedIn: 'root'
})

export class ExpenseService {
  constructor() { }

	getExpenses(): ExpenseItem[] {
		return [
			 {
				  uuid: "1"
				, immutable: false
				, name: "Rent"
				, type: "B"
				, notes: "Rent payment"
				, amount: 1667.0
				, minpayment: 0.0
				, payoffTotal: 0.0
				, frequency: 1
				, dueDate: 1
			}
			,{
				  uuid: "2"
				, immutable: false
				, name: "Electric"
				, type: "B"
				, notes: ""
				, amount: 130.31
				, minpayment: 0.0
				, payoffTotal: 0.0
				, frequency: 1
				, dueDate: 21
			}
			,{
				  uuid: "3"
				, immutable: false
				, name: "Grocery Store"
				, type: "B"
				, notes: "Harris Teeter is destroying me..."
				, amount: 230.0
				, minpayment: 0.0
				, payoffTotal: 0.0
				, frequency: 1
				, dueDate: 13
			}
			,{
				  uuid: "4"
				, immutable: false
				, name: "Gas"
				, type: "B"
				, notes: "..."
				, amount: 35.0
				, minpayment: 0.0
				, payoffTotal: 0.0
				, frequency: 2
				, dueDate: 7
			}
			,{
				  uuid: "5"
				, immutable: false
				, name: "Settlement"
				, type: "B"
				, notes: "Payment for speeding ticket"
				, amount: 235.35
				, minpayment: 0.0
				, payoffTotal: 0.0
				, frequency: 1
				, dueDate: 21
			}
			,{
				  uuid: "6"
				, immutable: false
				, name: "School Loan"
				, type: "B"
				, notes: "Payment to Navient"
				, amount: 113.35
				, minpayment: 50.0
				, payoffTotal: 10000.0
				, frequency: 1
				, dueDate: 28
			}
			,{
				  uuid: "7"
				, immutable: false
				, name: "Capital One"
				, type: "B"
				, notes: "Credit card payment to Capital One"
				, amount: 157.35
				, minpayment: 50.0
				, payoffTotal: 2345.25
				, frequency: 1
				, dueDate: 14
			}
			,{
				  uuid: "8"
				, immutable: false
				, name: "Car Insurance"
				, type: "B"
				, notes: "Payment for insurance for car"
				, amount: 120.07
				, minpayment: 0.0
				, payoffTotal: 0.0
				, frequency: 1
				, dueDate: 13
			}
		]
	}
}
