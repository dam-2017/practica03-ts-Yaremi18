export class Cadena{

    cadena:string;
    cad1:string;
    tamaño:number;

    constructor(cadena:string){
        this.cad1 = cadena;
        this.cadena = cadena.replace(/\s/g,"").toLowerCase();
        this.tamaño = this.cadena.length;
    }

    get obtenerPalindromo():boolean{
        let cont = 0;
        let j = this.tamaño-1;
        for(let i = 0 ; i < this.tamaño ; i++){
            if(this.cadena.charAt(i) == this.cadena.charAt(j)){
                cont++;
            }
            j--;
        }

        if (cont == this.tamaño){
            return true;
        }else{
            return false;
        }
    }

    get obtenerVocales():string{
        let a = 0,e = 0,i = 0,o = 0,u = 0;
        for(let i = 0 ; i < this.tamaño ; i++){
            let vocal = this.cadena.charAt(i).toLowerCase();
            switch (vocal){
                case 'a':
                    a++; break;
                case 'e':
                    e++; break;
                case 'i':
                    i++; break;
                case 'o':
                    o++; break;
                case 'u':
                    u++; break;
            }
        }
        return 'Vocales:\n  "a": '+a+'\n  "e": '+e+'\n  "i": '+i+'\n  "o": '+o+'\n  "u": '+u;
    }

    get obtenerLetras():number{
        let totL=0;

        for(let i = 0; i < this.tamaño ; i++){
            if(this.cadena.charCodeAt(i)>96 && this.cadena.charCodeAt(i)<123){
                totL++;
            }
        }
        return totL;
    }

    get obtenerPalabras():number{
                
        let arr = this.cad1.split(/\s/g);

        return arr.length;
    }
}