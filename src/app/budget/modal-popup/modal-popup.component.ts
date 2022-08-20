import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

import { LineItem } from '../models/line-item';
import { ExpenseDetail } from '../models/expense-detail';
import { IncomeDetail } from '../models/income-detail';

@Component({
  selector: 'modal-popup',
  templateUrl: './modal-popup.component.html',
  styleUrls: ['./modal-popup.component.css']
})

export class ModalPopupComponent implements OnInit {

	//TODO: This should be an Expense Line	
	@Input() content : string

	@Output() closeEvent = new EventEmitter<LineItem>()

	close() : void {
		alert(" I was clicked " );
		//You can validate the form here and submit the data...
		let l : LineItem = {
			name: "Gas" ,
			uuid: "asdadfdsaf" ,
			amount: 23.34 ,
			day: 3 ,
			frequency: 1 ,
			notes: 'Gas is a needed expense to move around' ,
			type: 'E' 
		}
		this.closeEvent.emit( l )
	}

  constructor() { }

  ngOnInit(): void {
  }

}
