import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SchedPagePage } from './sched-page.page';

describe('SchedPagePage', () => {
  let component: SchedPagePage;
  let fixture: ComponentFixture<SchedPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SchedPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
