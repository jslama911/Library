/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
   
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    
  }
var cardNum = 3;

//   function to add a new book 
    function addBook(){
        document.querySelector('#cards').innerHTML += `
        <div id="card" class="card${cardNum}">
            <div id="author">
                <p>Author's name: ${document.querySelector('.author').value}</p>
            </div>
            <div id="title">
                <p>Title: ${document.querySelector('.title').value}</p>
            </div>
            <div id="Pages">
                <p>Pages: ${document.querySelector('.pages').value}</p>
            </div>
            <div id="rating">
                <p>Rating: ${document.querySelector('.rating').value}/10</p>
            </div>
            <div id="description">
                <p>Description: ${document.querySelector('.description').value}</p>
            </div>
            <div id="delete">
                <button id="delete" onclick="deleteBook(${cardNum})">Delete</button>
                </div>
        </div>
        `

        cardNum += 1;
        document.querySelector('.author').value = '';
        document.querySelector('.title').value = '';
        document.querySelector('.pages').value = '';
        document.querySelector('.rating').value = '';
        document.querySelector('.description').value = '';
    }

//   function to delete a book based on the class name
    function deleteBook(a){
        document.querySelector(`.card${a}`).remove();
    }

       