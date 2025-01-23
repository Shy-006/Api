document.addEventListener("DOMContentLoaded", () => {
    const movieContainer = document.getElementById("movieContainer");
  
    function loadMovies() {
        const randomId = Math.floor(Math.random() * 6) + 1;
        const url = `https://www.freetestapi.com/api/v1/movies/${randomId}`;
  
        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", url);
  
        xhttp.onload = () => {
            if (xhttp.status === 200) {
                try {
                    const response = JSON.parse(xhttp.responseText);
  
                    
                    let contentHTML = `<h2>${response.title || "No Title Available"}</h2>`;
                    contentHTML += "<ul>";
  
                    Object.keys(response).forEach((key) => {
                        if (key !== "title") { 
                            const formattedKey = key.charAt(0).toUpperCase() + key.slice(1);
                            contentHTML += `<li><strong>${formattedKey}:</strong> ${response[key] || "N/A"}</li>`;
                        }
                    });
  
                    contentHTML += "</ul>";
  
                    
                    movieContainer.innerHTML = contentHTML;
                } catch (error) {
                    movieContainer.innerHTML = "<p>Error parsing movie data.</p>";// Fetch and display movies only once
                    console.error("JSON Parse Error:", error);
                }
            } else {
                movieContainer.innerHTML = "<p>Failed to fetch movie data.</p>";
            }
        };
  
        xhttp.onerror = () => {
            movieContainer.innerHTML = "<p>Request failed. Please try again later.</p>";
            console.error("Request Error.");
        };
  
        xhttp.send();
    }
  
    
    loadMovies();
  });