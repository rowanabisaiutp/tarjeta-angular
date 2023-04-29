import { Component, HostBinding, OnInit } from '@angular/core';
import { TarjetasBD } from 'src/app/models/tarjeta';
import { TarjetasService } from "../../services/tarjetas.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-tarjeta-form',
  templateUrl: './tarjeta-form.component.html',
  styleUrls: ['./tarjeta-form.component.css']
})
export class TarjetaFormComponent implements OnInit{
  
  @HostBinding('class') classes = 'row';

  tarjeta: TarjetasBD = {
    id: 0,
    nombre: '',
    especialidad: '',
    num_tel: '',
    imagen: '',
    municipio: '',
    estado: '',
    created_at: new Date()
  };

  edit: boolean = false;

  constructor(private tarjetasService: TarjetasService, private router: Router, private activatedRoute: ActivatedRoute) {  }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params['id']) {
      this.tarjetasService.getTarjeta(params['id'])
      .subscribe(
        res => {
          console.log(res);
          this.tarjeta = res;
          this.edit = true;
        },
        err => console.error(err)
      )
    }
  }

  saveNewTarjeta() {
    delete this.tarjeta.created_at;
    delete this.tarjeta.id;

    this.tarjetasService.createTarjetas(this.tarjeta)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/tarjetas']);
      },
      err => console.error(err)
    )
  }

  updateTarjeta() {
    delete this.tarjeta.created_at;
    if (typeof this.tarjeta.nombre === 'string' && typeof this.tarjeta.id === 'string') {
      this.tarjetasService.updateTarjeta(this.tarjeta.id!, this.tarjeta!)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/tarjetas'])
        },
        err => console.log(err)
      )
    }

    // this.tarjetasService.updateTarjeta(this.tarjeta.id, this.tarjeta)
    // .subscribe(
    //   res => {
    //     console.log(res);
    //   },
    //   err => console.log(err)
    // )
  }
}
