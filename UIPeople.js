class UIPeople {

    addPeople(people) {
        const card = document.getElementById('people')
        const element = document.createElement('div')
        element.innerHTML = `<div class="card mb-2 border ">
        <div class="card-body">
            <strong> Usuario: </strong>${people.name}
            <strong> Nombre: </strong>${people.firstName}
            <strong> Apellido: </strong>${people.LastName}
            <strong> Edad: </strong>${people.age}
        </div>
        <input id="delete" name="delete" type="button" class="btn btn-danger" value="Eliminar"/>
        </div>        `
        card.appendChild(element)
        document.getElementById('people-form').reset()
        this.showMessage('Added User', 'primary')
    }


    deletePeople(e) {
        console.log(e.name)
        if (e.name === "delete") {
            this.showMessage('Deleted User','danger')
            return e.parentElement.parentElement.remove()
        }
        

    }

    showMessage(message, ccsClass){
        const mess = document.createElement('div')
        mess.className=`alert alert-${ccsClass} mt-2`
        mess.appendChild(document.createTextNode(message))
        const container = document.querySelector('.container')
        const app = document.querySelector('#App')
        container.insertBefore(mess,app)
        setTimeout(function(){
            document.querySelector('.alert').remove()
            
        },3000)
    }
}