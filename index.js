
// class Product{
//     constructor(name, price, year){
//         this.name = name
//         this.price = price
//         this.year = year
//     }
// }

// class UI{
//     addProduct(product){
//         const productlist = document.getElementById('product-list')
//         const element = document.createElement('div')
//         element.innerHTML=`
//         <div class = "card text-center mb-4"> 
//         <div class = "card-body">
//             <strong>Product  </strong> ${product.name}
//             <strong>Precio </strong> ${product.price}
//             <strong>Año  </strong> ${product.year}
//             <a class ="btn btn-danger" name="delete">Delete </a>
//         </div>
//         </div>
//         `
//         productlist.appendChild(element)
//         this.resetForm()
//     }

//     resetForm(){
//         document.getElementById('product-form').reset()
//     }

//     deleteProduct(element){
//         if(element.name === 'delete'){
//             element.parentElement.parentElement.parentElement.remove()
//         }
//         this.showMessage('Product Deleted', 'danger')

//     }

//     showMessage(message, ccsClass){
//         const div = document.createElement('div')
//         div.className = `alert alert-${ccsClass} mt-2`
//         div.appendChild(document.createTextNode(message))
//         //mostrando en el DOM
//         const container = document.querySelector('.container')
//         const app = document.querySelector('#App')
//         container.insertBefore(div,app)
//         setTimeout(function(){
//            document.querySelector('.alert').remove()
//         },2000
//         )

//     }
// }

// document.getElementById('product-form').addEventListener('submit', function(e){
//     e.preventDefault()
//     const name = document.getElementById('name').value
//     const price = document.getElementById('price').value
//     const year = document.getElementById('year').value

//     const product =  new Product(name, price, year)
//     const ui = new UI()
//     if(name === '' || price==='' || year === ''){
//         return ui.showMessage('Complete Fields', 'info')
//     }
//     ui.addProduct(product)
//     ui.showMessage("Product added succesfully","success")

// })

// document.getElementById('product-list').addEventListener('click', function(e){
//     const ui = new UI()
//     ui.deleteProduct(e.target)

// })

function createUSer () {
    e.preventDefault()
    const username = document.getElementById('username').value
    const firts = document.getElementById('firstname').value
    const last = document.getElementById('lastname').value
    const age = document.getElementById('age').value

    people = new People(username, firts, last, age)
    if( people.senData()){
    uipeople = new UIPeople()
    uipeople.addPeople(people)
    }else{
        uipeople.showMessage("Could not create user","danger")
    }

}
//document.getElementById('people-form').addEventListener('submit', createUSer())
 
document.getElementById('people-form').addEventListener('submit', function (e) {
    e.preventDefault()
    const username = document.getElementById('username').value
    const firts = document.getElementById('firstname').value
    const last = document.getElementById('lastname').value
    const age = document.getElementById('age').value

    people = new People(username, firts, last, age)
    if( people.senData()){
    uipeople = new UIPeople()
    uipeople.addPeople(people)
    }else{
        uipeople.showMessage("Could not create user","danger")
    }

})

document.getElementById('people').addEventListener('click', function (e) {
    uipeople = new UIPeople()
    uipeople.deletePeople(e.target)
    
    
})