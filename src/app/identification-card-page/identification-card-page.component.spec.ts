import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificationCardPageComponent } from './identification-card-page.component';

describe('IdentificationCardPageComponent', () => {
  let component: IdentificationCardPageComponent;
  let fixture: ComponentFixture<IdentificationCardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentificationCardPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentificationCardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
