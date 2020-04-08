import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient,
         HttpHeaders
} from '@angular/common/http';

import { Salad } from '../shared/salad.model';
import { AuthService } from '../auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class SaladDishService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private saladUrl = 'api/salads';

  editingCardId = new Subject<number>();

  constructor(private httpClient: HttpClient,
              private authService: AuthService) {
  }

  get cardId(): Observable<number> {
    return this.editingCardId;
  }

  getSaladById(id) {
    return this.httpClient.get<Salad>(`${this.saladUrl}/${id}`);

  }

  getSalads() {
    const token = this.authService.getToken();
    return this.httpClient.get<Salad[]>(this.saladUrl);
  }

  // getSaladById(id: number): Observable<Salad> {
  //   const token = this.authService.getToken();
  // }

  getAppName() {
    const token = this.authService.getToken();

  }

  saveSalad(salads: any[]) {
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
