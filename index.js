const xhttp = new XMLHttpRequest();
xhttp.open('GET', 'https://www.freetestapi.com/api/v1/movies?limit=5'); 
xhttp.onload = () => console.log(JSON.parse(xhttp.responseText)); 
xhttp.onerror = () => console.error("Request failed."); 
xhttp.send();