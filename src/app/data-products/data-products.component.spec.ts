import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataProductsComponent } from './data-products.component';

describe('DataProductsComponent', () => {
  let component: DataProductsComponent;
  let fixture: ComponentFixture<DataProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
