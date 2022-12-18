import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UsefulLinksComponent } from './useful-links.component';

describe('UsefulLinksComponent', () => {
  let component: UsefulLinksComponent;
  let fixture: ComponentFixture<UsefulLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsefulLinksComponent ],
      imports: [ BrowserAnimationsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsefulLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
