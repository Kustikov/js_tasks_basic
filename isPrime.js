const isPrime = (n) => {
let divisor = 2;
let result;
if (n <= 1) {
	return false;
};
if (n > 1) {
	while (result !== 0 && divisor < n) {
		result = n % divisor;
		console.log(result + ' это результат')
		console.log(divisor + ' divisor до')
		divisor++;
		console.log(divisor + ' divisor после')
}
if (result === 0) {
	return false;
	} else  {
	return true;
	}
} 
};
isPrime(6)

/*
Простое число — натуральное (целое положительное) число (больше единицы), имеющее ровно два различных натуральных делителя — единицу и самого себя.

isPrime.js
Реализуйте и экспортируйте по умолчанию функцию isPrime определяющую, является ли число простым.
Пример:

isPrime(1); // false
isPrime(7); // true
isPrime(10); // false
*/