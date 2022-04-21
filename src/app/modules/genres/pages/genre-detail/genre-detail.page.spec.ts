import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreDetailPage } from './genre-detail.page';

describe('GenreDetailPage', () => {
  let component: GenreDetailPage;
  let fixture: ComponentFixture<GenreDetailPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenreDetailPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
