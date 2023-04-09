console.log('Number of categories: ' + document.querySelectorAll('.item').length);
console.log('\n');

for (const elem of document.querySelectorAll('.item>h2')) {
    console.log('Category: ' + elem.innerText);
    console.log('Elements: ' + elem.nextElementSibling.querySelectorAll('li').length);
    console.log('\n');
    }