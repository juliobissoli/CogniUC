import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInativeUcComponent } from './modal-inative-uc.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('ModalInativeUcComponent', () => {
  let component: ModalInativeUcComponent;
  let fixture: ComponentFixture<ModalInativeUcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalInativeUcComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
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
