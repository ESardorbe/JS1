function upDate(previewPic) {
    // Проверьте, срабатывает ли функция
    console.log("Функция upDate вызвана");

    // Выводим информацию о изображении в консоль для проверки
    console.log("Source: " + previewPic.src);
    console.log("Alt: " + previewPic.alt);

    // Изменяем текст и фоновое изображение элемента с id image
    let imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.innerHTML = previewPic.alt;
}

function unDo() {
    // Возвращаем исходные значения для элемента с id image
    let imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "none";
    imageDiv.innerHTML = "Наведите курсор на изображение ниже, чтобы отобразить его здесь";
}
