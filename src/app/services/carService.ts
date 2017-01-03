import {Injectable} from '@angular/core';

@Injectable()
export class carService {
    getCar = ()=> [
        {id: 1, car: 'limo'},
        {id: 2, car: 'evo'},
        {id: 3, car: 'GTR'}
    ]
}