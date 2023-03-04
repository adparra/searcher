let urlJSON= 'https://raw.githubusercontent.com/Bootcamp-Espol/Datos/main/products.json'
let urlXML= 'https://raw.githubusercontent.com/Bootcamp-Espol/Datos/main/products.xml'

let loadProducts= async (myURLJ,myURLX) =>{
    try{
        let responseJ= await fetch(myURLJ);
        let json= await responseJ.json();
        let responseX= await fetch(myURLX);
        let resultsX= await responseX.text();
        let xml= (new DOMParser()).parseFromString(resultsX, 'application/xml');
        
        cargarJSON(json);
        cargarXML(xml);

        let element = document.getElementById('filter');
        element.addEventListener('click', (event) => {
          let filtro = document.getElementById("text").value; 
          excludeJSON(json,filtro);
          excludeXML(xml,filtro);
        });
    }
    catch(error){
        console.log(error);
    }
}

function cargarJSON(json) {
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
      elementProduct[3].innerHTML+=message;
  }
}

function excludeJSON(json,filter){
  document.getElementsByClassName("row")[3].textContent=''; 
  //se utiliza textContent ya que segun la documentación es mas rapido que usar innerHTML
  for (const element of json){
    if(filter==element.name || filter==element.type || filter==''){
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
      elementProduct[3].innerHTML+=message;
    }
  }
}

function cargarXML(xml) {
  let arrProductos= xml.getElementsByTagName("product");
    for (const element of arrProductos){
      let namexml=element.getElementsByTagName("name")[0].innerHTML;
      let srcxml=element.getElementsByTagName("src")[0].innerHTML;
      let typexml=element.getElementsByTagName("type")[0].innerHTML;
      let pricexml=element.getElementsByTagName("price")[0].innerHTML;
      let message=`<div class="col-xl-3 col-md-6 mb-xl-0 mb-4 mt-4">
                <div class="card card-blog card-plain">
                  <div class="card-header p-0 mt-n4 mx-3">
                    <a class="d-block shadow-xl border-radius-xl">
                      <img src="${srcxml}" alt="${namexml}" class="img-fluid shadow border-radius-xl">
                    </a>
                  </div>
                  <div class="card-body p-3">
                    <p class="mb-0 text-sm">${typexml}</p>
                    <a href="javascript:;">
                      <h5>
                        ${namexml}
                      </h5>
                    </a>
                    <p class="mb-4 text-sm">
                      <b>Price: </b> $ ${pricexml}
                    </p>
                  </div>
                </div>
              </div>`
        let elementProduct= document.getElementsByClassName("row");
        elementProduct[3].innerHTML+=message;
    }
}

function excludeXML (xml,filter){
  let arrProductos= xml.getElementsByTagName("product");
    for (const element of arrProductos){
      let namexml=element.getElementsByTagName("name")[0].innerHTML;
      let srcxml=element.getElementsByTagName("src")[0].innerHTML;
      let typexml=element.getElementsByTagName("type")[0].innerHTML;
      let pricexml=element.getElementsByTagName("price")[0].innerHTML;
      if (filter==namexml || filter==typexml || filter==''){
        let message=`<div class="col-xl-3 col-md-6 mb-xl-0 mb-4 mt-4">
                <div class="card card-blog card-plain">
                  <div class="card-header p-0 mt-n4 mx-3">
                    <a class="d-block shadow-xl border-radius-xl">
                      <img src="${srcxml}" alt="${namexml}" class="img-fluid shadow border-radius-xl">
                    </a>
                  </div>
                  <div class="card-body p-3">
                    <p class="mb-0 text-sm">${typexml}</p>
                    <a href="javascript:;">
                      <h5>
                        ${namexml}
                      </h5>
                    </a>
                    <p class="mb-4 text-sm">
                      <b>Price: </b> $ ${pricexml}
                    </p>
                  </div>
                </div>
              </div>`
        let elementProduct= document.getElementsByClassName("row");
        elementProduct[3].innerHTML+=message;
      }}
}

loadProducts(urlJSON,urlXML);