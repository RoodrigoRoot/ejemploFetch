

window.addEventListener('load', async function(){
    let response = await this.fetch("http://localhost:3000/users")
    const data = await response.json()
    const catalog = this.document.getElementById('App')
    
    data.map( (valor) =>{
        const element = this.document.createElement('div')
        element.innerHTML= `<div class="d-inline"> 
        <div class="card border-dark" style="max-width: 18rem;">
        <div class="card-header">${valor.username}</div>
        <div class="card-body text-dark">
        <h5 class="card-title">${valor.firtName}</h5>
        <p class="card-text">${valor.lastName}</p>
        <div class="card-footer bg-transparent border-success">${valor.age}</div>
        </div>
        </div>`       
        catalog.appendChild(element)
        
        

    }    
    )
    
    
})



window.addEventListener('load', async function(){
    let response = await this.fetch("http://localhost:3000/users")
    const data = await response.json()
    const catalog = this.document.getElementById('App')
    const element = this.document.createElement('div')


})