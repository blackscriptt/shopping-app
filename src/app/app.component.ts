import { Component } from '@angular/core';
import { Products } from './module/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';
  products = Products;
  basket:Products[] = [];

  setDecrease(product:Products) : void {
    if(product.quantitiy > 0 ) {
      product.quantitiy--;
    }
    if(product.quantitiy == 0) {
      let index = this.basket.indexOf(product);
      this.basket.splice(index, 1);
    }
  }

  setIncrease(product:Products) : void {
    if(!this.basket.includes(product)) {
      this.basket.push(product);
    }
    product.quantitiy++;
  }

  getTotalPrice(fixed:number) : string {
    let total = 0;
    this.basket.forEach(item => {
      total += item.quantitiy * item.price;
    });

    return total.toFixed(fixed);
  }


}

type Products = {
  id: number,
  name: string,
  photo: string,
  price: number,
  unit: string,
  quantitiy: number
}
