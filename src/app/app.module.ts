import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TakeawayComponent } from './takeaway/takeaway.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { ReserverenComponent } from './reserveren/reserveren.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ProductsComponent } from './admin/products/products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { MyordersComponent } from './myorders/myorders.component';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';




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
      MyordersComponent,
      LoginComponent,
      
   ],
  imports: [
    BrowserModule,
    AngularFireAuthModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    /* AngularFireDatabaseModule,
    AngularFireAuthModule,
    //AngularFireModule.initializeApp(environment.firebase) */
  ],
  providers: [
    AuthService,
    AuthGuardService,

    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
