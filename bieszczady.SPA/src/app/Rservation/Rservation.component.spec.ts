/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RservationComponent } from './Rservation.component';

describe('RservationComponent', () => {
  let component: RservationComponent;
  let fixture: ComponentFixture<RservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
