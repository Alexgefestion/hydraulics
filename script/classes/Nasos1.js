class Nasos1 extends CommonBlock{
	name = "Насос"
	getIcon(){
		return `
	<svg id="block${this.id}" width="${this.width}" onmousedown="setCurrTarget(${this.id});setMode(0)" x="${this.Xcord}" y="${this.Ycord}" fill="${this.liquid.fill}"  stroke-width="2" stroke="black" width="100" height="100" viewBox="0 0 100 100">
		<circle id="block${this.id}" cx="50" cy="50" r="48"/>
		<path fill="#000" d="M50,2 l15,20 l-30,0 l15,-20"/>

		<circle class="node" onmousedown="pipe([${this.id},1],[50,2])" cx="50" cy="2" r="5" fill="black" stroke-width="1" stroke="#dadaff"/>
		<circle class="node" onmousedown="pipe([${this.id},0],[50,98])" cx="50" cy="98" r="5" fill="black" stroke-width="1" stroke="#dadaff"/>
	</svg> `
	}
	static miniIcon = 
	`
	<svg id="Nasos1" onClick="createBlock('Nasos1')" viewBox="0 0 100 100">
		<circle cx="50" cy="50" r="48" fill="none" stroke-width="1" stroke="#dadaff"/>
		<path d="M50,2 l15,20 l-30,0 l-15,20 "  fill="#dadaff"/>
	</svg>
	`
}