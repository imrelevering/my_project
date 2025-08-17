const button = document.querySelector('button');

button.addEventListener('click', function() {
    // Your code here
    document.querySelector('h1').innerText = "t00t";
    console.log('Button was clicked!');
});

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched data:', data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });