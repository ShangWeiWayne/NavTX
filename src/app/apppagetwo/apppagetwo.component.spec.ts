/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ApppagetwoComponent } from './apppagetwo.component';

describe('ApppagetwoComponent', () => {
  let component: ApppagetwoComponent;
  let fixture: ComponentFixture<ApppagetwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApppagetwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApppagetwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
