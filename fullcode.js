let footerContent = 
 `<div class="f-inject-modal">
   <div id="f-inject-products">
   <img src="`+ document.querySelectorAll('.product__thumb')[0].src +`" />
   <div class="f-inject-letter">
     <span> "`+ document.querySelectorAll('.product__name') + `"</span>
     <span> Preço: R$ 499,00</span>
     <span>Preço com desconto: R$ 449,10</span>
   </div>
   <div class="f-inject-input-group actions">
     <button class="f-inject-btn-close" onclick="Modal.close()">Fechar</button>
     <button class="f-inject-btn-buy">Comprar</button>
   </div>
 </div>
</div>`

let footer = document.createElement("div")
footer.classList.add('f-inject-modal-overlay')
footer.classList.add('f-inject-active')

footer.innerHTML = footerContent

stylesheet = document.createElement("style")
stylesheet.appendChild(document.createTextNode(
`
.f-inject-modal-overlay {
    width:100%;
    height: 100%;

    background-color: rgba(99, 96, 96, 0.7);

    position: fixed;
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
    padding: 2.4rem;
    width: 100%;
    height: 15%;
    margin-top: 36%;
    max-width: 1190px;

}

#f-inject-products{

    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

#f-inject-products img{
    height: 120px;
}

.f-inject-letter{
    font-family: 'Rubik';
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-right: 35%;
}

.f-inject-input-group.actions{
    margin-right: 55px;
    margin-top: 20px; 
}

.f-inject-input-group.actions button,
.f-inject-input-group.actions button {

    display: flex;
    justify-content:space-between;
    align-items:center;
    
}

.f-inject-btn-close{
    background: black;
    color:white;
    border: 2px black solid;
    border-radius:0.25rem;
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
    color:white;
    border: 2px black solid;
    border-radius:0.25rem;
    width: 80px;
    height: 40px;
    
    cursor: pointer;
    opacity: 0.9;
}

.f-inject-btn-buy:hover {
    opacity: 1;
}
`

));


document.querySelector('head').append(stylesheet)
document.querySelector('body').append(footer)