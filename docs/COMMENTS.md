**Comments**
----
  Fetch all comments from database.

* **URL**

  /comments

* **Method:**
  
  `GET`
  
*  **URL Params**

   **Required:**
 
   none

   **Optional:**
 
   `id=[integer]` - movie id

* **Data Params**

  none
  
* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** 
    ```json
      [{
        "id": 1,
        "movie_id": 1,
        "comment": "comment1",
        "createdAt": "1999-01-08T00:00:00.000Z",
        "updatedAt": "1999-01-08T00:00:00.000Z"
      }, {
        "id": 2,
        "movie_id": 2,
        "comment": "comment2",
        "createdAt": "1999-01-08T00:00:00.000Z",
        "updatedAt": "1999-01-08T00:00:00.000Z"
      }]
    ```
 
* **Error Response:**

  * **Code:** 500 Internal Server Error <br />
      **Content:** `{ error: 'Something went wrong' }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/comments?id=2",
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
  Add comment.

* **URL**

  /comments

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
  { 
    "ID": 1,
    "comment": "comment1"
  }
  ```
  
  **Optional:**
  
  none
  
* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
      "id": 1,
      "movie_id": 1,
      "comment": "comment1",
      "createdAt": "2019-04-09T22:46:05.752Z",
      "updatedAt": "2019-04-09T22:46:05.752Z"
    }
    ```
 
* **Error Response:**

  * **Code:** 500 Internal Server Error <br />
      **Content:** `{ error: 'Something went wrong' }`
      
  * **Code:** 400 Bad Request <br />
      **Content:** `{ error: 'Movie id doesn't exists' }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/comments",
      dataType: "json",
      contentType: 'application/json',
      type : "POST",
      data: {
        "ID": 1,
        "comment": "comment1"
      },
      success : function(r) {
        console.log(r);
      }
    });
  ```
* **Notes:**

  none
