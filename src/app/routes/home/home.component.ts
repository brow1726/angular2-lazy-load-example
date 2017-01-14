import { Component, OnInit } from '@angular/core';
import { carService } from '../../services/carService';

@Component({
  selector: 'home',
  templateUrl: 'home.component.html'
})


export class init implements OnInit {
  constructor(private CarService: carService) { }

  carList  = this.CarService.getCar();

  ngOnInit() {
    for(var x = 0; x < this.carList.length; x++) {
      console.log(this.carList[x].car);
    }
  }
}
