import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarVuelosPComponent } from './listar-vuelos-p.component';

describe('ListarVuelosPComponent', () => {
  let component: ListarVuelosPComponent;
  let fixture: ComponentFixture<ListarVuelosPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarVuelosPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarVuelosPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
