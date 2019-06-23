import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddQuoteComponent } from './add-quote/add-quote.component';
import { QuotesOverviewComponent } from './quotes-overview/quotes-overview.component';

const routes: Routes = [
  { path: '', component: QuotesOverviewComponent },
  { path: 'add-quote', component: AddQuoteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
