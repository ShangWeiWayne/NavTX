/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ApppageoneComponent } from './apppageone.component';

describe('ApppageoneComponent', () => {
  let component: ApppageoneComponent;
  let fixture: ComponentFixture<ApppageoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApppageoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApppageoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
