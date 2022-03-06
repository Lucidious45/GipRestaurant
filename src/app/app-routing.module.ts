import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { ReserverenComponent } from './reserveren/reserveren.component';
import { TakeawayComponent } from './takeaway/takeaway.component';

const routes: Routes = [
  {path: "home", component: AppComponent},
  {path: "admin", component: AdminComponent},
  {path: "contact", component: ContactComponent},
  {path: "aboutus", component: AboutUsComponent},
  {path: "menu", component: MenuComponent},
  {path: "reserveren", component: ReserverenComponent},
  {path: "takeaway", component: TakeawayComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
