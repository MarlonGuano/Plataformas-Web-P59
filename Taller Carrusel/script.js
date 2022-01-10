let galeria1=['Galeria_01/01.jpg','Galeria_01/02.jpg','Galeria_01/03.jpg','Galeria_01/04.jpg','Galeria_01/05.jpg','Galeria_01/06.jpg']
let galeria2=['Galeria_02/01.jpg','Galeria_02/02.jpg','Galeria_02/03.jpg','Galeria_02/04.jpg','Galeria_02/05.jpg','Galeria_02/06.jpg','Galeria_02/07.jpg','Galeria_02/08.jpg','Galeria_02/09.jpg']
let galeria3=['Galeria_03/01.jpg','Galeria_03/02.jpg','Galeria_03/03.jpg','Galeria_03/04.jpg','Galeria_03/05.jpg','Galeria_03/06.jpg','Galeria_03/07.jpg','Galeria_03/08.jpg']
cont =0;
opcion=[];

    function galeria(elemento){
        cont = 0;
        var mostrar = document.getElementById("imagen")
        
        if(elemento == 1){
            opcion=galeria1;
            console.log(opcion.length);
            mostrar.src=opcion[0]
        }else if(elemento == 2){
            opcion=galeria2;
            console.log(opcion.length);
            mostrar.src=opcion[0]
        }else if(elemento == 3){
            opcion=galeria3;
            console.log(opcion.length);
            mostrar.src=opcion[0]
        }
    }
    function siguiente(){
        var mostrar = document.getElementById("imagen")
        if(cont==opcion.length){
            cont=0;
            mostrar.src=opcion[0]            
        }else{
            mostrar.src=opcion[cont++]   
        }
        
    }
    function anterior(){
        var mostrar = document.getElementById("imagen")
        if(cont<=0){
            mostrar.src=opcion[0]            
        }else{
            mostrar.src=opcion[cont - 2]   
        }

    }



