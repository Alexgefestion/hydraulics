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
			fill: '#adf',
			density: 997
		},
		pressure: 1,
		temperature: 20		
	}
	//graphic 

	width = 100;
	miniIcon = "";
	icon = [
		[1,0,0,48,48],
		[0,0,-48,15,-25],
		[0,0,-48,-15,-25]
	];

	static getMiniIcon(){
		return this.miniIcon;
	}

	//     0
	//     ^
	//     |
	//3<---0--->1   направление которое задает квадрант
	//     |        координаты в icon задаются отнотиельно центра изображения
	//     v        нулевой индекс массива задает режим 0-линия(1инд=x1, 2инд=y1, 3инд=x2, 4инд=y2), 1-эллипс (1инд=cx, 2инд=cy, 3инд=rx, 4инд=ry)
	//     2
	rotateCordX(x,y,quadrant){
		let cos = [0,1,0,-1];
		let sin = [1,0,-1,0];
		return x * sin[quadrant] - y * cos[quadrant];
	}
	rotateCordY(x,y,quadrant){
		let cos = [0,1,0,-1];
		let sin = [1,0,-1,0];
		return x * cos[quadrant] + y * sin[quadrant];
	}
	iconRotatePrcessor(iconObjet, quadrant){
		let cos = [0,1,0,-1];
		let sin = [1,0,-1,0];
		let newIcon = [];
		for(let i = 0; i < iconObjet.length; i++){
			newIcon[i] = [];
			newIcon[i][0] = iconObjet[i][0];
			newIcon[i][1] = this.rotateCordX(iconObjet[i][1], iconObjet[i][2], quadrant);
			newIcon[i][2] = this.rotateCordY(iconObjet[i][1], iconObjet[i][2], quadrant);
			newIcon[i][3] = this.rotateCordX(iconObjet[i][3], iconObjet[i][4], quadrant);
			newIcon[i][4] = this.rotateCordY(iconObjet[i][3], iconObjet[i][4], quadrant);
			if(iconObjet[i][0] == 1){
				newIcon[i][3] = Math.abs(newIcon[i][3]);
				newIcon[i][4] = Math.abs(newIcon[i][4]);			
			}
		}
		return newIcon;
	}
	iconMarginPrcessor(iconObjet){
		let newIcon = [];
		for(let i = 0; i < iconObjet.length; i++){
			newIcon[i] = [];
			newIcon[i][0] = iconObjet[i][0];
			newIcon[i][1] = iconObjet[i][1]+this.Xcord;
			newIcon[i][2] = iconObjet[i][2]+this.Ycord;
			if(iconObjet[i][0] == 0){
				newIcon[i][3] = iconObjet[i][3]+this.Xcord;
				newIcon[i][4] = iconObjet[i][4]+this.Ycord;			
			}else{
				newIcon[i][3] = iconObjet[i][3];
				newIcon[i][4] = iconObjet[i][4];
			}
		}
		return newIcon;
	}
	iconProcessor(iconObjet){
		let newIcon = `<g id="block${this.id}" fill="${this.liquid.fill}" stroke="black" stroke-width="2px">`;
		for(let i = 0; i < iconObjet.length; i++){
			if(iconObjet[i][0] == 0){
				newIcon += `<line x1="${iconObjet[i][1]}" y1="${iconObjet[i][2]}" x2="${iconObjet[i][3]}" y2="${iconObjet[i][4]}" />`		
			}else{
				newIcon += `<ellipse cx="${iconObjet[i][1]}" cy="${iconObjet[i][2]}" rx="${iconObjet[i][3]}" ry="${iconObjet[i][4]}" />`;
			}
		}
		console.log(newIcon)
		return newIcon;
		// return `
		// <svg id="block${this.id}" width="${this.width}" onmousedown="setCurrTarget(${this.id});setMode(0)" x="${this.Xcord}" y="${this.Ycord}" fill="${this.liquid.fill}"  stroke-width="2" stroke="black" width="100" height="100" viewBox="0 0 100 100">
		// 	<circle id="block${this.id}" cx="50" cy="50" r="48"/>
		// </svg> `
	}
	getIcon(){
		return this.iconProcessor(this.iconMarginPrcessor(this.iconRotatePrcessor(this.icon, 0)));
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
