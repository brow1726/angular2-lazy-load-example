//angular imports
import { NgModule}         from '@angular/core';
import { CommonModule }    from '@angular/common';

//code imports
import { HomeRoutingModule }  from './home.routing';
import { init     }  from './home.component';
import { carService        }  from '../services/carService';
import {ButtonModule} from '../shared_components/button/button.module'

@NgModule({
  imports: [
    HomeRoutingModule,
    CommonModule,
    ButtonModule
  ],
  exports: [],
  declarations: [init],
  providers: [carService],
})
export class HomeModule { }
