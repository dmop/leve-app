import { ImageSourcePropType } from 'react-native';

export class Training {

  constructor(readonly title: string,
              readonly description: string,
              readonly photo: ImageSourcePropType,
              readonly time: number,
              readonly styx: number,
              readonly points: number) {
  }

  static running(): Training {
    return new Training(
      'Corrida',
      'Corrida vespertina de 2km.',
      require('../assets/image-training-2.jpg'),
      2,
      55,
      60
    );
  }

  static run(): Training {
    return new Training(
      'Caminhada',
      'Caminhada vespertina de 2km.',
      require('../assets/image-training-1.png'),
      2,
      55,
      10
    );
  }

  static cicling(): Training {
    return new Training(
      'Pedalada',
      'Pedalada matinal de 1km.',
      require('../assets/image-training-2.png'),
      2,
      55,
      50
    );
  }

}
