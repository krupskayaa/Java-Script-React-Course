// let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

// let personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// let oneOfWatchedMovie, marksOfWatchedFilm2;

// for(let i = 0; i < 2; i++){
//     oneOfWatchedMovie = prompt("Один из последних просмотренных фильмов?");
//     marksOfWatchedFilm2 = +prompt("На сколько вы оцените его?");

//     if(oneOfWatchedMovie != null && marksOfWatchedFilm2 != null && oneOfWatchedMovie != '' && marksOfWatchedFilm2 != '' && oneOfWatchedMovie.length < 50) {
//         personalMovieDB.movies[oneOfWatchedMovie] = marksOfWatchedFilm2;
//         console.log('done!');
//     } else {
//         console.log('error!');
//         i--;
//     }
// }

// let i = 0;
// while(i < 2){
//     oneOfWatchedMovie = prompt("Один из последних просмотренных фильмов?");
//     marksOfWatchedFilm2 = +prompt("На сколько вы оцените его?");

//     if(oneOfWatchedMovie != null && marksOfWatchedFilm2 != null && oneOfWatchedMovie != '' && marksOfWatchedFilm2 != '' && oneOfWatchedMovie.length < 50) {
//         personalMovieDB.movies[oneOfWatchedMovie] = marksOfWatchedFilm2;
//         console.log('done!');
//     } else {
//         console.log('error!');
//         i--;
//     }
//     i++;
// }

// if(personalMovieDB.count < 10) {
//     alert('Просмотрено довольно мало фильмов');
// } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     alert('Вы классический зритель');
// } else if (personalMovieDB.count >= 30) {
//     alert('Вы киноман');
// } else {
//     alert('Произошла ошибка');
// }

// console.log('gjhjhgjh');
// console.log(personalMovieDB);
// console.log(typeof undefined);
// console.log( NaN && 2 && undefined );
// console.log( 1 && 2 && 3 );
// console.log( !1 && 2 || !3 );
// console.log( 25 || null && !3 );
// console.log( NaN || null || !3 || undefined || 5);
// console.log( NaN || null && !3 && undefined || 5);
// console.log( 5 === 5 && 3 > 1 || 5);

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!');
// }

// console.log( !1 && 2 || !3 );

// let num = 50;

// for(let i = 2; i <= 10; i++){
//     if(i%2===0){
//         console.log(i);
//     }
// }


// let i = 2;

// while (i <= 16) {
//     if (i % 2 === 0) {
//         i++;
//     } else {
//         console.log(i);
//         i++;
//     }
// }

// const arrayOfNumbers = [];
// for(let i = 5; i <= 10; i++){
//     for(let j = 0; j <= 5; j++){
//         arrayOfNumbers[j]=i;
//         // if (arrayOfNumbers.length > 1) {
//         //     continue first;
//         // }
//     }
// }
// console.log(arrayOfNumbers);
// let j = 0;
// let i = 5;
// while(j < 6){
//     arrayOfNumbers[j] = i;
//     i++;
//     j++;
// }
// console.log(arrayOfNumbers);

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for(let i = 0; i < arr.length; i++){
//     result[i] = arr[i];
// }
// console.log(result);

// const data = [5, 10, 'Shopping', 20, 'Homework'];

// for(let i = 0; i < data.length; i++){
//     if(typeof data[i] === 'number'){
//         data[i] *= 2;
//     } else if (typeof data[i] === 'string'){
//         data[i] += ' - done';
//     }
// }
// console.log(data);

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];

// for(let i = 1; i < 6; i++){
    
//     result[i-1] = data[data.length-i];
// }
// console.log(result);

// const lines = 5;
// let result = '';

// for(let i = lines; i >= 0; i--){
//     if(i === 5){
//         result += '     *' + '\n';
//     } else if(i === 4){
//         result += '    ***' + '\n';
//     } else if(i === 3){
//         result += '   *****' + '\n';
//     } else if(i === 2){
//         result += '  *******' + '\n';
//     } else if(i === 1){
//         result += ' *********' + '\n';
//     } else if(i === 0){
//         result += '***********' + '\n';
//     }
// }

// console.log(result);

// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result);

// function sayHello(name) {
//     return `Привет, ${name}`;
// }

// console.log(sayHello('Anton'));

