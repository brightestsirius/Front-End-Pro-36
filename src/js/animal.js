export class Animal{
	getType(){
		return this.animalType;
	}

	get type(){
		return this.animalType ? `Type for ${this.name} is ${this.animalType}` : `Undefined type for animal ${this.name}`
	}

	set type(type){
		this.animalType = type;
	}
}