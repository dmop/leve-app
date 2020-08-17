import { ImageSourcePropType } from 'react-native';

export class Product {

  constructor(readonly title: string,
              readonly subtitle: string,
              readonly description: string,
              readonly price: string,
              readonly image: ImageSourcePropType,
              readonly comments: Comment[]) {
  }

  static cajuJuice(): Product {
    return new Product(
      'Suco de Caju',
      'Sucos',
      'Descriçao do suco',
      '130$',
      require('../assets/image-product.jpg'),
      [
        Comment.byHubertFranck(),
      ],
    );
  }
}

export class ProductColor {

  constructor(readonly value: string,
              readonly description: string) {
  }

  static gray(): ProductColor {
    return new ProductColor('#3366FF', 'blue');
  }

  static pink(): ProductColor {
    return new ProductColor('#FF708D', 'pink');
  }

  static orange(): ProductColor {
    return new ProductColor('#FFC94D', 'orange');
  }
}

export class Profile {

  constructor(readonly firstName: string,
              readonly lastName: string,
              readonly photo: ImageSourcePropType) {
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  static markVolter(): Profile {
    return new Profile(
      'Mark',
      'Volter',
      require('../assets/image-profile.jpeg'),
    );
  }

  static hubertFranck(): Profile {
    return new Profile(
      'Danilo',
      'Pedroso',
      require('../assets/image-profile.jpeg'),
    );
  }
}

export class Like {

  constructor(readonly author: Profile) {

  }

  static byMarkVolter(): Like {
    return new Like(
      Profile.markVolter(),
    );
  }

  static byHubertFranck(): Like {
    return new Like(
      Profile.hubertFranck(),
    );
  }
}

export class Comment {

  constructor(readonly text: string,
              readonly date: string,
              readonly author: Profile,
              readonly comments: Comment[],
              readonly likes: Like[]) {
  }

  static byHubertFranck(): Comment {
    return new Comment(
      'Suco muito gostoso!',
      'Hoje às 11:10 am',
      Profile.hubertFranck(),
      [
        Comment.byMarkVolter(),
      ],
      [
        Like.byMarkVolter(),
      ],
    );
  }

  static byMarkVolter(): Comment {
    return new Comment(
      'Yes! I agree with you',
      'Today 11:10 am',
      Profile.markVolter(),
      [],
      [],
    );
  }
}
