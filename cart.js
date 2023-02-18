'use strict';

const cart = {
  count: 0,
  items: [],
  discount: 1,

  set setDiscount(promocode) {
    if (promocode === 'METHED') {
      this.discount = 0.15;
    }
    if (promocode === 'NEWYEAR') {
      this.discount = 0.21;
    }
  },

  get totalPrice() {
    return this.calculateItemPrice();
  },
  calculateItemPrice() {
    const res = this.items.reduce((acc, item) => acc + item.price * item.amount, 0);
    return res - res * this.discount;
  },
  add(item, price, amount = 1) {
    this.items.push({item, price, amount});
    this.increaseCount(amount);
  },
  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },
  print() {
    const printOut = JSON.stringify(this.items);
    return printOut;
  },
  increaseCount(num) {
    return (this.count += num);
  },
};
cart.setDiscount = 'NEWYEAR';
cart.add('товар 1', 231, 5);
cart.add('товар 2', 140, 2);
cart.add('товар 3', 265, 3);
cart.add('товар 4', 324, 4);

console.log(cart.print());
console.log(cart.items);
console.log(cart.count);
console.log(cart.totalPrice);
