import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HRSuiteSharedLibComponent } from './hrsuite-shared-lib.component';

describe('HRSuiteSharedLibComponent', () => {
  let component: HRSuiteSharedLibComponent;
  let fixture: ComponentFixture<HRSuiteSharedLibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HRSuiteSharedLibComponent]
    });
    fixture = TestBed.createComponent(HRSuiteSharedLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
