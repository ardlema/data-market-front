import { Injectable } from '@angular/core';
import { DataProduct } from './data-product';
import { DATAPRODUCTS } from './mock-data-products';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class DataProductService {

  private dataproductsUrl = 'api/dataproducts';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private messageService: MessageService,
              private http: HttpClient) { }

  /** GET data products from the server */
  getDataProducts(): Observable<DataProduct[]> {
    return this.http.get<DataProduct[]>(this.dataproductsUrl)
      .pipe(
        tap(_ => this.log('fetched data products')),
        catchError(this.handleError<DataProduct[]>('getDataProducts', []))
      );
  }

  /** GET data product by id. Will 404 if id not found */
  getDataProduct(id: number): Observable<DataProduct> {
    const url = `${this.dataproductsUrl}/${id}`;
    return this.http.get<DataProduct>(url).pipe(
      tap(_ => this.log(`fetched data product id=${id}`)),
      catchError(this.handleError<DataProduct>(`getDataProduct id=${id}`))
    );
  }

  /** PUT: update the data product on the server */
  updateDataProduct(dataproduct: DataProduct): Observable<any> {
    return this.http.put(this.dataproductsUrl, dataproduct, this.httpOptions).pipe(
      tap(_ => this.log(`updated data product id=${dataproduct.id}`)),
      catchError(this.handleError<any>('updateDataProduct'))
    );
  }

  /** POST: add a new hero to the server */
  addDataProduct(dataProduct: DataProduct): Observable<DataProduct> {
    return this.http.post<DataProduct>(this.dataproductsUrl, dataProduct, this.httpOptions).pipe(
      tap((newDataProduct: DataProduct) => this.log(`added data product w/ id=${newDataProduct.id}`)),
      catchError(this.handleError<DataProduct>('addDataProduct'))
    );
  }

  /** DELETE: delete the data product from the server */
  deleteDataProduct(dataProduct: DataProduct | number): Observable<DataProduct> {
    const id = typeof dataProduct === 'number' ? dataProduct : dataProduct.id;
    const url = `${this.dataproductsUrl}/${id}`;

    return this.http.delete<DataProduct>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted data product id=${id}`)),
      catchError(this.handleError<DataProduct>('deleteDataProduct'))
    );
  }

  /* GET heroes whose name contains search term */
  searchDataProducts(term: string): Observable<DataProduct[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<DataProduct[]>(`${this.dataproductsUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found heroes matching "${term}"`) :
        this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<DataProduct[]>('searchDataProducts', []))
    );
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
