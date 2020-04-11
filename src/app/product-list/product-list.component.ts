import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share(productName) {
    window.alert('The product '+ productName +' has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when this product goes on sale');
  }

  onMuteNotification(productName){
    window.alert('You will not be notified of ' +  productName +' in future!');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/