// function returnNeighboringNumbers(number) {
//     let numbers = [];
//     for(let i = 0; i < 3; i++){
//         if(i === 0) {
//             numbers[i] = number - 1;
//         } else if(i === 1) {
//             numbers[i] = number;
//         } else if(i === 2) {
//             numbers[i] = number + 1;
//         }
//     }
//     return numbers;
// }
// console.log(returnNeighboringNumbers(5));
// let result = '';
// function getMathResult(number, count) {
//     if(typeof count !== 'number' || count <= 0){
//         return number;
//     }
//     for(let i = 1; i <= count; i++){
//         if (i === count) {
//             result += `${number * i}`;
//         } else {
//             result += `${number * i}---`
//         }
//     }
//     return result;
// }

// console.log(getMathResult(5, 3));


// function getMathResult(number, count) {
//     let result = '';
//     if(typeof count !== 'number' || count <= 0){
//         return number;
//     }
//     for(let i = 1; i <= count; i++){
//         if(i === count) {
//             result += number * i;
//         } else {
//             result += `${number * i}---`;
//         }
//     }
//     return result;
// }

// console.log(getMathResult(5, 3));

// 'use strict';

// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function(){
//         personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

//         while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//         }
//     },
//     rememberMyFilms: function(){
//         for (let i = 0; i < 2; i++) {
//             const a = prompt('Один из последних просмотренных фильмов?', ''),
//                   b = prompt('На сколько оцените его?', '');
        
//             if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//                 personalMovieDB.movies[a] = b;
//                 console.log('done');
//             } else {
//                 console.log('error');
//                 i--;
//             }
//         }
//     },
//     detectPersonalLevel: function(){
//         if (personalMovieDB.count < 10) {
//             console.log("Просмотрено довольно мало фильмов");
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//             console.log("Вы классический зритель");
//         } else if (personalMovieDB.count >= 30) {
//             console.log("Вы киноман");
    //     } else {
    //         console.log("Произошла ошибка");
    //     }
    // },
    // showMyDb: function(privat){
    //     if(!privat){
    //         return personalMovieDB;
    //     }
    // },
    // writeYourGenres: function(){
    //     for (let i = 1; i <= 3; i++) {
    //         personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
    //         while(personalMovieDB.genres[i-1] == '' || personalMovieDB.genres[i-1] == null) {
    //             personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
    //         }
    //     }
//         // personalMovieDB.showMyFavoriteGenres();
//     },
//     toggleVisibleMyDB: function(privat){
//         // if(privat === false){
//         //     personalMovieDB.privat = true;
//         // } else {
//         //     personalMovieDB.privat = false;
//         // }
//         if (privat) {
//             personalMovieDB.privat = false;
//         } else {
//             personalMovieDB.privat = true;
//         }
//         // return privat === false ? personalMovieDB.privat = true : personalMovieDB.privat = false;
//     },
//     showMyFavoriteGenres: function(){
//         personalMovieDB.genres.forEach((el, i) => {
//             console.log(`Любимый жанр: №${i+1} - это ${el}`);
//         });
//     },
// };
// console.log(personalMovieDB.start());
// personalMovieDB.rememberMyFilms();
// console.log(personalMovieDB.showMyDb(personalMovieDB.privat));
// console.log(personalMovieDB.toggleVisibleMyDB(personalMovieDB.privat));
// // console.log(personalMovieDB.toggleVisibleMyDB(personalMovieDB.privat));
// personalMovieDB.writeYourGenres();
// console.log(personalMovieDB.showMyFavoriteGenres());
// console.log(personalMovieDB.genres[i-1]);
// console.log(personalMovieDB);


// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//               b = prompt('На сколько оцените его?', '');
    
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }

// rememberMyFilms();

// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log("Просмотрено довольно мало фильмов");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log("Вы классический зритель");
//     } else if (personalMovieDB.count >= 30) {
//         console.log("Вы киноман");
//     } else {
//         console.log("Произошла ошибка");
//     }
// }

// detectPersonalLevel();

// function showMyDb(privat) {
//     if(!privat){
//         console.log(personalMovieDB);
//     }
// }

// showMyDb(personalMovieDB.privat);

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
//     }
// }

// writeYourGenres();








// function calculateVolumeAndArea(lengthKub) {
//     let volume = 1;
//     let area = 1;

//     const checkLength = Number.isInteger(lengthKub);

//     for(let i = 1; i <= 3; i++){
//         volume *= lengthKub;
//     }

