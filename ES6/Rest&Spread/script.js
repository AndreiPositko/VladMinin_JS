const form = document.querySelector('form');

form.addEventListener('submit', event => {
    event.preventDefault();

    const title = form.title.value;
    const text = form.text.value;
    const descr = form.description.value;

    // saveForm({title, text, descr});
    saveForm(title, text, descr);
})

//Spread
// function saveForm(data) {
//     // const {title, text, descr} = data;
//     const formData = {
//         date: new Date().toLocaleDateString(),
//         ...data
//     }
//     console.log('Form Date: ', formData);
// }

//Rest
function saveForm(...args) {
    console.log('Args', args);
    const [title, text, descr] = args;
    const formData = {
        date: new Date().toLocaleDateString(),
        title, text, descr
    }
    console.log('Form Date: ', formData);
}