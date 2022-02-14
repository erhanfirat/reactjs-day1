
// ARROW FUNCTIONS

const squareOf = function (number) {
    return number * number;
}

const squareOfArrow = (number) => {
    return number * number;
}

const squareOfArrowShort = number => number * number;


// console.log(squareOf(5));
// console.log(squareOfArrow(5));
// console.log(squareOfArrowShort(5));











// ARROW FUNCTIONS: THIS***


const user = {
    name: "Ahmet",
    logName: function () {
        // çağıran objenin scope unu alır | scope of the caller object
        console.log(this.name);
    },
    logNameArrow: () => {
        // tanımlandığı esnadaki scope u alır | scope that defined function
        console.log(this.name);
    }
}

// user.logName();
// const nameLogger = user.logName;
// nameLogger();
// user.logNameArrow();


class Counter {
    constructor(start, increment, wait) {
        this.count = start;
        this.p = document.createElement("p");
        this.p.innerText = this.count;
        document.body.appendChild(this.p);

        // anonymous function | inline function
        setInterval(function () {
            // console.log(this);
            this.count += increment;
            this.p.innerText = this.count;
        }, wait);

        // anonymous function
        // setInterval(() => {
        //     console.log(this);
        //     this.count += increment;
        //     this.p.innerText = this.count;
        // }, wait);
    }
}

// const counter1 = new Counter(0, 10, 500);
// const counter2 = new Counter(100, 5, 1000);
// const counter3 = new Counter(600, 2, 1500);


