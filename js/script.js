// Task 1 - створити форму з інпутами для name та age.
//          При відправці форми записати об'єкт в localstorage

const form1 = document.forms.form1;

form1.addEventListener('submit', function (e) {
    e.preventDefault();

    const valueInputs = {name: this.name.value, age: this.age.value};

    localStorage.setItem('user', JSON.stringify(valueInputs));
});

// Task 2 - створити форму з інпутами для model,type та volume автівки.
//          при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

const form2 = document.forms.form2;
let cars = [];

form2.addEventListener('submit', function (e) {
    e.preventDefault();

    const car = {model: this.model.value, type: this.type.value, volume: this.volume.value};
    cars.push(car);

    localStorage.setItem('cars', JSON.stringify(cars));
});