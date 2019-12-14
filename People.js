class People {
    constructor(name, firstName, LastName, age) {
        this.name = name
        this.firstName = firstName
        this.LastName = LastName
        this.age = age
        
    }
    
   async senData(){
        
        const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
        method:'POST',
        body:JSON.stringify({
            title:this.name,
            body:this.firstName,
            useId:this.age
        }),
        headers:{
            "Content-type": "application/json; charset=UTF-8"
        }

        })
        
        return await response.ok
    }

}
