class CommonLiquid{
	constructor(option){
		option = Object.assign({}, this.defaultOptions, option);
		this.name = option.name;			//название жидкости
		this.viscosity = option.viscosity;	//вязкость
		this.fill = option.fill;			//цвет
		this.density = option.density;  	//плотность
	}
	defaultOptions = {
		name: 'Вода',
		viscosity: 8.90e-4,
		fill: '#aaa',
		draw: 997

	}
}