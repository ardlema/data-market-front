import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataProductsComponent } from './data-products/data-products.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataProductDetailComponent } from './data-product-detail/data-product-detail.component';

const routes: Routes = [
  { path: 'dataproducts', component: DataProductsComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: DataProductDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

