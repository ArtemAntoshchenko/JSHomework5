let BookList={
    1:{name:'Преступление и наказание', author:'Достоевский', genre:"Роман", rating:''},
    2:{name:'Превращение', author:'Кафка', genre:"Повесть", rating:''},
}
function UIdo(UI) {
    if(UI==1) {
        return console.log(BookList)
    } else if(UI==2) {
        let BookListAddname=prompt('Введите название книги')
        let BookListAddauthor=prompt('Введите автора книги')
        let BookListAddgenre=prompt('Введите жанр книги')
        // Не работает
        BookList[3][name]=BookListAddname;
        BookList[3][author]=BookListAddauthor, BookList[3][genre]=BookListAddgenre
        // 
        return console.log(BookList)
    } else if (UI==3) {
        let BookListRatingID=prompt('Введите ID книги для оценки')
        let BookListRating=+prompt('Введите оценку от 1 до 5')
        BookList[BookListRatingID].rating=BookListRating
        return console.log(BookList)
    } else if (UI==4) {
    //     let list={}
    //     let sort=prompt('Введите жанр для сортировки')
    //     for (sort in BookList) {
    //         list.push()
    //     }
    //     console.log(list)
    // }
//     let sort=prompt('Введите жанр для сортировки')
//     let list=BookList.filter(book=>book.genre==sort)
//     console.log(list)
//     }
}
}
UIdo(prompt('Введите: 1-посмотреть список книг, 2-добавить книгу, 3-поставить оценку книге, 4-отсортировать книги по жанру'))
