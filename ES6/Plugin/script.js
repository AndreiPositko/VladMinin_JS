class Dropdown {
    constructor(selector, options) {
        this.$el = document.querySelector(selector);
        this.items = options.items;
        

        this.$el.querySelector('.dropdown__label').textContent = this.items[0].label;

        this.$el.addEventListener('click', event => {
            if (event.target.classList.contains('dropdown__label')) {
                if(this.$el.classList.contains('open')) {
                    
                    this.close();
                } else {
                    this.open();
                }
            }
        })
    }
    open() {
        this.$el.classList.add('open');
    }
    close() {
        this.$el.classList.remove('open');
    }
}

const dropdown = new Dropdown('#dropdown', {
    items: [
        {label: 'Kiev', id: 'kv'},
        {label: 'Lviv', id: 'lv'},
        {label: 'Ternopil', id: 'trn'},
        {label: 'Kharkiv', id: 'khr'}
    ]
});