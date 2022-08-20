import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetRoutingModule } from './budget-routing.module';
import { BudgetComponent } from './budget.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BudgetNavComponent } from './nav/nav.component';
import { ChartComponent } from './chart/chart.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ExpenseTotalComponent } from './expense-total/expense-total.component';
import { IncomeTotalComponent } from './income-total/income-total.component';
import { CompleteTotalComponent } from './complete-total/complete-total.component';
import { ModalPopupComponent } from './modal-popup/modal-popup.component';
import { DemoModeDirective } from './demo-mode.directive';


@NgModule({
  declarations: [
    BudgetComponent,
    HeaderComponent,
    BudgetNavComponent,
    ChartComponent,
    CalendarComponent,
    ExpenseTotalComponent,
    FooterComponent,
    IncomeTotalComponent,
    CompleteTotalComponent,
    ModalPopupComponent,
    DemoModeDirective
  ],
  imports: [
    CommonModule,
    BudgetRoutingModule
  ]
})
export class BudgetModule { }
