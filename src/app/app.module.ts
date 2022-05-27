import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TakeawayComponent } from './takeaway/takeaway.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { ReserverenComponent } from './reserveren/reserveren.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from './navbar/navbar.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ProductsComponent } from './admin/products/products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
/* import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth'; */


@NgModule({
  declarations: [									
    AppComponent,
      TakeawayComponent,
      MenuComponent,
      ContactComponent,
      MenuComponent,
      ContactComponent,
      ReserverenComponent,
      ReserverenComponent,
      AboutUsComponent,
      CartComponent,
      ProductComponent,
      FooterComponent,
      NavbarComponent,
      CheckOutComponent,
      OrderSuccessComponent,
      
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    /* AngularFireDatabaseModule,
    AngularFireAuthModule,
    //AngularFireModule.initializeApp(environment.firebase) */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
