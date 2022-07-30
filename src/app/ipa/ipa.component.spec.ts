import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpaComponent } from './ipa.component';

describe('IpaComponent', () => {
  let component: IpaComponent;
  let fixture: ComponentFixture<IpaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
