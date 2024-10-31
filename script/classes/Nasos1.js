class Nasos1 extends CommonBlock{
	icon = 
	`<svg id="block${this.id}" width="${this.width}" fill="${this.liquid.fill}" onmousedown="currTarget=${this.id}" x="${this.Xcord}" y="${this.Ycord}" stroke-width="2" stroke="black" width="100" height="100" viewBox="0 0 100 100">
		<circle id="block${this.id}" cx="50" cy="50" r="48"/>
		<path d="M50,2 l15,20 l-30,0 l15,-20"/>
	</svg> `
}