import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcStatisticsComponent } from './uc-statistics.component';

describe('UcStatisticsComponent', () => {
  let component: UcStatisticsComponent;
  let fixture: ComponentFixture<UcStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UcStatisticsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UcStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
