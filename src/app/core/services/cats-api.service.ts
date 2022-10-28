import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Cats } from '../model/Cats';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CatsApiService {
  url = "https://api.thecatapi.com/v1/images/search?limit=20";
  key = "live_b9vDCBN56lvOAdqmLsZSRSiQVKW9AES4XqSIYUcFHmCiRLOuCJVTEo6YZUruFU9v";

  fetchRandomCats() {
    return this.http
      .get<Cats[]>(this.url, {
        params: {'x-api-key': this.key}
      })
  }
  constructor(private http: HttpClient) { }
}
