<h1>Создвние новых блоков</h1>
<h3>создание файла класса нового блока<h3>
<h4>Все файлы классов хранятся в дирректории /script/classes.
Класс блока наследуется от основного класса CommonBlock, новый класс должен обязательно включать в себя:</h4>
<li>переменная <b>name</b> = "Насос" - указывает название класса</li>
<li>двумерный массив <b>icon</b> - хранит данные изображения блока</li>

	icon = [
		[mode, x, y, cord1, cord2]
	]

<h4>mode:</h4>
<li>0 - линия, координаты начала которой: x1=x, y1=y; координаты конца линии x2=cord1, y2=cord2;</li>
<li>1 - эллипс, с центром в координатах cx=x, cy=y; радиусы дуг rx=cord1, ry=cord2;</li>

	icon = [
		[1,0,0,48,48],
		[0,0,-48,15,-25],
		[0,0,-48,-15,-25]
	];

<h4>Прeобразуется в:</h4>
 
	<ellipse cx="50" cy="50" rx="48" ry="48" stroke="black" fill="#adf"></ellipse>
	<line x1="50" y1="2" x2="35" y2="25" stroke="black"></line>
	<line x1="50" y1="2" x2="65" y2="25" stroke="black"></line>
