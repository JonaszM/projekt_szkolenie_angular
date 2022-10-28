import { Component, OnInit } from '@angular/core';
import { filter, map, switchMap, take, takeWhile, tap } from 'rxjs';
import { Cats } from 'src/app/core/model/Cats';
import { CatsApiService } from 'src/app/core/services/cats-api.service';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.scss']
})
export class CatListComponent implements OnInit {

  constructor(private api: CatsApiService) { }

  cats: Cats[] = [];
  

  ngOnInit(): void {
    this.api.fetchRandomCats().pipe(filter(Boolean)).subscribe((_) => this.cats = _);
  }

}
