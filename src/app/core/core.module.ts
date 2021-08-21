import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule} from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';



@NgModule({

  imports: [
    IonicModule.forRoot()

  ],
  exports:[
    BrowserModule,
    IonicModule
  ],
})
export class CoreModule { }
