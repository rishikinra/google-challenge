import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatInputModule,
  MatButtonToggleModule,
  MatFormFieldModule
} from '@angular/material';
import { Renderer2, Type } from '@angular/core';

fdescribe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let renderer2: Renderer2;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatInputModule,
        MatButtonToggleModule,
        MatFormFieldModule
      ],
      //providers: [{ provide: Renderer2, useValue: renderer2 }]
      providers: [Renderer2]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    renderer2 = fixture.componentRef.injector.get<Renderer2>(Renderer2 as Type<Renderer2>);

    fixture.detectChanges();
  });

  it('should create app', () => {
    expect(component).toBeDefined();
  });

  it('title should be', () => {
    expect(component.title).toBe('google-challenge');
  });

});
