// custome ARRAY class

class MyArray {
    constructor() {
        this.lenght = {}
        this.data = {}
    }

    push(item) {
        this.data[this.lenght] = item
        this.lenght++
        return this.lenght
    }
}

const myNewArray = new MyArray()
myNewArray.push('apple')
myNewArray.push('banana')
myNewArray.push('orange')
myNewArray.push('grape')

console.log(myNewArray);