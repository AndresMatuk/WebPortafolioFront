import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/prueba.service';
  // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-prueba',
  standalone: true,
  imports: [],
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss']
})
export class PruebaComponent implements OnInit {
  mensaje: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getPruebaData()
      .then(data => this.mensaje = data)
      .catch(error => console.error('Error al obtener los datos:', error));
  }
}
