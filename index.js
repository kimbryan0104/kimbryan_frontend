const content = document.querySelector("#content")

//loading page

window.addEventListener("load", ()=>{

    getUser();

})



function getUser(){

    //define html variable

    let html=""

    fetch("http://localhost:5000/api/members", {mode: "cors"})

    .then(response=>{

        console.log(response)

        return response.json()

    })

    .then((data)=>{

        console.log(data)

        data.forEach((element)=>{

            html += `<li>${element.first_name} ${element.last_name}</li>`

        })

        content.innerHTML = html

    })

    .catch((error)=>{

        console.log(error)

    })

}
