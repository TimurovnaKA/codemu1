"use strict";
// alert("text!");
// alert("Привет, мир!");

// Вот пример многострочного комментария:
/*
	комментарий
*/
// Вот пример однострочного комментария:
// SDFGHJK,L

// Создайте переменную num и присвойте ей значение 123. Выведите значение этой переменной на экран с помощью функции alert.
// let num = 123;
// alert(num);

// let a = 1;
// let b = 2;
// let c = 3;

// Приведенный выше код можно упростить, написав let один раз и после него перечислив нужные переменные с их значениями, вот так:
// let d = 1,
//   e = 2,
//   f = 3;

// Можно вначале объявить все переменные, а потом присваивать им значения:
// let g, h, i; // объявляем все 3 переменные
// Присваиваем переменным значения:
// g = 1;
// h = 2;
// i = 3;

// Создайте переменную a. Запишите в нее значение 10, выведите его на экран. Затем запишите в нее значение 20, выведите его на экран.
// let j;
// j = 20;
// alert(j);

// Одну и ту же переменную нельзя объявить несколько раз через let. К примеру, следующий код приведет к ошибке:
// let a = 1;
// alert(a);

// let a = 2;
// alert(a);

// А можно вначале объявить переменную a, а затем делать операции с нею:

// let k;

// k = 1;
// alert(k);

// k = 2;
// alert(k);

// Создайте переменную a. Запишите в нее сумму чисел 1, 2 и 3. С помощью функции alert выведите на экран содержимое переменной a.
// let l = 1 + 2 + 3;
// alert(l);

// 1.Создайте переменную a со значением 10 и переменную b со значением 2. Выведите на экран их сумму, разность, произведение и частное (результат деления).
// let m = 10;
// let n = 2;
// let o = m + n;
// let p = m - n;
// let q = m * n;
// let r = m / n;
// alert(o);
// alert(p);
// alert(q);
// alert(r);

// 2.Создайте переменную c со значением 10 и переменную d со значением 5. Просуммируйте их, а результат присвойте переменной result. Выведите на экран значение переменной result.
// let s = 10;
// let t = 5;
// let result = s + t;
// alert(result);

// 3.Создайте переменную a со значением 1, переменную b со значением 2 и переменную c со значением 3. Выведите на экран их сумму.
// let u = 1;
// let v = 2;
// let w = 3;
// let result = u + v + w;
// alert(result);

// 4.Создайте переменную a со значением 10 и переменную b со значением 5. Отнимите от a переменную b и результат присвойте переменной c. Затем создайте переменную d, присвойте ей значение 7. Сложите переменные c и d, а результат запишите в переменную result. Выведите на экран значение переменной result.
// let x = 10;
// let y = 5;
// let z = x - y;
// let a = 7;
// let result = z + a;
// alert(result);

// 1.Не запуская код, определите, что выведется на экран:

// let a = 5 + 5 * 3;
// alert(a);
// должно выйти 20, так как 1.*: 2.+-
// тут 5*3=15 и к этому 5+15=20

// 2.Не запуская код, определите, что выведется на экран:

// let a = 5 + 5 * 3 + 3;
// alert(a);
// тут 23

// 3.Не запуская код, определите, что выведется на экран:

// let a = 8 / 2 + 2;
// alert(a);
// тут 6

// 4.Не запуская код, определите, что выведется на экран:

// let a = 8 + 2 / 2;
// alert(a);
// тут 9

// Умножение и деление имеют равный приоритет и выполняются по очереди слева направо
// 1.Не запуская код, определите, что выведется на экран:

// let a = (8 / 2) * 2;
// alert(a);
// тут 8

// 2.Не запуская код, определите, что выведется на экран:

// let a = (8 * 4) / 2 / 2;
// alert(a);
// тут 8

//При желании вы можете указывать приоритет операций с помощью круглых скобок.
// let a = (2 + 3) * (2 + 3);
// alert(a);
// тут 25

// let a = (2 + 3) * 2 + 3;
// alert(a);
// тут 13

// let a = 2 * (2 + 4 * (3 + 1));
// alert(a);
// тут 36

// let a = (2 * 8) / 4;
// alert(a);
// тут 4

// let a = 2 * (8 / 4);
// alert(a);
// тут 4

// ДРОБИ
// Запишите в переменную a число 1.5, а в переменную b - число 0.75. Найдите сумму значений этих переменных и выведите ее на экран.
// let b = 1.5;
// let c = 0.75;
// let result = b + c;
// alert(result);

// Отрицательные числа
// 1.Создайте переменную a со значением -100. Выведите это значение на экран.
// let d = -100;
// alert(d);

// 2.Создайте переменную a, запишите в нее какое-нибудь положительное или отрицательное число. Выведите на экран это число с обратным знаком.
// let e = 100;
// alert(-e);
// let a = 1;
// let b = -a; // записали в b содержимое a с обратным знаком
// alert(b);   // выведет -1
// let a = 1;
// alert(-a); // выведет -1

