import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFirstComponent } from './menu-first.component';

describe('MenuFirstComponent', () => {
  let component: MenuFirstComponent;
  let fixture: ComponentFixture<MenuFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuFirstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
