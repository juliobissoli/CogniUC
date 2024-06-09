import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInativeUcComponent } from './modal-inative-uc.component';

describe('ModalInativeUcComponent', () => {
  let component: ModalInativeUcComponent;
  let fixture: ComponentFixture<ModalInativeUcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalInativeUcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalInativeUcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
