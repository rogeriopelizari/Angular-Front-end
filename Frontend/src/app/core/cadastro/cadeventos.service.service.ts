import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { take } from 'rxjs/operators';
import { Cadastro } from 'src/app/model/eventos.module';

@Injectable({
  providedIn: 'root'
})
export class CadeventoService {

  URL = "http://localhost:3000/eventos"

  constructor(private httpClient : HttpClient) { }

  getUsuario(){
    return this.httpClient.get<Cadastro[]>(this.URL).pipe(take(1));
  }

  postUsuario(cad: Cadastro){
    return this.httpClient.post(this.URL,cad).pipe(take(1))
  }

  deleteUsuario(id: number){
    return this.httpClient.delete(`${this.URL}/${id}`).pipe(take(1))
  }
}
