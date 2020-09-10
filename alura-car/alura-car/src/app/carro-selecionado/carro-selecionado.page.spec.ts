import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarroSelecionadoPage } from './carro-selecionado.page';

describe('CarroSelecionadoPage', () => {
  let component: CarroSelecionadoPage;
  let fixture: ComponentFixture<CarroSelecionadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarroSelecionadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarroSelecionadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
