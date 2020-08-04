let person = {
    name: 'Max',
    age: 28,
    job: 'Frontend',
    displayInfo: function(time) {
        console.log(this);

        // let self = this;

        // setTimeout(function() {
        //     console.log('Name: ', self.name);
        //     console.log('Age: ', self.age);
        //     console.log('Jog: ', self.job);
        // }, time);

        setTimeout(function() {
            console.log('Name: ', this.name);
            console.log('Age: ', this.age);
            console.log('Jog: ', this.job);
        }.bind(this), time);
    }
}

person.displayInfo(5000);
