import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PondPage } from './pond.page';

describe('PondPage', () => {
  let component: PondPage;
  let fixture: ComponentFixture<PondPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PondPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
