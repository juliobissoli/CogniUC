import { Injectable } from '@angular/core';
import { Uc } from '../interfaces/uc';
import { Observable, Subject } from 'rxjs';
import { fakerUcs } from '../data/uc.faker';

@Injectable({
  providedIn: 'root'
})
export class DefaultService {


  listItems: Array<Uc> = []

  listUcs: Subject<Array<Uc>> = new Subject()


constructor() { }

load = async () => {

  // await new Promise(resolve => setTimeout(resolve, 3000));

  const list = [...this.listItems, ...fakerUcs];
  this.listUcs.next(list)
}

add = async (data: Uc) => {
  this.listItems.push(data)

  await new Promise(resolve => setTimeout(resolve, 3000));

  this.listUcs.next(this.listItems)
  // subscribe((lista: Array<Uc>) => {
  //   lista.push(data);
  //   console.log(lista);
  // });

}
}
