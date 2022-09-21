import { Felino } from "./felino";

class Leao extends Felino{
    public name: string;

    constructor(name: string){
        super();
        this.name = name;
    }
    public emitsoound(sound: string): void {
        console.log(`Leao emite ${sound}`);
    }
    public caca(presa: string): void;
    public caca(presa: string, qtdPresas: number): void;
    public caca(presa: string, qtdPresas: number, tipoDePresa: string): void;

    public caca(presa: string, qtdPresas?: number, tipoDePresa?: string): void{
        if(tipoDePresa != undefined){
            console.log(`O leão está caçando um(a) ${tipoDePresa}`);
        }
        const numPresas = (qtdPresas == undefined) ? 1 : qtdPresas;
        console.log(`Leão está caçando ${numPresas} ${presa}`);
    }
}
export{Leao};