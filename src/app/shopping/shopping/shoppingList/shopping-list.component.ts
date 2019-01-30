import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Product } from 'src/app/Model/product';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  productList : Product[] = [];
  imagePath = '../../../assets/Images/';
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct(){
    this.appService.getProductData().subscribe((product : Product[]) => {
      this.productList = product;
      this.productList.forEach(item => {item.imageUrl = this.imagePath + item.imageUrl      
        item.description = item['desc'].split('\n\n');
      });
      console.log(this.productList);
    });
  }

}
