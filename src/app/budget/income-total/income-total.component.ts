import { Component, OnInit } from '@angular/core';
import { LineItem } from '../models/line-item';
import { LineItemService } from '../services/line-item.service';


//Needed to import
import { ViewChild, ViewContainerRef } from '@angular/core'; 

import { ComponentFactoryResolver, ComponentRef, ComponentFactory } from '@angular/core';

import { ModalPopupComponent } from '../modal-popup/modal-popup.component';


@Component({
  selector: 'income-total',
  templateUrl: './income-total.component.html',
  styleUrls: ['./income-total.component.css'],
	providers: [ LineItemService ]
})

export class IncomeTotalComponent implements OnInit {

	totalIncome : number = 0 

	incomeLines : LineItem[];

	componentRef : any;

	@ViewChild( 'modalPopup', { read: ViewContainerRef }  ) entry: ViewContainerRef; 

	createComponent( content : string ) {
		this.entry.clear();
		const factory = this.resolver.resolveComponentFactory( ModalPopupComponent )
		this.componentRef = this.entry.createComponent( factory )
		this.componentRef.instance.content = content 
	}

	destroyComponent( event : any ) {
		alert( "Am I bound?" )
		alert( event )
		//this.componentRef.destroy();
	}

  constructor( 
		private incomeSvc: LineItemService,
		private resolver: ComponentFactoryResolver
	) {
		this.incomeSvc = new LineItemService();
	}

  ngOnInit(): void {
		//Your components can do the processing...
		//this.incomeLines = this.incomeSvc.getIncome()
		this.incomeLines = this.incomeSvc.getIncome()
  }

}
