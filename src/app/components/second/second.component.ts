import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

 

  productForm = new FormGroup({
    type: new FormControl(''),
    id: new FormControl(''),
    name: new FormControl(''),
    detail: new FormControl(''),
    quantity: new FormControl('',[Validators.required, Validators.max(50)]),
    price: new FormControl('',[Validators.required, Validators.max(100000)]),
  });

  productType: string[] = ['CPU','RAM','HDD','Mainboard'];

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }

  getProductType(){
    return this.getProductType;
  }

  get quantity(){
    return this.productForm.get('quantity');
  }
  
  get type(){
    return this.productForm.get('price');
  }
  get id(){
    return this.productForm.get('price');
  }
  get name(){
    return this.productForm.get('price');
  }
  get detail(){
    return this.productForm.get('price');
  }
  get price(){
    return this.productForm.get('price');
  }

  addProduct(){
    
  }
}
