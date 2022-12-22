import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IpaComponent } from './ipa.component';

describe('IpaComponent', () => {
  let component: IpaComponent;
  let fixture: ComponentFixture<IpaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpaComponent ],
      imports: [ RouterTestingModule ],
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
