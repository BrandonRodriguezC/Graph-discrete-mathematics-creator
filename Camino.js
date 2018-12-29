
class Camino {

  constructor(inicio, fin) {
    var lista=[];
    this.ini = inicio;
    this.fin = fin;
    this.condicion=true;
    this.contador=0;
    lista.push(inicio);
  }

  buscar(nodo) {
    if(this.condicion==true){
    let hijos = nodo.getKids();

    for(j=0;j<hijos.lenght;j++){
      if (hijos[j]==this.fin){
        this.condicion=false;
      }
      if (!esta(hijos[j])){
        lista.push(hijos[j]);
      }
    }
    this.contador ++;
    buscar(lista[contador]);
    }else{

    }
    
    
  

  }

  esta(pregunta){
    var respuesta=false;
    for(g=0;g<lista.lenght; g++){
      if (lista[g]==pregunta){
        respuesta=true;
      }
    }
    return respuesta;
  }
}