// Плюс перед числами в JavaScript
// Подобно тому, как перед отрицательными числами ставится знак "минус", перед положительными числами можно ставить знак "плюс".

// Фактически этот плюс ничего не делает, но вполне является допустимым, смотрите пример:

// let a = +1;
// alert(a);

// Остаток от деления в JavaScript
// let a = 13;
// let b = 5;
// alert(a % b);

// Возведение в степень в JavaScript
// Возведите число 2 в 10-ю степень. Выведите результат на экран.
//1// let a = 2;
// let b = 10;
// alert(a ** b);

//2// let a = 2;
// alert(a ** 10);

//3// alert(2 ** 10);

//Операция возведения в степень имеет приоритет перед умножением и делением.
//1//
// let a = 3 * 2 ** 3;
// alert(a);
// tut 24

// 2
// let a = (3 * 2) ** 3;
// alert(a);
// tut 216

// 3
// let a = 3 * 2 ** (3 + 1);
// alert(a);
// tut 48

// 4
// let a = 2 ** 3 * 3;
// alert(a);
// tut 24

// 5
// let a = 3 * 2 ** 3 * 3;
// alert(a);
// tut 72

// Строки в JavaScript
// 1.Создайте строку с вашем именем и строку с вашей фамилией. Выведите эти данные на экран.
// let userName = "Ayturgan";
// let userSurname = "Kanybekova";
// console.log(userName + " " + userSurname);

// 1.Создайте переменную str и присвойте ей строку '!!!'. Выведите значение этой переменной на экран.
// let str = "!!!";
// console.log(str);

// // 2.Создайте переменную с текстом 'java' и переменную с текстом 'script'. С помощью этих переменных и операции сложения строк выведите на экран строку 'javascript'.
// let f = "java";
// let g = "script";
// console.log(f + g);

// 3.Создайте переменную с текстом 'hello' и переменную с текстом 'world'. С помощью этих переменных и операции сложения строк выведите на экран строку 'hello world'.
// let h = "hello";
// let i = "world";
// console.log(h + " " + i);

// Запишите в переменную какую-нибудь строку. Выведите на экран длину вашей строки.
// let str = "abcde";
// alert(str.length);
// alert("abcde".length);
// alert("ab de".length);

// Перепишите следующий код через вставку переменных:
// let str1 = "xxx";
// let str2 = "yyy";
// let txt = "aaa " + str1 + " bbb " + str2 + " ccc";

// let str1 = "xxx";
// let str2 = "yyy";
// let txt = `aaa ${str1} bbb ${str2} ccc`;
// console.log(txt);

// Запишите в переменную str строку, состоящую из символов 'a', 'b', 'c', причем после каждого символа, кроме последнего, должен стоять перенос строки.
// let str = `'a', 'b',
// 'c'`;
// console.log(str);

// Специальные значения в JavaScript
// В JavaScript, как и в других языках программирования, существуют ключевые слова для некоторых специальных значений. Вот они: undefined, null, true, false, NaN, Infinity, -Infinity.

// Значение undefined обозначает неопределенность. Такое значение будет у переменной, если мы объявили ее, но не записали в нее значение:

// let a;
// console.log(a); // выведет undefined
// Это значение можно присвоить переменной явно:

// let a = undefined;
// alert(a); // выведет undefined

// 1.Объявите переменную, не задавая ей значения. Выведите значение созданной переменной на экран.
// let g;
// console.log(g);

// Значение null обозначает "ничего". К примеру, мы можем присвоить переменной такое значение в знак того, что там ничего не лежит:

// let a = null;
// alert(a); // выведет null

// Присвойте переменной значение null. Выведите эту переменную на экран.
// let k = null;
// console.log(k);

// Значения true и false
// Значения true и false обозначают истину и ложь соответственно. Они используются для таких вещей, которые предполагают два варианта ответа - да или нет.

// Значение NaN
// Значение NaN (Not-A-Number) обозначает не число. Такое значение получается тогда, когда вы пытаетесь делать математические операции не с числами, а с чем-то другим. К примеру, такое значение даст попытка умножить строку на число:

// alert("abc" * 3); // выведет NaN
// Любые операции с NaN приводят к тому, что результатом все равно остается NaN:

// alert(NaN + 1); // выведет NaN

// Сделайте две строки. Перемножьте их друг на друга. Выведите результат умножения на экран.
// let str1 = "asdf";
// let str2 = "hjkl";
// console.log(str1 * str2);

// Infinity и -Infinity в JavaScript
// Значения Infinity и -Infinity обозначают соответственно бесконечность и минус бесконечность. Такие значения получаются, если какое-то число поделить на ноль - в этом случает JavaScript не выдает ошибку, как в других языках программирования, а возвращает эти значения:

// alert( 1 / 0); // выведет Infinity
// alert(-1 / 0); // выведет -Infinity
