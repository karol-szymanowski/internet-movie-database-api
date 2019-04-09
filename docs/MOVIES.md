**Movies**
----
  Fetch all movies from database.

* **URL**

  /movies

* **Method:**
  
  `GET`
  
*  **URL Params**

   **Required:**
 
   none

   **Optional:**
 
   `title=[alphanumeric]`

* **Data Params**

  none
  
* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** 
    ```json
      [{
        "id": 3,
        "title": "Game of Thrones",
        "imdb_id": "tt0944947",
        "json_data": {
          "Plot": "Nine noble families fight for control over the mythical lands of Westeros, while an ancient enemy returns after being dormant for thousands of years.",
          "Type": "series",
          "Year": "2011–",
          "Genre": "Action, Adventure, Drama, Fantasy, Romance",
          "Rated": "TV-MA",
          "Title": "Game of Thrones",
          "Actors": "Peter Dinklage, Lena Headey, Emilia Clarke, Kit Harington",
          "Awards": "Won 1 Golden Globe. Another 273 wins & 454 nominations.",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMjA5NzA5NjMwNl5BMl5BanBnXkFtZTgwNjg2OTk2NzM@._V1_SX300.jpg",
          "Writer": "David Benioff, D.B. Weiss",
          "imdbID": "tt0944947",
          "Country": "USA, UK",
          "Ratings": [{
            "Value": "9.5/10",
            "Source": "Internet Movie Database"
          }],
          "Runtime": "57 min",
          "Director": "N/A",
          "Language": "English",
          "Released": "17 Apr 2011",
          "Response": "True",
          "Metascore": "N/A",
          "imdbVotes": "1,429,496",
          "imdbRating": "9.5",
          "totalSeasons": "8"
        },
        "createdAt": "2019-04-09T22:29:15.685Z",
        "updatedAt": "2019-04-09T22:29:15.685Z"
      }]
    ```
 
* **Error Response:**

  * **Code:** 500 Internal Server Error <br />
      **Content:** `{ error: 'Something went wrong' }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/movies?title=game",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```
* **Notes:**

  none
  
----
  Search and save movie in database.

* **URL**

  /movies

* **Method:**
  
  `POST`
  
*  **URL Params**

   none

* **Data Params**

  **Required:**
  
  Headers:
  
  ```json
  { "Content-Type": "application/json" }
  ```
  
  Body:
  ```json
  { "title": "driver" }
  ```
  
  **Optional:**
  
  none
  
* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** 
    ```json
      {
        "id": 2,
        "title": "Game of Thrones",
        "imdb_id": "tt0944947",
        "json_data": {
          "Plot": "Nine noble families fight for control over the mythical lands of Westeros, while an ancient enemy returns after being dormant for thousands of years.",
          "Type": "series",
          "Year": "2011–",
          "Genre": "Action, Adventure, Drama, Fantasy, Romance",
          "Rated": "TV-MA",
          "Title": "Game of Thrones",
          "Actors": "Peter Dinklage, Lena Headey, Emilia Clarke, Kit Harington",
          "Awards": "Won 1 Golden Globe. Another 273 wins & 454 nominations.",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMjA5NzA5NjMwNl5BMl5BanBnXkFtZTgwNjg2OTk2NzM@._V1_SX300.jpg",
          "Writer": "David Benioff, D.B. Weiss",
          "imdbID": "tt0944947",
          "Country": "USA, UK",
          "Ratings": [{
              "Value": "9.5/10",
              "Source": "Internet Movie Database"
          }],
          "Runtime": "57 min",
          "Director": "N/A",
          "Language": "English",
          "Released": "17 Apr 2011",
          "Response": "True",
          "Metascore": "N/A",
          "imdbVotes": "1,429,496",
          "imdbRating": "9.5",
          "totalSeasons": "8"
        },
        "createdAt": "2019-04-09T22:21:53.086Z",
        "updatedAt": "2019-04-09T22:21:53.086Z"
      }
    ```
 
* **Error Response:**

  * **Code:** 500 Internal Server Error <br />
      **Content:** `{ error: 'Something went wrong' }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/movies",
      dataType: "json",
      contentType: 'application/json',
      type : "POST",
      data: {
        "title": "game of thrones"
      },
      success : function(r) {
        console.log(r);
      }
    });
  ```
* **Notes:**

  none
