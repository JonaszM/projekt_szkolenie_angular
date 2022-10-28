import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatCardViewComponent } from './cat-card-view.component';

describe('CatCardViewComponent', () => {
  let component: CatCardViewComponent;
  let fixture: ComponentFixture<CatCardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatCardViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
