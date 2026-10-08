// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response => response.json())
//     .then(json => console.log(json))


// type 2


function displayuser() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(D => displayuser(D))

}

function displayuser(data) {
    console.log(data)
}
