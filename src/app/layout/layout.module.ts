import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './shared/login/login.component';
import { RegisterComponent } from './shared/register/register.component';
import { AddBusinessComponent } from './add-business/add-business.component';
import { ShopComponent } from './shop/shop.component';
import { BlogComponent } from './blog/blog.component';
import { EventsComponent } from './events/events.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    LoginComponent,
    RegisterComponent,
    AddBusinessComponent,
    ShopComponent,
    BlogComponent,
    EventsComponent,
    FaqsComponent,
    ContactComponent
  ],
  exports: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    LoginComponent,
    RegisterComponent,
    AddBusinessComponent,
    ShopComponent,
    BlogComponent,
    EventsComponent,
    FaqsComponent,
    ContactComponent
  ]
})

export class LayoutModule { }
