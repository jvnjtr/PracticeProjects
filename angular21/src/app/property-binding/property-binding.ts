import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  imports: [],
  templateUrl: './property-binding.html',
  styleUrl: './property-binding.scss',
})
export class PropertyBinding {
  imageVal:any='assets/pngtree.jpg';
  myimage:string='Image not found';
  myClass:string='myclass';
  imgWidth:number=100;
  imgHeight:number=100;
}
