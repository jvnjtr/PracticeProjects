import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Leftmenu } from './leftmenu/leftmenu';
import { Header } from './header/header';
import { Footer } from './footer/footer';

@NgModule({
  declarations: [Leftmenu, Header, Footer],
  imports: [CommonModule],
  exports:[Leftmenu,Header,Footer]
})
export class LayoutModule {}
