import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { AddBusinessComponent } from './layout/add-business/add-business.component';
import { ContactComponent } from './layout/contact/contact.component';
import { FaqsComponent } from './layout/faqs/faqs.component';
import { EventsComponent } from './layout/events/events.component';
import { BlogComponent } from './layout/blog/blog.component';
import { ShopComponent } from './layout/shop/shop.component';


export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full'},
  { path: 'add-business', component: AddBusinessComponent, pathMatch: 'full'},
  { path: 'shop', component: ShopComponent, pathMatch: 'full'},
  { path: 'blog', component: BlogComponent, pathMatch: 'full'},
  { path: 'events', component: EventsComponent, pathMatch: 'full'},
  { path: 'faqs', component: FaqsComponent, pathMatch: 'full'},
  { path: 'contact', component: ContactComponent, pathMatch: 'full'},
  { path: '**', redirectTo: '/', pathMatch: 'full' },
  
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
