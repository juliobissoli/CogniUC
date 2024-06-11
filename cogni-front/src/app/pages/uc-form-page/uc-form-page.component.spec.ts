import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcFormPageComponent } from './uc-form-page.component';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs';
import { Uc } from '../../interfaces/uc';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';


const fakeActivatedRoute = {
  snapshot: { data: {  } },
  params: new Observable()
  // {
  //   subscribe: () => {}
  // }
} as unknown as ActivatedRoute;



describe('UcFormPageComponent', () => {
  let component: UcFormPageComponent;
  let fixture: ComponentFixture<UcFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UcFormPageComponent, RouterTestingModule],
      providers: [
        { provide: ActivatedRoute, useValue: fakeActivatedRoute },
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UcFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle password visibility', () => {
    component.toggleVisibilityPass();
    expect(component.passwordInputType).toEqual('text');
    expect(component.iconsPassword).toEqual('icon-visibility');
    
    component.toggleVisibilityPass();
    expect(component.passwordInputType).toEqual('password');
    expect(component.iconsPassword).toEqual('icon-visibility-off');
  });


  it('should test handleMask function', () => {
    const entity = 'numInstallation';
    const event = {
      target: {
        value: '123abc456'
      }
    };
    component.handleMask(event, entity);
    expect(event.target.value).toEqual('123456');
  });


  it('should test negative handleMask function', () => {
    const entity = 'invalidEntity';
    const event = {
      target: {
        value: '123abc456'
      }
    };
    component.handleMask(event, entity);
    expect(event.target.value).not.toEqual('123456');
  });

  it('should test handleMask formatting CPF', () => {
    const entity = 'personCode';
    const event = {
      target: {
        value: '12345678901'
      }
    };
    component.handleMask(event, entity);
    expect(event.target.value).toEqual('123.456.789-01');
  });

  it('should test handleMask formatting CNPJ', () => {
    const entity = 'personCode';
    const event = {
      target: {
        value: '111111111111111'
      }
    };
    component.handleMask(event, entity);
    expect(event.target.value).toEqual('11.111.111/1111-11');
  });


  it('should test onSave function', () => {
    const data: Uc = {
      id: 'test',
      active: true,
      dateInit: new Date('2022-12-31'),
      concessionaire: 'Test Concessionaire',
      uf: 'SP',
      numInstallation: 123456,
      numClient: 789012,
      company: 'Test Company',
      unitDescription: 'Test Description',
      type: 'Test Type',
      modality: 'Test Modality',
      isRural: true,
      orgType: 'Test Org Type',
      licenseType: 'Test License Type',
      personCode: '12345678901',
      email: 'test@example.com',
      password: 'password123'
    };

    spyOn(component['ucService'], 'save').and.returnValue(Promise.resolve());
    
    component.onSave();

  });
});
