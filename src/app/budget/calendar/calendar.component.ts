import { Component, OnInit } from '@angular/core';
import { LineItem } from '../models/line-item';
import { LineItemService } from '../services/line-item.service';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
	providers: [ LineItemService ]
})

export class CalendarComponent implements OnInit {

	items: LineItem[];

	//Simple string parsing can do the job to prevent
	//a bunch of hard-coded nonsense like this
	months : string[] = [
		'January', 
		'February', 
		'March', 
		'April',
		'May', 
		'June', 
		'July', 
		'August',
		'September', 
		'October', 
		'November', 
		'December'
	];

	generateNilItem() : LineItem {
		return {
			day: 0
		, name: ''
		, amount: 0
		,	uuid: ""
		,	frequency: 1
		,	notes: ""
		,	type: ""
		}
	}

  constructor( private lineItemService: LineItemService ) {
		this.lineItemService = new LineItemService();
	}

  ngOnInit(): void {
		//Get today's date & find the day of week of first day of the current month.
		//const Now = new Date( 2020, 1, 1 ); //This is a mock, let's figure out a cleaner way to handle this
		const Now = new Date(); 
		const B = new Date( Now.getFullYear(), Now.getMonth(), 1 );
		const monthName : string = this.months[ Now.getMonth() ];
		//const B = new Date( [ date.year, date.month + 1, 1 ].join( "-" ) ); 

		//And... to get the last day of the month, we can use the date object and hack away
		const next = new Date( Now.getFullYear(), Now.getMonth() + 1, 1 );
		const end = new Date( next.getFullYear(), next.getMonth(), next.getDate() - 1 );

		//Define a place for our calendar items (TODO: the service should eventually return a static array of 42)
		let allItems : LineItem[] = [];
		let svcItems : LineItem[] = [
			{ day: 1, name: 'Rent', amount: -3100.00, uuid: "", frequency: 0, notes: "", type: ""  }
		,	{ day: 10, name: 'Electric', amount: -100.00, uuid: "", frequency: 0, notes: "", type: ""  } 
		,	{ day: 13, name: 'Pay', amount: 4000.00, uuid: "", frequency: 0, notes: "", type: ""  } 
		];

		//TODO: The service will handle this
		for ( let i of svcItems ) {
			allItems[ i.day ] = i;
		}

		//Loop through the items to populate only those with actual data.
		for ( var t = 0, day = 0, s = B.getDay(), x = s + end.getDate(); t < 42; t++ ) {
			if ( t < s || t >= x ) {
				allItems[ t ] = this.generateNilItem();
			}
			else {
				day++;
			}

			//TODO: This will probably fail...
			if ( !allItems[ t ] ) {
				allItems[ t ] = { 
					day: day, 
					name: '', 
					amount: 0,
					uuid: "",
					frequency: 1,
					notes: "",
					type: ""
				}
			}
		}	

		this.items = allItems;
	}

}
