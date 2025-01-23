document.addEventListener("DOMContentLoaded", () => {
    const movieContainer = document.getElementById("movieContainer");
  
    function loadMovies() {
      const baseUrl = "https://www.freetestapi.com/api/v1/movies";
  
     
      const xhttp = new XMLHttpRequest();
      xhttp.open("GET", baseUrl);
  
      xhttp.onload = () => {
        if (xhttp.status === 200) {
          try {
            const movies = JSON.parse(xhttp.responseText);
  
           
            movies.forEach((movie) => {
              const movieBox = document.createElement("div");
              movieBox.classList.add("movie");
  
              
              let movieHTML = `<h2>${movie.title || "No Title Available"}</h2>`;
              movieHTML += "<ul>";
  
              Object.keys(movie).forEach((key) => {
                if (key !== "title") {
                  const formattedKey =
                    key.charAt(0).toUpperCase() + key.slice(1);
                  movieHTML += `<li><strong>${formattedKey}:</strong> ${
                    movie[key] || "N/A"
                  }</li>`;
                }
              });
  
              movieHTML += "</ul>";
  
              movieBox.innerHTML = movieHTML;
  
             
              movieContainer.appendChild(movieBox);
            });
          } catch (error) {
            console.error("JSON Parse Error:", error);
          }
        } else {
          console.error(`Failed to fetch movie data`);
        }
      };
  
      xhttp.onerror = () => {
        console.error("Request failed while fetching movies");
      };
  
      xhttp.send();
    }
  
    loadMovies();
  });
  