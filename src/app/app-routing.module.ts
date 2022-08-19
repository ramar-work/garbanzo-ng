import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: 'budget', loadChildren: () => import('./budget/budget.module').then(m => m.BudgetModule) }, 
	{ path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
	{ path: '', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
