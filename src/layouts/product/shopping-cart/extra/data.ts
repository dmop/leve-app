import { ImageSourcePropType } from 'react-native';

export class Product {

  constructor(readonly id: number,
              readonly title: string,
              readonly subtitle: string,
              readonly image: ImageSourcePropType,
              readonly price: number,
              readonly amount: number) {
  }

  get formattedPrice(): string {
    return `$${this.price}`;
  }

  get totalPrice(): number {
    return this.price * this.amount;
  }

  static cajuJuice(): Product {
    return new Product(
      0,
      'Suco de caju',
      'Sucos',
      require('../assets/image-product-1.jpg'),
      130,
      1,
    );
  }
}
