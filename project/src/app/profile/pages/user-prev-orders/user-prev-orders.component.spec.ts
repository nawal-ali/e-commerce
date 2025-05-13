import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPrevOrdersComponent } from './user-prev-orders.component';

describe('UserPrevOrdersComponent', () => {
  let component: UserPrevOrdersComponent;
  let fixture: ComponentFixture<UserPrevOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserPrevOrdersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPrevOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
