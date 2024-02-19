$.ajax({
    url: 'https://jsonplaceholder.typicode.com/users',
    dataType: 'JSON',
    method: 'GET',
    data: {},
    success: (response) => {
        for (let index = 1; index <= response.length; index++) {
            createElement(response[index].name, response[index].email);
        }
    },
    error: () => {
        console.log(error);
    },
});

let container = document.querySelector(".container")

function createElement(userName, email) {
    let newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'card')
    let h1 = document.createElement('h1');
    let h2 = document.createElement('h2');

    h1.innerHTML = userName
    h2.innerHTML = email

    newDiv.append(h1,h2)
    container.append(newDiv)
}