const createCar = (name, model) => ({name, model});

const ford = createCar('Ford', 'Fusion');
console.log(ford);

const yearfield = 'year';

const bmw = {
    name: 'BMW',
    ['model']: 'X6 Sport',
    ['yearfield']: 2018,

    logFields() {
        const {name, model, year} = this;
        console.log(name, model, year);
    }
}
console.log(bmw);
bmw.logFields();

const {year} = bmw;
console.log(year);