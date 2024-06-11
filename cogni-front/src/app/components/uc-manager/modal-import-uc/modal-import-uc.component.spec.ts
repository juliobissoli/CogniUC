import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalImportUcComponent } from './modal-import-uc.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('ModalImportUcComponent', () => {
  let component: ModalImportUcComponent;
  let fixture: ComponentFixture<ModalImportUcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalImportUcComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalImportUcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
