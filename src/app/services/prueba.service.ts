import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/web_portafolio_api/services/pruebaApi'; // Ajusta tu URL según corresponda.

  getPruebaData(): Promise<string> {
    return fetch(this.apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
        return response.text();
      })
      .catch((error) => {
        console.error('Error al consumir la API:', error);
        throw error;
      });
  }
}
