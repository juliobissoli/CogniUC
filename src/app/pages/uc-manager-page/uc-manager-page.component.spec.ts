import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcManagerPageComponent } from './uc-manager-page.component';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { fakerUcs } from '../../data/uc.faker';
import { ActionListUc } from '../../components/uc-manager/uc-list/uc-list.component';


const fakeActivatedRoute = {
  snapshot: { data: {  } }
} as ActivatedRoute;



describe('UcManagerPageComponent', () => {
  let component: UcManagerPageComponent;
  let fixture: ComponentFixture<UcManagerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UcManagerPageComponent, RouterTestingModule],
      providers: [{ provide: ActivatedRoute, useValue: fakeActivatedRoute }],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UcManagerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test onInit function', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });

  
  it('should test positive handleAction function for action delete', () => {
    const data: ActionListUc = {
      action: 'delete',
      uc: fakerUcs[0]
    };
    component.handleAction(data);
    expect(component.ucToInative).toEqual(data.uc);
  });

  it('should test positive handleAction function for action edit', () => {
    const data: ActionListUc = {
      action: 'edit',
      uc: fakerUcs[0]
    };
    component.handleAction(data);
    expect(component.ucToInative).toBeUndefined();
  });

  // it('should test downloadFileExample function', () => {
  //   component.downloadFileExample();
  //   expect(component).toBeTruthy();
  // });
});
