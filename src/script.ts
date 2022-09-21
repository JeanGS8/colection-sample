import{Felino} from './felino';
import { Leao } from './leao';

const felino: Felino = new Felino();
const simba: Leao = new Leao('Simba');

felino.emitsoound('Mroul');
simba.emitsoound('Goar');
simba.caca('Javali');
simba.caca('Zebra', 12);
simba.caca('Girafa', 1, 'Mamífero');

const numeros: number[] = [];
const leoes: Leao[] = [];

const leao1 = new Leao('Scar');
const leao2 = new Leao('Mufasa');
const leao3 = new Leao('kofu');

leoes.push(simba, leao1, leao2, leao3);

leoes.pop(); // deleta o ultimo

leoes.forEach((leao) => {
    console.log(leao.name);
})