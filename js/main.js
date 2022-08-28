let dataGlasses = [
    { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", status: "Stocking", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
    { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", status: "Stocking", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", status: "Stocking", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", status: "Stocking", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", status: "Stocking", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", status: "Stocking", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", status: "Stocking", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", status: "Stocking", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", status: "Stocking", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];
let rendervirtual = (dataGlasses) => {
    let content = "";
    dataGlasses.map((gl) => { 
        content +=`
            <div class="col-4">
                  <img onclick="showhtml('${gl.id}')" id='${gl.id}' class="img-fluid" src='${gl.src}'>
            </div>
        `
     });
     document.getElementById("vglassesList").innerHTML = content;
}
rendervirtual(dataGlasses);

let showhtml = (id) =>{  
    dataGlasses.map((gl) => { 
        if(gl.id === id){
            let content =`
            <div class="img">
                  <img src='${gl.virtualImg}'>
            </div>
    
        `;
        document.getElementById("avatar").innerHTML = content;
        document.getElementById("glassesInfo").innerHTML = `
            <div class="sub-name">${gl.name} (${gl.color})</div>
            <button class="btn btn-danger">${gl.price}</button>
            <span style="color:green;">${gl.status}</span>
            <div class="sub-decs">${gl.description}</div>
        `
        
        
        document.querySelector(".vglasses__info").style.display = "block";
        
        




        }
        
     });
     
}





