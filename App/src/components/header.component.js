import {
    Component
} from '../core/component';


export class HeaderComponent extends Component {
    constructor(id) {
        super(id);
    }

    init() {
        let btn = this.$el.querySelector('.js-header-start');
        btn.addEventListener('click', buttonHandler.bind(this));
    }
}

function buttonHandler() {
    
    this.$el.classList.add('hide');
    console.log(this.$el);
}