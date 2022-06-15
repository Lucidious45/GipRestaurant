import { OverzichtComponent } from './overzicht/overzicht.component';
import { HomeComponent } from './home/home.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { CartComponent } from './cart/cart.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { ReserverenComponent } from './reserveren/reserveren.component';
import { MyordersComponent } from './myorders/myorders.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductsComponent } from './admin/products/products.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "contact", component: ContactComponent},
  {path: "aboutus", component: AboutUsComponent},
  {path: "menu", component: MenuComponent},
  {path: "reserveren", component: ReserverenComponent},
  {path: "cart", component: CartComponent},
  {path: "check-out", component: CheckOutComponent},
  {path: "navbar", component: NavbarComponent},
  {path: "order-succes", component: OrderSuccessComponent},
  {path: "admin/orders", component: AdminOrdersComponent},
  {path: "admin/products", component: ProductsComponent},
  {path: "myorders", component: MyordersComponent},
  {path: "admin/products/productform", component: ProductFormComponent},
  {path: "admin/products/:id", component: ProductsComponent},
  {path: "overzicht", component: OverzichtComponent},



];

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
