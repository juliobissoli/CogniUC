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


  listItems: Array<Uc> = !environment.withApi ? [...fakerUcs] : []

  listUcs: Subject<Array<Uc>> = new Subject()


  constructor(private http: HttpClient) { }

  getList = (): Promise<Array<Uc> | null> => {
    return new Promise((resolve, reject) => {

      if (environment.withApi) {

        this.http.get(`${environment.baseUrl}/uc`).subscribe(
          res => {
            const list = res as Array<Uc>
            resolve(list)
          },
          () => {
            reject(null)
          }
        )
      }
      else {
        resolve(this.listItems)
      }
    })


  }

  save = async (data: Uc, id?: string): Promise<any> => {


    return new Promise((resolve, reject) => {
      if (environment.withApi) {

        if (id) {
          this.http.put(`${environment.baseUrl}/uc/${id}`, data).subscribe(
            res => {
              resolve(res)
            },
            (error) => reject(error)
          )
        }
        else {

          this.http.post(`${environment.baseUrl}/uc`, data).subscribe(
            res => {
              resolve(res)
            },
            (error) => reject(error)
          )
        }
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
            resolve(res as Uc | undefined)
          },
          error => {
            reject(undefined)
          }
        )
      }

      else {

        const uc = this.listItems.find(el => el.id === id)

        resolve(uc)
      }
    })
  }


  createMany = (list: Array<any>): Promise<any> => {

    return new Promise((resolve, reject) => {
      const newList = list.map((el: any) => sanitizeUc(el))

      if (environment.withApi) {

        this.http.post(`${environment.baseUrl}/uc/create-many`, newList).subscribe(
          (res: any) =>   {
            resolve(res)
            console.log('Ta aqiuo')
          },
          (error: any) => {
            reject(error)
            console.log('deu errado => ', error)
          }

        )
      }
      else {
        list = [...this.listItems, ...newList];
        this.listItems = list
        resolve('success')
      }
    })


  }

  delete = (id: string): Promise<any> => {

    return new Promise((resolve, reject) => {

      if (environment.withApi) {
        this.http.delete(`${environment.baseUrl}/uc/${id}`).subscribe(
          res => resolve(res),
          error => reject(error)
        )
      }
      else {

        const newList = this.listItems.filter(el => el.id !== id)

        this.listItems = newList
        resolve(newList)
      }
    })
  }

}
