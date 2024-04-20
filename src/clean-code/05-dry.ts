type Size = 'S' | 'M' | 'L' | 'XL';

class ProductNODRY {
  constructor(
    public name: string,
    public price: number,
    public size: Size,
  ) {}

  toString() {
    // No DRY
    if (this.name.length <= 0) throw new Error('The name is required');
    if (this.price <= 0) throw new Error('The price is required');
    if (this.size.length <= 0) throw new Error('The size is required');

    return `Product: ${this.name} - Price: ${this.price} - Size: ${this.size}`;
  }
}

(() => {
  const bluePants = new ProductNODRY('blue pants', 100, 'M');
  console.log(bluePants.toString());
})();


class Product {
  constructor(
    public name: string,
    public price: number,
    public size: Size,
  ) {}

  isProductReady(): boolean {
      for (const key in this) {
        if (typeof this[key] === 'string' && this[key].length <= 0) {
          throw new Error(`The ${key} is required`);
        }

        if (typeof this[key] === 'number' && this[key] <= 0) {
          throw new Error(`The ${key} is required`)
        }
      }

      return true;
  }

  toString() {
    if (!this.isProductReady()) return;
    return `Product: ${this.name} - Price: ${this.price} - Size: ${this.size}`;
  }
}

(() => {
  const bluePants = new Product('blue pants', 100, 'M');
  console.log(bluePants.toString());
})();