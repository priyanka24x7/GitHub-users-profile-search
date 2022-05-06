import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient: HttpClient) {}

  getUserProfile(searchQuery) {
    let dataUrl = `https://api.github.com/users/${searchQuery}`;
    return this.httpClient.get(dataUrl);
  }

  saveToLocalStorage(data) {
    return localStorage.setItem('Github Users', JSON.stringify(data));
  }
}
