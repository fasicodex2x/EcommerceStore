 import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SearchComponent } from '../search/search';
import { FeaturedBrands } from './featured-brands/featured-brands';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [CommonModule, SearchComponent, FeaturedBrands],
  templateUrl: './productlist.html',
  styleUrls: ['./productlist.css'],   
})
export class Productlist {

  products = [
    { name: 'iPhone 13', price: 25000.50, color: 'white', stock: 'Available', image: '/pngimg.com - iphone_12_PNG36.png', colors: ['White','Black','Blue','Red'] },
    { name: 'iPhone 14', price: 30000.00, color: 'black', stock: 'Not Available', image: '/pngimg.com - iphone_12_PNG36.png', colors: ['Black','Silver','Gold','Green'] },
    { name: 'iPhone 14 Pro', price: 40000.00, color: 'red', stock: 'Available', image: '/pngimg.com - iphone_12_PNG36.png', colors: ['Black','Gray','White','Blue'] },
    { name: 'iPhone 13 Pro Max', price: 30433.00, color: 'black', stock: 'Not Available', image: '/pngimg.com - iphone_12_PNG36.png', colors: ['Black','Silver','Red','Green'] }
  ];

  filteredProducts = [...this.products];

  selectedProduct: any = null;
  quantity: number = 1;
  selectedColor: string = ''; 

  // Search products
  onSearch(text: string) {
    const searchText = text.toLowerCase();
    this.filteredProducts = this.products.filter(p =>
      p.name.toLowerCase().includes(searchText) ||
      p.color.toLowerCase().includes(searchText)
    );
  }

  // Open product specs modal
  openSpecs(product: any) {
    this.selectedProduct = product;
    this.quantity = 1;
    this.selectedColor = product.colors[0]; // default selected color
  }

  closeSpecs() {
    this.selectedProduct = null;
  }

  // Quantity handlers
  increaseQty() {
    this.quantity++;
  }

  decreaseQty() {
    if (this.quantity > 1) this.quantity--;
  }

  // Buy product
  buyProduct(product: any) {
    alert(`Buying ${product.name}, Quantity: ${this.quantity}, Color: ${this.selectedColor}`);
  }
}