//     for(let i = 1; i <= 2; i++){
//         area *= lengthKub;
//     }
    
//     area *= 6;

//     return checkLength === false || lengthKub < 0 ? 
//         'При вычислении произошла ошибка' : 
//         `Объем куба: ${volume}, площадь всей поверхности: ${area}`;

    // let result = `Объем куба: ${volume}, площадь всей поверхности: ${area}`;

    // if(checkLength == false || lengthKub < 0){
    //     return 'При вычислении произошла ошибка';
    // } else{
    //     return result;
    // }
// }

// console.log(calculateVolumeAndArea(5));
// console.log(calculateVolumeAndArea(15));
// console.log(calculateVolumeAndArea(15.5));
// console.log(calculateVolumeAndArea('15'));
// console.log(calculateVolumeAndArea(-15));


// function getCoupeNumber(num) {
//     const checkNum = Number.isInteger(num);
//     if(typeof num != 'number' || num < 0 || checkNum === false){
//         return 'Ошибка. Проверьте правильность введенного номера места';
//     } else if(num === 0 || num > 36){
//         return 'Таких мест в вагоне не существует';
//     } else {
//         return Math.ceil(num / 4);
//     }
// }

// console.log(getCoupeNumber(33));
// console.log(getCoupeNumber(7));
// console.log(getCoupeNumber(300));
// console.log(getCoupeNumber(0));
// console.log(getCoupeNumber(7.7));
// console.log(getCoupeNumber(-10));
// console.log(getCoupeNumber('Hello'));

// function getTimeFromMinutes(number) {
//     const checkNumber = Number.isInteger(number);
//     if(typeof number !== 'number' || checkNumber === false || number < 0){
//         return 'Ошибка, проверьте данные';
//     }
//     let hours = Math.floor(number / 60);
//     let minutes = number - (hours * 60);
//     if(hours === 1){
//         return `Это ${hours} час и ${minutes} минут`;
//     } else if(hours >= 2 && hours <= 4){
//         return `Это ${hours} часа и ${minutes} минут`;
//     } else if(hours >= 5 && hours <= 12 || hours === 0){
//         return `Это ${hours} часов и ${minutes} минут`;
//     }
// }

// console.log(getTimeFromMinutes(150));
// console.log(getTimeFromMinutes(50));
// console.log(getTimeFromMinutes(0));
// console.log(getTimeFromMinutes(-150));

// console.log(150 % 60);

// function findMaxNumber(one, two, three, four){
//     const numbers = [one, two, three, four];

//     function isNumber(number) {
//         return typeof number === 'number';
//     }

//     let check = numbers.every(isNumber);

//     const biggest = numbers.sort((a, b) => a - b);

//     return !check ? 0 : biggest[biggest.length-1];
// }

// console.log(findMaxNumber(9, 6, 5, 2));

// function fib(num) {
//     if(typeof num != 'number' || num <= 0){
//         return '';
//     }

//     // let result = ''; 0 1 1 2 3
//     // let f = 0; 1 1 2 3 5
//     // let s = 1; 1 2 3 5 8

//     let result = ''; 0 1 1 2 3
//     let first = 0; 1 1 2
//     let second = 1; 1 2 3

//     for(let i = 0; i < num; i++){
//         if(i + 1 === num){
//             result += `${first}`;
//         }else{
//             result += `${first} `;
//         }

//         let third = first + second; 1 2 3

//         first = second;
//         second = third;
//     }

//     return result;
// }

