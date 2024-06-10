import { Injectable } from '@angular/core';
import { Uc, sanitizeUc } from '../interfaces/uc';
import { Observable, Subject } from 'rxjs';
import { fakerUcs } from '../data/uc.faker';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DefaultService {


  listItems: Array<Uc> = []

  listUcs: Subject<Array<Uc>> = new Subject()


  constructor(private http: HttpClient) { }

  load = async () => {
    let list: Array<Uc> = this.listItems;

    if (environment.withApi) {

      this.http.get(`${environment.baseUrl}/uc`).subscribe(
        res => {
          list = res as Array<Uc>
          this.listUcs.next(list)
          this.listItems = list
        }
      )
    }

    else {
      if (this.listItems.length === 0) {
        list = [...this.listItems, ...fakerUcs];
      }
      this.listUcs.next(list)
      this.listItems = list
    }
  }

  save = async (data: Uc, id?: string): Promise<any> => {


    return new Promise((resolve, reject) => {
      if (environment.withApi) {

        this.http.post(`${environment.baseUrl}/uc`, data).subscribe(
          res => {
            resolve(res)
          },
          (error) => reject(error)
        )
      }
      else {
        if (id) {
          this.listItems = this.listItems.map(el => {
            if (el.id === id) return { ...data, id }
            return el
          })
          this.listUcs.next(this.listItems)
        }

        else {
          this.listItems.push(data)
          this.listUcs.next(this.listItems)
        }
        resolve(data)
      }
    });






  }

  show = async (id: string): Promise<Uc | undefined> => {

    return new Promise((resolve, reject) => {

      if (environment.withApi) {
        this.http.get(`${environment.baseUrl}/uc/${id}`).subscribe(
          res => {
            console.log('aqui', res)
            resolve(res as Uc | undefined)
          },
          error => {
            reject(undefined)
          }
        )
      }

      else {

        if (this.listItems.length == 0) {
          this.load()
        }

        const uc = this.listItems.find(el => el.id === id)

        resolve(uc)
      }
    })
  }


  createMany = (list: Array<any>) => {
    const newList = list.map((el: any) => sanitizeUc(el))


    if (environment.withApi) {

      this.http.post(`${environment.baseUrl}/uc/create-many`, newList).subscribe(
        res => {
          if (res === 'Success') {
            this.load()
          }
          // this.listUcs.next(list)
          // this.listItems = list
        }
      )
    }
    else {
      list = [...this.listItems, ...newList];
      this.listUcs.next(list)
      this.listItems = list
    }

  }

  delete = (id: string): Promise<any> => {

    return new Promise((resolves, reject) => {

      if (environment.withApi) {
        this.http.delete(`${environment.baseUrl}/uc/${id}`).subscribe(
          res =>  resolves(res),
          error => reject(error)
        )
      }
      else {

        const newList = this.listItems.filter(el => el.id !== id)

        this.listUcs.next(newList)
        this.listItems = newList
        resolves(newList)
      }
    })
  }

}
