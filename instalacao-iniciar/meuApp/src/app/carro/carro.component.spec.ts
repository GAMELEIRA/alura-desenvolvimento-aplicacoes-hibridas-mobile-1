import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarroComponent } from './carro.component';

describe('CarroComponent', () => {
  let component: CarroComponent;
  let fixture: ComponentFixture<CarroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarroComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
