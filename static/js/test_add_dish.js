const search = document.getElementById('addproduct')


// Когда начинаем вводить значения
search.addEventListener('keyup', (e) => {
    if (e.key != 'Enter'){ 
    matchListProduct(e.target.value); 
    }
});


function matchListProduct(value){
    products = document.getElementById('products_list')
    for (let i = 0, n = products.children.length; i < n; i++){
        if (products.children[i].textContent.toLowerCase().includes(value.toLowerCase())){
            products.children[i].hidden = false;
        }else {
            products.children[i].hidden = true;
        }
    }
}


// Когда нажимаем enter (значение ввежено полностью)
search.addEventListener('keypress', (e) => {
    if (e.key = 'Enter'){
        for (let i = 0, n=document.getElementById('products_list').children.length; i < n; i++){
            if (document.getElementById('products_list').children[i].textContent.toLowerCase() === e.target.value.toLowerCase()){
                document.getElementById('products_list').children[i].remove();
                markProduct(e.target.value, true);
                createProduct(e.target.value);
                search.value = '';                
            }
        
    }
}});

function markProduct(value, sel){
    for (let i=0, n = document.getElementById('products').children.length; i<n; i++){
        if (document.getElementById('products').children[i].textContent.toLowerCase() === value.toLowerCase()){
            document.getElementById('products').children[i].selected = sel;
            return 0;
        }
    }
};

function createProduct(value){
    const blockProduct = document.getElementById('product_display');
    const elem = document.createElement('div');
    const clname = 'list' + value;
    const first_elem = document.createElement('div');
    const last_elem = document.createElement('div');
    const upperValue = value.charAt(0).toUpperCase() + value.slice(1);
    elem.className = "block_product";
    first_elem.className = "name_product";
    last_elem.className = "delete_product";
    first_elem.textContent = upperValue;
    last_elem.textContent = 'X';
    last_elem.addEventListener('click', (e) => {
        deleteProductEvent(e);
    });
    elem.appendChild(first_elem);
    elem.appendChild(last_elem);
    blockProduct.appendChild(elem);
};

// Добавляем обрвботчики для элементов списка
function listProductsEvent() {
    for (i = 0, n = document.getElementById('products_list').children.length; i < n; i++){
        let elem = document.getElementById('products_list').children[i];
        elem.addEventListener('click', (e) => {
            markProduct(e.target.textContent, true);
            createProduct(e.target.textContent);
            search.value = '';
            elem.remove();

        })
    }
};

// Обработчики для удаления продуктов из списка
function deleteProductEvent(btn){
    elem = document.createElement('li')
    prevElem = btn.target.previousElementSibling;
    elem.textContent = prevElem.textContent;
    elem.addEventListener('click', (e) => {
        markProduct(e.target.textContent, true);
        createProduct(e.target.textContent);
        search.value = '';
        e.target.remove();
    })
    markProduct(prevElem.textContent, false)
    document.getElementById('products_list').appendChild(elem)
    btn.target.parentElement.remove();
};


listProductsEvent()

