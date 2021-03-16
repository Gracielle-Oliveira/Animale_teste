//Corpo do HTML//

let footerContent =

`<div class="f-inject-modal">
   <div id="f-inject-products">
   <img src="` + document.querySelectorAll(".product__thumb")[0].src + `" />
   
   <div class="f-inject-letter">
     <span> ` + document.querySelector(".productName").innerText + `</span>
     <span> ` + document.querySelector(".price-list-price").innerText + `</span>
     <span> ` + document.querySelector(".price-best-price").innerText + `</span>
    </div>
    
    <div class="f-inject-input-group actions">
     <button class="f-inject-btn-close" onclick="Modal.close()"> X </button>
     <p> POR FAVOR, SELECIONE UM TAMANHO </p>
     <button class="f-inject-btn-buy" onclick="addtocart()">Adicionar ao carrinho</button>
    </div>
 </div>
</div>`;

let footer = document.createElement("div");
footer.classList.add("f-inject-modal-overlay");
footer.classList.add("f-inject-active");

//Ativar o html//

footer.innerHTML = footerContent;

//Criação do estilo//
stylesheet = document.createElement("style");
stylesheet.appendChild(
  document.createTextNode(
`
.f-inject-modal-overlay {
    width:100%;
    height: 100%;
    z-index: 99999999999;
   
    top: 0;
    display: flex;
    align-items: center;
    justify-content:center;

    opacity: 0;
    visibility: hidden;
}


.f-inject-modal-overlay.f-inject-active {
    opacity: 1;
    visibility: visible;
}

.f-inject-modal{
    background: #f0f2f5;
    padding: 1rem;
    width: 100%;   
}

#f-inject-products{

    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

#f-inject-products img{
    height: 120px;
    margin-left: 80px;
    margin-right: -10%;
}

.f-inject-letter {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-right: 20%;
    font-size: initial;
    line-height: 1.3;
}


.f-inject-input-group.actions{
    margin-right: 55px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.f-inject-input-group.actions p{
    color: red;
    align-items: center;
}
.f-inject-btn-close{
    
    color: black;
    margin-left: 105%;
    margin-bottom: -10%;
    padding-bottom: 60px;
    width: 80px;
    height: 40px;

    cursor: pointer;
    opacity: 0.9;
}

.f-inject-btn-close:hover {
    opacity: 1;
}

.f-inject-btn-buy{
    background: black;
    color: white;
    border: 2px black solid;
    border-radius: 0.25rem;
    width: 100%;
    height: 40px;
    margin-top: 5%;

    cursor: pointer;
    opacity: 0.9;
}

.f-inject-btn-buy:hover {
    opacity: 1;
}
`
  )
);

//Açoes dos botões//
let Modal = {
  close() {
    document
      .querySelector(".f-inject-modal-overlay")
      .classList.remove("f-inject-active");
  },
};

function addtocart() {
  document.querySelector(".product__add-to-cart").click();
  Modal.close();
}

//Incrementação do HTML e CSS//
document.querySelector("head").append(stylesheet);
document.querySelector("body").append(footer);
