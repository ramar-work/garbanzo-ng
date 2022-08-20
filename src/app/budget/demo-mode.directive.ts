import { Directive } from '@angular/core';

@Directive({
  selector: '[appDemoMode]'
})

/*
#demo-alert {
	width: 80%;
	position: fixed;
	margin: 0 auto;
	left: 10%;
	top: 10px;
	background: rgba( 100, 100, 100, 0.8 );
	color: white;
	content: "This is a demo";
	z-index: 9999;
	height: 30px;
	padding-top: 10px;
	text-align: center;
}
*/

export class DemoModeDirective {

  constructor() { }

}
