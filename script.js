const myLibrary = []



//Starting Books
TWOK = new Book("The Way Of Kings", "Brandon Sanderson", 1023, true)
WOR = new Book("Words of Radiance", "Brandon Sanderson", 1200, true)

addBooksToLibrary(TWOK, WOR)

displayBooks()

//Define the form
const form = document.querySelector("form")
const bookName = document.querySelector("#book_name")
const author = document.querySelector("#author")
const pages = document.querySelector("#pages")
const read = document.querySelector("#read")
//Open form
const formDialog = document.querySelector("dialog")
const newBookBtn = document.querySelector(".new-book-btn")
newBookBtn.addEventListener('click', (event) => {
    event.preventDefault()
    formDialog.showModal()
})

//Close form and add the book
const submitBtn = document.querySelector("button[type = 'submit']")
submitBtn.addEventListener('click', (event) => {
    event.preventDefault()
    const newBook = new Book(bookName.value, author.value, pages.value, read.value)
    addBookToLibrary(newBook)
    displayBooks()
    formDialog.close()
    form.reset()
})

