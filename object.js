let list ={
    1:'Помыть посуду',
    2:"Убраться",
}
let listDo=+prompt('Введите 1-показать список задач, 2-добавить задачу, 3-удалить задачу')
if(listDo==1) {
    console.log(list)
} else if(listDo==2) {
    let listAddValue=prompt('Добавте новую задачу');
    let listAddKey=prompt('Добавте номер для новой задачи');
    list[listAddKey]=listAddValue;
} else if(listDo==3) {
    let listDel=prompt('Введите номер задачи для удаления')
    delete list[listDel]
}
