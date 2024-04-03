//Keep track of the index of the book in the library

function Book(name, author, pages, read){
    this.name = name
    this.author = author
    this.pages = pages
    this.read = read
    this.index = 0
    this.remove = () => {
        myLibrary.splice(this.index, 1)
        refreshIndices()
        displayBooks()
    }
}

//Reassign book indices to ensure consistency when books are removed/added
function refreshIndices(){
    myLibrary.forEach((book) => {
        book.index = myLibrary.indexOf(book)
    })
}

function addBookToLibrary(book){
    if (myLibrary.indexOf(book) != -1){
        return "Already In Library!"
    }
    myLibrary.push(book)

    refreshIndices()
    return "Successfully Added"
}   

function addBooksToLibrary(...books){
    const booksToAdd = new Array(...books)
    booksToAdd.forEach((book) => addBookToLibrary(book))
}

const display = document.querySelector(".book-display")


function displayBooks(){
    display.innerHTML = ''
    myLibrary.forEach((book) =>{
    const displayCell = document.createElement('div')
    const displayHeader = document.createElement('h2')
    const displayBody = document.createElement('p')
    const readStatus = document.createElement('p')
    const removeBtn = document.createElement('button')
    //For manipulating DOM

    function addDisplayCell(){
        
        display.appendChild(displayCell)
    }

    function addDisplayHeader(book){
        
        displayHeader.textContent = `${book.name} by ${book.author}`
        displayCell.appendChild(displayHeader)
    }

    function addDisplayBody(book){
        
        displayBody.textContent = `${book.pages} pages`
        displayCell.appendChild(displayBody)
    }

    function addReadStatus(book){
        
        if (book.read){
            readStatus.textContent = "Book has been read!"
        }
        else{
            readStatus.textcontent = "Book has not been read!"
        }
        displayCell.appendChild(readStatus)
    }
    function addRemoveButton(){
        removeBtn.textContent = 'Remove Book'
        removeBtn.addEventListener('click', ()=>{
            book.remove()
        })
        displayCell.appendChild(removeBtn)
    }
    //End of DOM manipulation
        addDisplayCell()
        
        addDisplayHeader(book)

        addDisplayBody(book)

        addReadStatus(book)

        addRemoveButton()
    })}
