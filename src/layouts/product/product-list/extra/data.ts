import { ImageSourcePropType } from 'react-native';

export class Product {

  constructor(readonly title: string,
              readonly category: string,
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
      'Suco de caju',
      'Sucos',
      require('../assets/image-product-1.jpg'),
      130,
      1,
    );
  }

  static goiabaJuice(): Product {
    return new Product(
      'Suco de goiaba',
      'Sucos',
      require('../assets/image-product-2.png'),
      130,
      1,
    );
  }

  static orangeJuice(): Product {
    return new Product(
      'Suco de laranja',
      'Sucos',
      require('../assets/image-product-3.png'),
      150,
      1,
    );
  }

  static tangerineJuice(): Product {
    return new Product(
      'Suco de tangerina',
      'Sucos',
      require('../assets/image-product-4.png'),
      120,
      1,
    );
  }

  static uvaJuice(): Product {
    return new Product(
      'Suco de uva',
      'Sucos',
      require('../assets/image-product-5.png'),
      110,
      1,
    );
  }
}
