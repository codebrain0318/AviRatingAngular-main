import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { apis } from '../../../environments/environment'

@Injectable()
export class DataService {
    private baseUrl = `${apis.baseUrl}/admin`
    private data = new BehaviorSubject<Array<any>>([{ fetching: true }])
    data$ = this.data.asObservable()

    constructor(public http: HttpClient) {
    }

    get(): Observable<any> {
        const url = `${this.baseUrl}/amenities`

        return this.http.get<any>(url)
    }

    delete(params): Observable<any> {
        const url = `${this.baseUrl}/delete-amenity`

        return this.http.post<any>(url, params)
    }

    add(params): Observable<any> {
        const url = `${this.baseUrl}/add-amenity`

        return this.http.post<any>(url, params)
    }

    update(params): Observable<any> {
        const url = `${this.baseUrl}/update-amenity`

        return this.http.post<any>(url, params)
    }

}
