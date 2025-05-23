import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavComponent } from './fav.component';

describe('FavComponent', () => {
  let component: FavComponent;
  let fixture: ComponentFixture<FavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
