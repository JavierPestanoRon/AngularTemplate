import { Injectable } from '@angular/core';


@Injectable()
export class DummyService {

  constructor() { }

  dummyFunction() {
    const dummyText = 'Dummy Service Works';
    return dummyText;
  }

}
