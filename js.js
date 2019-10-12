window.onload = function (){

	var todoList = [];
	if(localStorage.getItem('todo' )!= undefined){
		todoList = JSON.parse(localStorage.getItem('todo' ));
		out();
	}
	document.getElementById('add').onclick = function(){
		var d = document.getElementById('in').value;
		var desc = document.getElementById('desc').value;
		/*
		 {todo: Добавить хлеб, check: false, desc: Описание}
		*/
		var temp = {};
		temp.todo = d;
		temp.desc = desc;
		temp.check = false;
		var i = todoList.length;
		todoList[i] = temp;
		//todoListd[i] = tempd;
		console.log(todoList);
		out();

		localStorage.setItem('todo', JSON.stringify(todoList) );
	}

	function out(){
		var out = '';
		for (var key in todoList){
			if(todoList[key].check == true){
				out += '<input type="checkbox" checked>';
			}
			else {
				out += '<input type="checkbox">';
			}
			out += todoList[key].todo + '<br>' + todoList[key].desc + '<br>' + '<br>';
		}
		document.getElementById('out').innerHTML = out;
	}
}