import { ProductFormComponent } from './product-form/product-form.component';

import { ProductsComponent } from './admin/products/products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { ReserverenComponent } from './reserveren/reserveren.component';
import { TakeawayComponent } from './takeaway/takeaway.component';
import { MyordersComponent } from './myorders/myorders.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';


const routes: Routes = [
  {path: "home", component: AppComponent},
  {path: "contact", component: ContactComponent},
  {path: "aboutus", component: AboutUsComponent},
  {path: "menu", component: MenuComponent},
  {path: "reserveren", component: ReserverenComponent},
  {path: "takeaway", component: TakeawayComponent},
  {path: "cart", component: CartComponent},
  {path: 'menu/:id', component:ProductComponent},
  {path: "check-out", component: CheckOutComponent},
  {path: "navbar", component: NavbarComponent},
  {path: "order-succes", component: OrderSuccessComponent},
  {path: "myorders", component: MyordersComponent},
  {path: "productform", component: ProductFormComponent},

  {
    path: "admin/orders", 
    component: AdminOrdersComponent
  },
  {
    path: "admin/products", 
    component: ProductsComponent
  },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
