import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { InstructionModule } from './instruction/instruction.module'
import { InstructionComponent } from './instruction/instruction.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FormModule } from './form/form.module';
  import { from } from 'rxjs';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    InstructionComponent,
    NavigationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InstructionModule,
    FormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
