import { Component, OnInit } from '@angular/core';
import { carService } from '../services/carService';
import {ButtonComponent} from '../shared_components/button/button.component'

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})


export class init extends ButtonComponent implements OnInit {
  carList  = this.CarService.getCar();

  ngOnInit() {
    for(var x = 0; x < this.carList.length; x++) {
      console.log(this.carList[x].car);
    }
  }

  constructor(private CarService: carService) {
    super();
  }

  homeClicked() {
    alert('clicked home page')
  }
}
