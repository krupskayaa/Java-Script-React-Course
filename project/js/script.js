/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img'),
        bg = document.querySelector('.promo__bg'),
        genre = bg.querySelector('.promo__genre'),
        list = document.querySelector('.promo__interactive-list'),
        form = document.querySelector('.add'),
        input = form.querySelector('.adding__input'),
        btnForm = form.lastElementChild,
        inputCheckbox = document.querySelector('[type="checkbox"]');
        //   btnDel = document.querySelectorAll('.delete');

    adv.forEach(item => {
        item.remove();
    });

    genre.innerHTML = 'драма';

    bg.style.backgroundImage = 'url("img/bg.jpg")';

    const deleteFilm = (index) => {
        movieDB.movies.splice(index, 1);
        generateList();
    };
    
    const generateList = () => {
        list.innerHTML = '';

        movieDB.movies.sort().forEach((item, i) => {
            list.innerHTML += `
                <li class="promo__interactive-item"> ${i+1}) ${item}
                    <div class="delete"></div>
                </li>`;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => deleteFilm(i));
        });
    };

    generateList();

    const addMovie = (e) => {
        e.preventDefault();
        movieDB.movies.push(prepareMovieTitle(input.value).toUpperCase());

        if(inputCheckbox.checked) {
            console.log('Добавляем любимый фильм');
        }
        generateList();
    };

    const prepareMovieTitle = (title) => title.length > 21 ? `${title.slice(0, 21)}...` : title;
        
    btnForm.addEventListener('click', addMovie);

    // form.addEventListener('submit', (event) => {
    //     event.preventDefault();

    // });


});