<h1>Создвние новых блоков</h1>
<h3>создание файла класса нового блока<h3>
	<p>Все файлы классов хранятся в дирректории /script/classes.
	Класс блока наследуется от основного класса CommonBlock, новый класс должен обязательно включать в себя:</p>
	<li>name - указывает название класса</li>
	<li>метод getIcon() <br>пример:</li>

	getIcon(){
		return `
	<svg id="block${this.id}" width="${this.width}" x="${this.Xcord}" y="${this.Ycord}" fill="${this.liquid.fill}"  stroke-width="2" stroke="black" width="100" height="100" viewBox="0 0 100 100">
		<circle id="block${this.id}" cx="50" cy="50" r="48"/>
		<path fill="#000" d="M50,2 l15,20 l-30,0 l15,-20"/>
	</svg> `
	}


