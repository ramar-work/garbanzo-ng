import { Component, OnInit } from '@angular/core';
import { LineItem } from '../models/line-item';
import { LineItemService } from '../services/line-item.service';
import * as d3 from "d3";
import * as THREE from "three";


@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
	providers: [ LineItemService ]
})

export class ChartComponent implements OnInit {

	//Define an ID for our chart
	id : string = "my_dataviz"

	//Define max width 
	maxWidth : number = 880

	//Define max height
	maxHeight : number = 550

	//Define a pretty margin
	margin : number = 40

	//Need an array of items for the chart items 
	items : any = {}
	//items : LineItem[]

	//Generates a pie chart of bill breakdowns
	createPie() : void {

		//Get both exp and inc
		let expenses : LineItem[] = [];//this.expenseSvc.getExpenses()
		let income : LineItem[] = [];//this.incomeSvc.getIncome()

		//Throw all of the expenses into a hash table
		for ( let exp of expenses ) {
			this.items[ exp.name ] = exp.amount
		}
		
		// set the dimensions and margins of the graph
		const w : number = window.innerWidth;
		const h : number = window.innerHeight;
		let width = ( ( w < this.maxWidth ) ? w : this.maxWidth );
		let height = ( h < this.maxHeight ) ? h : this.maxHeight;

		width -= ( width * 0.1 );

		// The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
		let radius = Math.min(width, height) / 2 - this.margin;
// Add some stuff to help remove...
		let ds, osvg;
		if ( ( ds = document.getElementById( this.id ) ) ) {
			if ( ( osvg = ds.querySelector( "svg" ) ) ) {
				osvg.remove() ;
			}
		} 

		// append the svg object to the div called 'my_dataviz'
		let svg = d3.select( "#" + this.id )
			.append("svg")
				.attr("width", width)
				.attr("height", height)
			.append("g")
				.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

		// set the color scale
		let color = d3.scaleOrdinal()
			.domain( Object.keys( this.items ) )
			.range(d3.schemeDark2);

		// Compute the position of each group on the pie:
		let pie = d3.pie()
		let arcs = pie( Object.values( this.items ) );
		// Compute the position of each group on the pie:
		//var pie = d3.pie().sort(null).value( d => d );
		//var data_ready = pie(d3.entries( this.items ))

		//2nd try
		/*
		let pie = d3.pie()
			.sort(null) // Do not sort group by size
			.value(function(d : any) {return d.value; })
		let arcs = pie(d3.entries(Data))
		*/

		// The arc generator
		let arc = d3.arc()
			.innerRadius(radius * 0.4)         // This is the size of the donut hole
			.outerRadius(radius * 0.8)

		// Another arc that won't be drawn. Just for labels positioning
		let outerArc = d3.arc()
			.innerRadius(radius * 1 ) 
			.outerRadius(radius * 1 )

		// Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
		svg
			.selectAll('allSlices')
			.data( arcs )
			.enter()
			.append('path')
			.attr('d', <any>arc)
			.attr('fill', function( d : any ) : any { return(color(d.data.key)) })
			.attr("stroke", "white")
			.style("stroke-width", "2px")
			.style("opacity", 0.7);

		// Add the polylines between chart and labels:
		svg
			.selectAll('allPolylines')
			.data( arcs )
			.enter()
			.append('polyline')
				.attr("stroke", "black")
				.style("fill", "none")
				.attr("stroke-width", 2)
				.attr('points', function(d) : any {
					var posA = arc.centroid( <any>d ); // line insertion in the slice
					var posB = outerArc.centroid( <any>d ); // line break: we use the other arc generator that has been built only for that
					var posC = outerArc.centroid( <any>d); // Label position = almost the same as posB
					var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2; // we need the angle to see if the X position will be at the extreme right or extreme left
					posC[0] = radius * 0.95 * (midangle < Math.PI ? 1 : -1); // multiply by 1 or -1 to put it on the right or on the left
					return [posA, posB, posC]
				});

		// Add the polylines between chart and labels:
		svg
			.selectAll('allLabels')
			.data( arcs )
			.enter()
			.append('text')
				.text( function( d : any ) { 
					console.log(d.data.key); 
					return d.data.key + ' - $' +  d.data.value; 
				} )
				.attr('transform', function(d) {
						var pos = outerArc.centroid( <any>d );
						var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
						pos[0] = radius * 0.99 * (midangle < Math.PI ? 1 : -1);
						//pos[0] += (midangle < Math.PI) ? -10 : 10;
						pos[1] -= 5;
						return 'translate(' + pos + ')';
				})
				.style('text-anchor', function(d) {
						var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
						return (midangle < Math.PI ? 'end' : 'start')
				})
				.attr('class', 'blither' )
				.attr('font-weight', 'bold' )
				.attr('font-size', '0.9em' )
				.attr('textLength', function( d : any ) {
					var str = d.data.key + ' ' + d.data.value;
					//console.log( str.length );
					//console.log( d.data.key + ' ' + d.data.value );
					return ( str.length * 10 ) * 0.90; 
				})
	}

	constructor( private lineItemService: LineItemService ) {
		this.lineItemService = new LineItemService();
	}

	ngOnInit(): void {
		this.createPie();
	}
}
