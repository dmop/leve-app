import { ImageSourcePropType } from 'react-native';

export class Profile {

  constructor(readonly firstName: string,
              readonly lastName: string,
              readonly photo: ImageSourcePropType,
              readonly gender: Gender,
              readonly age: number,
              readonly weight: number,
              readonly height: number,
              readonly email: string,
              readonly phoneNumber: string) {
  }

  public get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  static daniloPedrosa(): Profile {
    return new Profile(
      'Danilo',
      'Pedrosa',
      require('../assets/image-profile.jpeg'),
      Gender.MALE,
      25,
      78,
      171,
      'danilo.pedrosa@gmail.com',
      '(81) 98677-3307',
    );
  }
}

export enum Gender {
  MALE = 'Masculino',
  FEMALE = 'Feminino',
}
