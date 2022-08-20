import { Component, OnInit } from '@angular/core';
import { Link } from '../../shared/link';

@Component({
  selector: 'budget-module-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class BudgetNavComponent implements OnInit {

	materialNavigation : Link[] = [
		{ "text": "forward_attach_money", "href": "#income" }
	,	{ "text": "attach_money_forward", "href": "#expenses " }
	,	{ "text": "pie_chart", "href": "#pie" }
	,	{ "text": "calendar_today", "href": "#calendar" }
	]

	attach( event : any ) : void {
		alert( event.currentTarget.href )
	}

  constructor() { }

  ngOnInit(): void {
  }

}
