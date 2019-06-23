import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesOverviewComponent } from './quotes-overview.component';

describe('QuotesOverviewComponent', () => {
  let component: QuotesOverviewComponent;
  let fixture: ComponentFixture<QuotesOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotesOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
