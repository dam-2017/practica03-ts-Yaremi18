export class Numero{

    num1:number;
    num2:number;

    constructor(num1:number, num2:number){
        this.num1 = num1;
        this.num2 = num2;
    }

    get suma():number{
        return this.num1+this.num2;
    }

    get resta():number{

        return this.num1-this.num2;
    }

    get factorial():number{
        let fact = 1;
        for(let i = 1 ; i <= this.num1 ; i++){
            fact = fact * i;
        }
        return fact;
    }

    get primo():boolean{
        let j = 0;
        for(let i = 1 ; i <= this.num1 ; i++){
            if(this.num1 % i == 0){
                j++;
            }
        }
        if(j == 2){
            return true;
        }else{
            return false;
        }
    }


}