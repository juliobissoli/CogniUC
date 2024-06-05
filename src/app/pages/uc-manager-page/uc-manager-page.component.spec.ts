import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcManagerPageComponent } from './uc-manager-page.component';

describe('UcManagerPageComponent', () => {
  let component: UcManagerPageComponent;
  let fixture: ComponentFixture<UcManagerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UcManagerPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UcManagerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
