# NodeFirstApp

###Example save data
var bodyJSON = JSON.stringify({
"first_name": "Oleg",
"last_name": "Sokolov",
"age": "25"
});
fetch("http://localhost:8080/save", {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: bodyJSON}).then((response) => {
    if (response.ok){
        response.json().then((data) => {
            console.log(data);
        })
    } else {
    	console.log(response.statusText);
    }
});
