class CommonBlock{
	constructor(option){
		option = Object.assign({}, this.defaultOptions, option);
		this.id = option.id;
		this.name = option.name;
		this.Xcord = option.Xcord;
		this.Ycord = option.Ycord;
		this.liquid = option.liquid;
		this.pressure = option.pressure;
		this.temperature = option.temperature
	}
	defaultOptions = {
		id: 0,
		name: 'common',
		Xcord: 0,
		Ycord: 0,
		liquid: {
			id: 0,
			name: 'Вода',
			viscosity: 8.90e-4,
			fill: '#36f',
			density: 997
		},
		pressure: 1,
		temperature: 20		
	}
	//graphic 

	width = 100;
	miniIcon = "";

	static getMiniIcon(){
		return this.miniIcon;
	}
	getIcon(){
		return `
		<svg id="block${this.id}" width="${this.width}" onmousedown="setCurrTarget(${this.id});setMode(0)" x="${this.Xcord}" y="${this.Ycord}" fill="${this.liquid.fill}"  stroke-width="2" stroke="black" width="100" height="100" viewBox="0 0 100 100">
			<circle id="block${this.id}" cx="50" cy="50" r="48"/>
		</svg> `
	}

	getOption(){
		let option = [
			["id блока", this.id, "number"],
			["Название", this.name, "text"],
			["Давление", this.pressure, "number"],
			["Температура", this.temperature, "number"],
			["Жидкость", this.liquid.id, "number"]
		]
		return option;
	}

	draw(){
		workSpace.innerHTML += this.getIcon();
	}

	remove(){
		workSpace.getElementById(`block${this.id}`).remove();
	}

	reDraw(){
		this.remove();
		this.draw();
	}

	changeFill(fillArg){
		this.liquid.fill = fillArg;
		workSpace.getElementById(`block${this.id}`).setAttribute("fill", this.liquid.fill);
	}

	move(newX,newY){
		this.Xcord = newX-(this.width/2);
		workSpace.getElementById(`block${this.id}`).setAttribute("x", this.Xcord);
		this.Ycord = newY-(this.width/2);
		workSpace.getElementById(`block${this.id}`).setAttribute("y", this.Ycord);
	}
}
