import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataProductSearchComponent } from './data-product-search.component';

describe('DataProductSearchComponent', () => {
  let component: DataProductSearchComponent;
  let fixture: ComponentFixture<DataProductSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataProductSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataProductSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
