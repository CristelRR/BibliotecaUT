import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Editorial } from 'src/models/editorial';

@Injectable({
  providedIn: 'root'
})
export class EditorialService {

  constructor(private http :  HttpClient) { }

  URL_API='http://localhost:4000/editorial/';
  public editorial:Editorial =
  {
    id_editorial:0,
    nombre_editorial:''
  };

  editoriales:Editorial[]=[];


  getEditorial(){
    return this.http.get<Editorial[]>(this.URL_API);
  }
}
 