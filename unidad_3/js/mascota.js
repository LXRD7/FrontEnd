class Pet {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    confirm() {
        return (
            this.name +
            "has been succesfully registered as " +
            this.constructor.name.toLowerCase() +
            " - " +
            this.sound
        );
    }
} // end class Pet

//********************************************************************************************************************

class Dog extends Pet {
    constructor(name, trick) {
        super(name, "Woof! Woof!");
        this.trick = trick;
    }

    confirm() {
        return super.confirm() + "<br> Favorite trick: " + this.trick;
    }
} // end class Dog

//********************************************************************************************************************

class Hedgehog extends Pet {
    constructor(name) {
        super(name, "snuffle, click, purr");
    }
} // end class Hedgehog

//********************************************************************************************************************

function adjustForm(form) {
    if (form.elements["petType"].value == "dog") {
        document.getElementById("dog-more-info").style.display = "table-cell";
    } else {
        document.getElementById("dog-more-info").style.display = "none";
    }
}

function register(form) {
    var name;
    var trick;
    var pet;

    if (!form.checkValidity()) {
        document.getElementById("message").innerHTML = "You must enter values for all fields.";
    } else {
        name = form.element["name"].value;
        if (form.elements["petType"].value == "dog") {
            trick = form.elements["trick"].value;
            pet = new Dog(name, trick);
        } else {
            pet = new Hedgehog(name);
        }
        document.getElementById("message").innerHTML = pet.confirm();   
    }
}
