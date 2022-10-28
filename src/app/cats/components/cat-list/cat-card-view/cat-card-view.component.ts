import { Component, Input, OnInit } from '@angular/core';
import { Cats } from 'src/app/core/model/Cats';

@Component({
  selector: 'app-cat-card-view',
  templateUrl: './cat-card-view.component.html',
  styleUrls: ['./cat-card-view.component.scss']
})
export class CatCardViewComponent implements OnInit {
  
  @Input() cats?: Cats[]
  constructor() { }

  ngOnInit(): void {
  }

}
