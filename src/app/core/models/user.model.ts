import * as firebase from 'firebase/app';

export class User {
  displayName: string | null;
  email: string | null;
  phoneNumber: string | null;
  photoURL: string | null;
  providerId: string;
  uid: string;

  constructor(firebaseUser: firebase.User) {
    this.displayName = firebaseUser.displayName;
    this.email = firebaseUser.email;
    this.phoneNumber = firebaseUser.phoneNumber;
    this.photoURL = firebaseUser.photoURL;
    this.providerId = firebaseUser.providerId;
    this.uid = firebaseUser.uid;
  }
}

export class PublicUserData {
  displayName: string | null;
  photoURL: string | null;
  uid: string;

  constructor(user: User) {
    this.displayName = user.displayName;
    this.photoURL = user.photoURL;
    this.uid = user.uid;
  }
}
