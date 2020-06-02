import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TimePagePage } from './time-page.page';

describe('TimePagePage', () => {
  let component: TimePagePage;
  let fixture: ComponentFixture<TimePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimePagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TimePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
