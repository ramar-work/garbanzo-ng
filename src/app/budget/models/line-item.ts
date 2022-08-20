import { IncomeDetail } from './income-detail'
import { ExpenseDetail } from './expense-detail'

export interface LineItem {
	name: string
	uuid: string
	amount: number 
	day: number 
	frequency: number
	notes: string	
	type: string
	/* 
   * Income and Expense can be part of a union 
   * with their own fields.  Smartest way to 
   * handle this... 
   * */
	detail?: IncomeDetail | ExpenseDetail
}
