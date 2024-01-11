const categories = document.querySelector('#categories'); // Вибираємо елемент ul#categories
const items = categories.querySelectorAll('.item'); // Вибираємо всі елементи li.item в межах ul#categories

console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
  const title = item.querySelector('h2').textContent; // Отримуємо текст заголовка елемента
  const elements = item.querySelectorAll('li').length; // Отримуємо кількість елементів у категорії

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elements}`);
});