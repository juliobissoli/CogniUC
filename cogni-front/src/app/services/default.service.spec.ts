import { TestBed } from '@angular/core/testing';

import { DefaultService } from './default.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { fakerUcs } from '../data/uc.faker';

describe('DefaultService', () => {
  let service: DefaultService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });
    service = TestBed.inject(DefaultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test getList method', () => {
    const result = service.getList();
    expect(result).toBeDefined();
  });

  it('should test delete function', () => {
    const id = '123';
    const result = service.delete(id);
    expect(result).toBeTruthy();
  });

  it('should test save function', () => {
    const data = fakerUcs[0];
    const result = service.save(data);
    expect(result).toBeTruthy();
  });

  

});
