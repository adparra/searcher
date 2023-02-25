let urlJSON= 'https://raw.githubusercontent.com/Bootcamp-Espol/FSD02/main/S03D03/clase/recursos/products.json'
let urlXML= 'https://raw.githubusercontent.com/Bootcamp-Espol/FSD02/main/S03D03/clase/recursos/products.xml'

let loadProducts= async (myURLJ,myURLX) =>{
    try{
        let responseJ= await fetch(myURLJ);
        let json= await responseJ.json();
        let responseX= await fetch(myURLX);
        let resultsX= await responseX.text();
        let xml= (new DOMParser()).parseFromString(resultsX, 'application/xml');
        
        for (const element of json){
            let message=`<div class="col-xl-3 col-md-6 mb-xl-0 mb-4 mt-4">
              <div class="card card-blog card-plain">
                <div class="card-header p-0 mt-n4 mx-3">
                  <a class="d-block shadow-xl border-radius-xl">
                    <img src="${element.src}" alt="${element.name}" class="img-fluid shadow border-radius-xl">
                  </a>
                </div>
                <div class="card-body p-3">
                  <p class="mb-0 text-sm">${element.type}</p>
                  <a href="javascript:;">
                    <h5>
                      ${element.name}
                    </h5>
                  </a>
                  <p class="mb-4 text-sm">
                    <b>Price: </b> $ ${element.price}
                  </p>
                </div>
              </div>
            </div>`
            let elementProduct= document.getElementsByClassName("row");
            console.log(elementProduct);
            elementProduct[0].innerHTML+=message;
        }
        let arrProductos= xml.getElementsByTagName("product");
        for (const element of arrProductos){
            element.getElementsByTagName("");
        }
        

    }
    catch(error){
        console.log(error);
    }
}

loadProducts(urlJSON,urlXML);