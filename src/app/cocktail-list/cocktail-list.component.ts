import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { FormsModule } from '@angular/forms';

interface Cocktail {
  strDrink: string;
  strCategory: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strDrinkThumb: string;
}

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  imports: [CommonModule, NzTableModule, FormsModule],
  template: `
    <div style="margin: 20px;">
      <input [(ngModel)]="searchTerm" (keyup.enter)="searchCocktails()" placeholder="Search for a cocktail" />
      <button (click)="searchCocktails()">Search</button>
    </div>
    <nz-table #basicTable [nzData]="cocktails" [nzBordered]="true">
      <thead>
        <tr>
          <th nzWidth="15%">Image</th>
          <th nzWidth="20%">Name</th>
          <th nzWidth="15%">Category</th>
          <th nzWidth="10%">Type</th>
          <th nzWidth="10%">Glass</th>
          <th nzWidth="30%">Instructions</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let cocktail of basicTable.data">
          <td><img [src]="cocktail.strDrinkThumb" alt="{{ cocktail.strDrink }}" width="100"></td>
          <td>{{ cocktail.strDrink }}</td>
          <td>{{ cocktail.strCategory }}</td>
          <td>{{ cocktail.strAlcoholic }}</td>
          <td>{{ cocktail.strGlass }}</td>
          <td>{{ cocktail.strInstructions }}</td>
        </tr>
      </tbody>
    </nz-table>
  `,
  styles: [`
    nz-table {
      margin: 20px;
    }
    img {
      border-radius: 8px;
    }
  `]
})
export class CocktailListComponent implements OnInit {
  cocktails: Cocktail[] = [];
  searchTerm: string = 'margarita';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.searchCocktails();
  }

  searchCocktails(): void {
    if (this.searchTerm.trim()) {
      this.http.get<{ drinks: Cocktail[] }>(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.searchTerm}`)
        .subscribe(response => {
          this.cocktails = response.drinks;
        });
    }
  }
}
