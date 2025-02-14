const listOfCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${listOfCategories.length}`);

listOfCategories.forEach(category => {
    const categoryName = category.querySelector('h2');
    console.log('Category:', categoryName.textContent);

    const categoryList = category.querySelectorAll('li');
    console.log('Elements:', categoryList.length);
});
