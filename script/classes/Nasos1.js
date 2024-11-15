class Nasos1 extends CommonBlock{
	name = "Насос"
	// getIcon(){
	// 	return `
	// <svg id="block${this.id}" width="${this.width}" x="${this.Xcord}" y="${this.Ycord}" fill="${this.liquid.fill}"  stroke-width="2" stroke="black" width="100" height="100" viewBox="0 0 100 100">
	// 	<circle id="block${this.id}" cx="50" cy="50" r="48"/>
	// 	<path fill="#000" d="M50,2 l15,20 l-30,0 l15,-20"/>
	// </svg> `
	// }
	static miniIcon = 
	`
	<svg id="Nasos1" onClick="createBlock('Nasos1')" viewBox="0 0 100 100">
		<circle cx="50" cy="50" r="48" fill="none" stroke-width="1" stroke="#dadaff"/>
		<path d="M50,2 l15,20 l-30,0 l-15,20 " fill="#dadaff"/>
	</svg>
	`
	nodes = [
	{
		cx:0,
		cy:-48,
		connected: -1,
		diametr: 50,
		roughness: 0.1
	},
	{
		cx:0,
		cy:48,
		connected: -1,
		diametr: 50,
		roughness: 0.1
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