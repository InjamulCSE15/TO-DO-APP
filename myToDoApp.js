function get_toDos() {
    var toDos = new Array;
    var toDos_str = localStorage.getItem('todo');

    if ( toDos_str !== null ) {
        toDos = JSON.parse(toDos_str);
    }
    return toDos;
}

function add () {
    var task = document.getElementById('task').value;

    var toDos = get_toDos();
    toDos.push(task);
    localStorage.setItem('todo', JSON.stringify(toDos));

    show();

    return false;
}

function clearDefault(a) {
    if (a.defaultValue == a.Value) {
        a.Value = ""
    };
}

function remove() {
    var id = this.getAttribute('id');
    var toDos = get_toDos();
    toDos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(toDos));

    show();
    return false;
}

function show() {
    var toDos = get_toDos();
    var html = '<ol>';

    for(var i=0; i<toDos.length; i++){
        html += '<li>' + toDos[i]  + '<button class="remove" id="' + i + '">Delete</button></li>';
    };
    html += '</ol>';

    document.getElementById('todos').innerHTML = html;

    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i<buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}

document.getElementById('add').addEventListener('click', add);
show();