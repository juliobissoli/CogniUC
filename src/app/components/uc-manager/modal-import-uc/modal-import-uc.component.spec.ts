import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalImportUcComponent } from './modal-import-uc.component';

describe('ModalImportUcComponent', () => {
  let component: ModalImportUcComponent;
  let fixture: ComponentFixture<ModalImportUcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalImportUcComponent]
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
