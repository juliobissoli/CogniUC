import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcFormPageComponent } from './uc-form-page.component';

describe('UcFormPageComponent', () => {
  let component: UcFormPageComponent;
  let fixture: ComponentFixture<UcFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UcFormPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UcFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
