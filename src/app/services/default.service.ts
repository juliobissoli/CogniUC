import { Injectable } from '@angular/core';
import { Uc, sanitizeUc } from '../interfaces/uc';
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
    let list: Array<Uc> = this.listItems;
    if(this.listItems.length === 0) {
      list = [...this.listItems, ...fakerUcs];
    }
    this.listUcs.next(list)
    this.listItems = list
  }

  save = async (data: Uc, id?: string) => {
    
    // fake timer access api
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (id) {
      this.listItems = this.listItems.map(el => {
        if (el.id === id ) return {...data, id}
        return el
      })
      this.listUcs.next(this.listItems)
    }

    else {
      this.listItems.push(data)
      this.listUcs.next(this.listItems)
    }

  }

  show = async (id: string): Promise<Uc | undefined> => {

    let list: Array<Uc> = []

    if (this.listItems.length == 0) {
      await this.load()
    }

    const uc = this.listItems.find(el => el.id === id)

    return uc
  }


  createMany = (list: Array<any>) => {
    const newList = list.map((el: any) => sanitizeUc(el))

 
    list = [...this.listItems, ...newList];
    this.listUcs.next(list)
    this.listItems = list

  }

  delete = (id: string) => {
    const newList =  this.listItems.filter(el => el.id !== id)

    this.listUcs.next(newList)
    this.listItems = newList
  }

}
