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

	
	miniIcon = "";
	// icon = [
	// 	[1,0,0,48,48],
	// 	[0,0,-48,15,-25],
	// 	[0,0,-48,-15,-25]
	// ];
	icon = [
		[0,0,-48,2,-26,0,-48,22,-48,48,2,0,26,22,48,48,48]
	];
	scale = 1;

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
			// newIcon[i] = [];
			// newIcon[i][0] = iconObjet[i][0];
			// newIcon[i][1] = this.rotateCordX(iconObjet[i][1], iconObjet[i][2], quadrant);
			// newIcon[i][2] = this.rotateCordY(iconObjet[i][1], iconObjet[i][2], quadrant);
			// newIcon[i][3] = this.rotateCordX(iconObjet[i][3], iconObjet[i][4], quadrant);
			// newIcon[i][4] = this.rotateCordY(iconObjet[i][3], iconObjet[i][4], quadrant);
			// if(iconObjet[i][0] == 1){
			// 	newIcon[i][3] = Math.abs(newIcon[i][3]);
			// 	newIcon[i][4] = Math.abs(newIcon[i][4]);			
			// }
			let j = 0;
			newIcon[i] = [];
			newIcon[i][j] = 0
			newIcon[i][j+1] = this.rotateCordX(iconObjet[i][j+1], iconObjet[i][j+2], quadrant);
			newIcon[i][j+2] = this.rotateCordY(iconObjet[i][j+1], iconObjet[i][j+2], quadrant);
			j = j+3;
			while (j < iconObjet[i].length) {
				newIcon[i][j] = iconObjet[i][j];
				if(iconObjet[i][j] == 1){
					newIcon[i][j+1] = this.rotateCordX(iconObjet[i][j+1], iconObjet[i][j+2], quadrant);
					newIcon[i][j+2] = this.rotateCordY(iconObjet[i][j+1], iconObjet[i][j+2], quadrant);
					j = j+3;
				}else{
					newIcon[i][j+1] = this.rotateCordX(iconObjet[i][j+1], iconObjet[i][j+2], quadrant);
					newIcon[i][j+2] = this.rotateCordY(iconObjet[i][j+1], iconObjet[i][j+2], quadrant);
					newIcon[i][j+3] = this.rotateCordX(iconObjet[i][j+3], iconObjet[i][j+4], quadrant);
					newIcon[i][j+4] = this.rotateCordY(iconObjet[i][j+3], iconObjet[i][j+4], quadrant);
					newIcon[i][j+5] = this.rotateCordX(iconObjet[i][j+5], iconObjet[i][j+6], quadrant);
					newIcon[i][j+6] = this.rotateCordY(iconObjet[i][j+5], iconObjet[i][j+6], quadrant);
					j = j+7;
				}
			}
			
		}
		return newIcon;
	}
	iconMarginPrcessor(iconObjet){
		let newIcon = [];
		for(let i = 0; i < iconObjet.length; i++){
			// newIcon[i] = [];
			// newIcon[i][0] = iconObjet[i][0];
			// newIcon[i][1] = iconObjet[i][1]*this.scale+this.Xcord;
			// newIcon[i][2] = iconObjet[i][2]*this.scale+this.Ycord;
			// if(iconObjet[i][0] == 0){
			// 	newIcon[i][3] = iconObjet[i][3]*this.scale+this.Xcord;
			// 	newIcon[i][4] = iconObjet[i][4]*this.scale+this.Ycord;			
			// }else{
			// 	newIcon[i][3] = iconObjet[i][3]*this.scale;
			// 	newIcon[i][4] = iconObjet[i][4]*this.scale;
			// }
			let j = 0;
			newIcon[i] = [];
			newIcon[i][j] = 0
			newIcon[i][j+1] = iconObjet[i][j+1]+this.Xcord;
			newIcon[i][j+2] = iconObjet[i][j+2]+this.Ycord;
			j = j+3;
			while (j < iconObjet[i].length) {
				newIcon[i][j] = iconObjet[i][j];
				if(iconObjet[i][j] == 1){
					newIcon[i][j+1] = iconObjet[i][j+1];
					newIcon[i][j+2] = iconObjet[i][j+2];
					j = j+3;
				}else{
					newIcon[i][j+1] = iconObjet[i][j+1];
					newIcon[i][j+2] = iconObjet[i][j+2];
					newIcon[i][j+3] = iconObjet[i][j+3];
					newIcon[i][j+4] = iconObjet[i][j+4];
					newIcon[i][j+5] = iconObjet[i][j+5];
					newIcon[i][j+6] = iconObjet[i][j+6];
					j = j+7;
				}
			}
		}
		return newIcon;
	}
	iconProcessor(iconObjet){
		let newIcon = `<g id="block${this.id}" fill="${this.liquid.fill}" stroke="black" stroke-width="2px">`;
		let d = "";
		for(let i = 0; i < iconObjet.length; i++){
			// if(iconObjet[i][0] == 0){
			// 	newIcon += `<line x1="${iconObjet[i][1]}" y1="${iconObjet[i][2]}" x2="${iconObjet[i][3]}" y2="${iconObjet[i][4]}" />`		
			// }else{
			// 	newIcon += `<ellipse id="block${this.id}" cx="${iconObjet[i][1]}" cy="${iconObjet[i][2]}" rx="${iconObjet[i][3]}" ry="${iconObjet[i][4]}" />`;
			// }
			let j = 0;
			d = `M${iconObjet[i][j+1]},${ iconObjet[i][j+2]}`
			j = j+3;
			while (j < iconObjet[i].length) {
				if(iconObjet[i][j] == 1){
					d += `l${ iconObjet[i][j+1]},${ iconObjet[i][j+2]}`
					j = j+3;
				}else{
					d += `c${ iconObjet[i][j+1]},${ iconObjet[i][j+2]},${ iconObjet[i][j+3]},${ iconObjet[i][j+4]},${ iconObjet[i][j+5]},${ iconObjet[i][j+6]}`
					j = j+7;
				}
			}
			newIcon += `<path d="${d}">`
		}
		newIcon += "</d>"
		return newIcon;
	}
	getIcon(){
		console.log(this.iconMarginPrcessor(this.iconRotatePrcessor(this.icon, 0)))
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
		this.Xcord = newX;
		workSpace.getElementById(`block${this.id}`).remove();
		this.Ycord = newY;
		workSpace.innerHTML += this.getIcon();
		this.drawNodes()
		// workSpace.getElementById(`block${this.id}`).setAttribute("y", this.Ycord);
	}
}
