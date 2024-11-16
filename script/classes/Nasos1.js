class Nasos1 extends CommonBlock{
	prototype = "Nasos1"
	name = "Насос"
	static miniIcon = 
	`
	<svg id="Nasos1" onClick="createBlock('Nasos1')" viewBox="0 0 100 100">
		<circle cx="50" cy="50" r="48" fill="none" stroke-width="1" stroke="#dadaff"/>
		<path d="M50,2 l15,20 l-30,0 l-15,20 " fill="#dadaff"/>
	</svg>
	`
	static icon = [
		[0,0,-48,2,-26,0,-48,22,-48,48,2,0,26,22,48,48,48,2,26,0,48,-23,48,-48,2,0,-26,-23,-48,-48,-48],
		[0,0,-48,1,-15,25,1,30,0,1,-15,-25]
	];
	getIcon(){
		return this.iconProcessor(this.iconMarginPrcessor(this.iconRotatePrcessor(Nasos1.icon, 0)));
	}
	nodes = [
	{
		cx:0,
		cy:-48,
		connected: -1,
	},
	{
		cx:0,
		cy:48,
		connected: -1,
	}
	]
	drawNodes(){
		let thisElem = workSpace.getElementById(`block${this.id}`);
		for(let i = 0; i < this.nodes.length; i++){
			thisElem.innerHTML+= `
			<circle class="node" id="node${this.id}_${i}" onmousedown="pipe([${this.id},${i}])" cx="${this.nodes[i]['cx']+this.Xcord}" cy="${this.nodes[i]['cy']+this.Ycord}" r="5" fill="black" stroke-width="1" stroke="#dadaff"/>
			`
		}
	}
}