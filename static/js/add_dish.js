const search = document.getElementById('addproduct');
const list = document.getElementById('products_list');
const elements = list.children;

function isCountCheck() {
    var i, len, list = document.getElementById("products");
    var count = 0;
    for (i = 0, len = inputs.length; i < len; i++) {
        if (list[i].selected){
            count+=1;
        }
    }
    return count
}



for (let i = 0, n = elements.length; i < n; i++) {
    let elem = elements[i];

    elem.addEventListener('click', (e) => {
        search.value = e.target.textContent;
        console.log(e.target.textContent);
    })
};





// При фокусе инпута показывает писок
search.addEventListener('focus', (e) => {
  list.hidden = false;
  searchFromInput(e.target.value);
});

// При расфокусировать инпута скрываем select
search.addEventListener('focusout', () => {
    changeListHidden();
});



// Добавляем эвент при нажатия на клавиши
search.addEventListener('keyup', (e) => {
  searchFromInput(e.target.value);
})

function changeSelectSize(size) {
  setTimeout(() => {
    list.size = size;
  }, 75);
}

function changeListHidden() {
    setTimeout(() =>{
        list.hidden = true;
    }, 200)
}

// Проходим по каждому элементу списка
function searchFromInput(value) {
  let size = 1;

  for (let i = 1, n = elements.length; i < n; i++) {
    let elem = elements[i];

    // Если текст элемента содержит наше строку то показываем её, в противоположном слкчае скрываем
    if (elem.textContent.toLowerCase().includes(value.toLowerCase())) {
      elem.hidden = false;
      size++;
    } else {
      elem.hidden = true;
    }
    changeSelectSize(size);
  }
}