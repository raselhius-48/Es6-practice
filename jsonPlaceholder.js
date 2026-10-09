// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response => response.json())
//     .then(json => console.log(json))


// json type 2


function displayuser1() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(D => displaypost(D))
}

function displaypost(data) {
    console.log(data)
}


// json type 3 
function displayuser2() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayshowr(data))
}

function displayshowr(bc) {
    console.log(bc)
}