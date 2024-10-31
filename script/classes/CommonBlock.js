class CommonBlock{
	constructor(option){
		this.id = option.id;
		this.Xcord = option.Xcord;
		this.Ycord = option.Ycord;
		this.liquid = option.liquid;
	}
	//graphic

	width = 100;
	icon = "";


	draw(){
		svg.innerHTML += this.icon;
	}
	remove(){
		svg.getElementById(`block${this.id}`).remove();
	}
	changeFill(fillArg){
		this.liquid.fill = fillArg;
		svg.getElementById(`block${this.id}`).setAttribute("fill", this.liquid.fill);
	}
	move(newX,newY){
		this.Xcord = newX-(this.width/2);
		svg.getElementById(`block${this.id}`).setAttribute("x", this.Xcord);
		this.Ycord = newY-(this.width/2);
		svg.getElementById(`block${this.id}`).setAttribute("y", this.Ycord);
	}
}