// console.log(fib(5));
// // 01123

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function(pl){
//         const {age} = pl;
//         const {languages} = pl.skills;
//         let str = `Мне ${age} и я владею языками: `;
//         languages.forEach(el => {
//             str += `${el.toUpperCase()} `;
//         });
//         return str;
//     }
// };

// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

// function showExperience(plan) {
//     const {exp} = plan.skills;
//     return exp;
// }

// console.log(showExperience(personalPlanPeter));

// function showProgrammingLangs(plan) {
//     const {programmingLangs} = plan.skills;
//     let str = '';
//     for (let key in programmingLangs) {
//         str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
//         console.log(programmingLangs[key]);
//     }
//     return str;
// }

// console.log(showProgrammingLangs(personalPlanPeter));

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     return arr.length === 0 ? 'Семья пуста' : `Семья состоит из: ${arr.join(' ')}`;
// }

// console.log(showFamily(family));


// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     arr.forEach(el => {
//         console.log(el.toLowerCase());
//     });
// }

// standardizeStrings(favoriteCities);

// const someString = 'This is some strange string';

// function reverse(str) {
//     if(typeof str !== 'string'){
//         return 'Ошибка!';
//     }
//     let spl = str.split(' ').reverse();
//     spl = spl.map(el => el.split('').reverse().join(''));
//     return spl.join(' ');
// }

// console.log(reverse(someString));

// const someString = 'This is some strange string';

// function reverse(str) {
//     if(typeof str !== 'string'){
//         return 'Ошибка!';
//     }
//     return str.split('').reverse().join('');
// }

// console.log(reverse(someString));

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr = false) {
//     let str = `Доступные валюты:\n`;
//     const newMass = [];
//     if(arr.length == 0){
//         return 'Нет доступных валют';
//     }
//     if(missingCurr === false){
//         str += arr.join('\n') + '\n';
//     }else {
//         arr.forEach(el => {
//             if(el !== missingCurr){
//                 newMass.push(el);
//             }
//         });
//         str += newMass.join('\n') + '\n';
//     }
//     return str;
// }

// const all = [...baseCurrencies, ...additionalCurrencies];

// availableCurr(all, 'RUB');
// const all = baseCurrencies.concat(additionalCurrencies);



// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000
// }

// function isBudgetEnough(data) {
//     let square = 0;
//     let volume = 0;

//     data.shops.forEach(shop => {
//         square += shop.width * shop.length;
//     });

//     volume = data.height * square;

//     if (data.budget - (volume * data.moneyPer1m3) >= 0) {
//         return 'Бюджета достаточно';
//     } else {
//         return 'Бюджета недостаточно';
//     }
// }

// console.log("b" > "a");
// console.log(1 || 2);

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

// function sortStudentsByGroups(arr) {
//     arr.sort();

//     let size = 3;
//     let groups = [];
//     let lastElem = 'Оставшиеся студенты: ';

//     for(let i = 0; i < arr.length / size; i++){
//         groups[i] = arr.slice(i*size, (i*size) + size);
//     }

//     if(Number.isInteger(arr.length/size)){
//         lastElem += '-';
//     } else {
//         lastElem += groups.pop().join(', ');
//     }
//     groups.push(lastElem);

//     return groups;
// }

// console.log(sortStudentsByGroups(students));


// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

// function sortStudentsByGroups(arr) {
//     arr.sort();
//     const a = [], b = [], c = [], rest = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (i < 3) {
//             a.push(arr[i]);
//         } else if (i < 6) {
//             b.push(arr[i]);
//         } else if (i < 9) {
//             c.push(arr[i]);
//         } else {
//             rest.push(arr[i]);
//         }
//     }
//     return console.log([a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`]);
// }

// sortStudentsByGroups(students);


// function makeWorker() {
//     let name = "Pete";

//     return function() {
//     alert(name);
//     };
// }
  
// let name = "John";
  
// let work = makeWorker();

// work();


// const restorantData = {
//     menu: [
//         {
//             name: 'Salad Caesar',
//             price: '14$'
//         },
//         {
//             name: 'Pizza Diavola',
//             price: '9$'
//         },
//         {
//             name: 'Beefsteak',
//             price: '17$'
//         },
//         {
//             name: 'Napoleon',
//             price: '7$'
//         }
//     ],
//     waitors: [
//         {name: 'Alice', age: 22}, {name: 'John', age: 24}
//     ],
//     averageLunchPrice: '20$',
//     openNow: true
// };

// function isOpen(prop) {
//     let answer = '';
//     prop ? answer = 'Открыто' : answer = 'Закрыто';

//     return answer;
// }

// console.log(isOpen(restorantData.openNow));

// function isAverageLunchPriceTrue(fDish, sDish, average) {
//     if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < +average.slice(0, -1)) {
//         return 'Цена ниже средней';
//     } else {
//         return 'Цена выше средней';
//     }
// }

// console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

// function transferWaitors(data) {
//     const copy = JSON.parse(JSON.stringify(data));
//     copy.waitors[0] = {name: 'Mike', age: 32};
//     return copy;
// }

// transferWaitors(restorantData);

// function pow(x, n){
//     if (n === 1){
//         return x;
//     } else {
//         return x * pow(x, n - 1);
//     }
// }

// console.log(pow(2, 3));