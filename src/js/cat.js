import {Animal} from './animal.js'

export class Cat extends Animal{
	constructor(name){
		super();
		this.name = name;
	}
}

export let Amina = new Cat('Amina');
export let Simba = new Cat('Simba');