import { Component, OnInit } from '@angular/core';
import { carService } from '../services/carService';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  carList  = this.CarService.getCar();

  constructor(private CarService: carService) { }

  ngOnInit() {
    for(var x = 0; x < this.carList.length; x++) {
      alert(this.carList[x].car);
    }
  }
}