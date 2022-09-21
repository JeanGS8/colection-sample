import{Animal} from './animal';

class Felino extends Animal{
    public emitsoound(sound: string): void {
        console.log(`Felino emite ${sound}`);
    }
}
export{Felino};