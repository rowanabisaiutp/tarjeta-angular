import { Component, HostBinding, OnInit } from '@angular/core';
import { TarjetasService } from "../../services/tarjetas.service";

@Component({
  selector: 'app-tarjeta-list',
  templateUrl: './tarjeta-list.component.html',
  styleUrls: ['./tarjeta-list.component.css']
})
export class TarjetaListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  tarjetas: any = [];

  constructor(private tarjetasService: TarjetasService) { }

  ngOnInit() {
    this.getTarjeta();
  }

  getTarjeta() {
    this.tarjetasService.getTarjetas().subscribe(
      res => {this.tarjetas = res;
      },
      err => console.error(err),
    );
  }

  deleteTarjeta(id: string) {
    this.tarjetasService.deleteTarjeta(id).subscribe(
      res => {console.log(res);
        this.getTarjeta();
      },
      err => console.log(err),
    );
  }
}
