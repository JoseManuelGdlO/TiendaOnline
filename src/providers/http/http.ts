import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {

 
  constructor(public http: HttpClient) {
    console.log('Hello HttpProvider Provider');
  }

  novedades(){
    var url = 'http://localhost:8080/TiendaOnline/lista_productos_nuevos.php';
    console.log(url);
    
   return new Promise((resolve, reject) => {
    this.http.get(url)
       .subscribe(data => {
         resolve(data);
        }, (err) =>{
          reject(err);
        });
   });
  }
  inicio(){
  var url = 'http://localhost:8080/TiendaOnline/inicio.php';
  console.log(url);
  
  return new Promise((resolve, reject) => {
    this.http.get(url)
       .subscribe(data => {
         resolve(data);
        }, (err) =>{
          reject(err);
        });
   });
  }   


/////////////////Troca/////////////////////////////////////////////////////////////////////////////////////////////////////////

  login(usuario:string, contra:string){
    var url = 'http://localhost/TiendaOnline/UsuariosLogin.php?usuario='+usuario+'&contra='+contra;
    console.log(url);
    
   return new Promise((resolve, reject) => {
    this.http.get(url)   
       .subscribe(data => {

         resolve(data);
        }, (err) =>{
          reject(err);
        });
   });
 }

 articulo(id:string){
  var url = 'http://localhost/TiendaOnline/troquita/MostrarArticulo.php?id='+id;
  console.log(url);
  
 return new Promise((resolve, reject) => {
  this.http.get(url)   
     .subscribe(data => {
     
       resolve(data);
      }, (err) =>{
        reject(err);
      });
 });
}   


articuloImg(id:string){
  var url = 'http://localhost/TiendaOnline/troquita/MostrarImgArticulo.php?id='+id;   
  console.log(url);
  
 return new Promise((resolve, reject) => {
  this.http.get(url)   
     .subscribe(data => {
     
       resolve(data);
      }, (err) =>{
        reject(err);
      });
 });
}


agregarCarrito(id_usuario:string, id_articulo:string, precio:string, cantidad:string, talla:string){
  var url = 'http://localhost/TiendaOnline/troquita/AgregarCarrito.php?id_usuario='+id_usuario+'&cantidad='+cantidad+'&precio='+precio+'&id_articulo='+id_articulo+'&talla='+talla;   
  console.log(url);
  
 return new Promise((resolve, reject) => {
  this.http.get(url)   
     .subscribe(data => {
         
       resolve(data);
      }, (err) =>{
        reject(err);
      });
 });
}

}
