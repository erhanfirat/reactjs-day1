class House {
    constructor(address, floors = 1) {
        this.address = address;
        this.floors = floors;
    }
    getFloors() {
        return this.floors;
    }
}

let myHouse = new House("Bağlıca Mermeroğluı Cad. No: 66/66", 1);
// console.log("house floor is ", myHouse.getFloors());



class Office extends House {
    getAddress() {
        return this.address;
    }
}

const myOffice = new Office("Office cad. Sincan No: 1234", 4);
// console.log("office address is ", myOffice.getAddress());