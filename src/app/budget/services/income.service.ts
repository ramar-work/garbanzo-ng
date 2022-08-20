import { Injectable } from '@angular/core';
import { IncomeItem } from '../income-total/income';

@Injectable({
  providedIn: 'root'
})

export class IncomeService {
  constructor() { }
	getIncome() : IncomeItem[] {
		return [		
		 {
			 uuid: "1"
			,name: "Duke Energy Pay"
			,amount: 2000.01
			,notes: "Primary salary"
			,type: "W"
			,day: 6
			,frequency: 4
		}
	, {
			 uuid: "2"
			,name: "Pizza Delivery"
			,amount: 833.33
			,notes: "Evening Pizza Delivery Income"
			,type: "W"
			,day: 6
			,frequency: 4
		}
		];
	}
}

