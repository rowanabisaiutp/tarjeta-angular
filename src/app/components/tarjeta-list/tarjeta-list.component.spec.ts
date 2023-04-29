import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaListComponent } from './tarjeta-list.component';

describe('TarjetaListComponent', () => {
  let component: TarjetaListComponent;
  let fixture: ComponentFixture<TarjetaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
