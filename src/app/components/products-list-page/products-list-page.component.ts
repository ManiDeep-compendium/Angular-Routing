import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

const Products = [
  {
    id: 1,
    name: "furniture"
  },
  {
    id: 2,
    name: "fashion"
  },
  {
    id: 3,
    name: "electronics"
  },
  {
    id: 4,
    name: "shoes"
  },
  {
    id: 5,
    name: "groceries"
  },
];
interface IProduct {
  id: number,
  name:string
}

@Component({
  selector: 'app-products-list-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './products-list-page.component.html',
  styleUrl: './products-list-page.component.scss'
})

export class ProductsListPageComponent implements OnInit {
  public products: Array<IProduct> = Products;
  private activeRoute = inject(ActivatedRoute);
  private router = inject(Router)
  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe((data)=>{
      console.log(data,'queryParams');
    },(err)=>{
      console.error(err,'error')
    })
  }

  navigateToProduct(id: number) {
    this.router.navigate(['products', 'details'])
  }
}
