import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NzTableModule } from 'ng-zorro-antd/table';
import { FormsModule } from '@angular/forms';
import { CocktailListComponent } from '../cocktail-list/cocktail-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, NzTableModule, FormsModule, CocktailListComponent],
  template: '<app-cocktail-list></app-cocktail-list>',
})
export class RootComponent {}
