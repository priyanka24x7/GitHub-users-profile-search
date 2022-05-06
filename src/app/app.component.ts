import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public searchQuery: string;
  public searchResult;
  isDisabled: boolean;
  loading;
  history = [];
  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    this.getFromLocalStorage();
  }
  getUserProfile() {
    this.loading = true;
    if (this.searchQuery === '') {
      alert('Please enter user name to search');
    } else {
      this.dataService.getUserProfile(this.searchQuery).subscribe((res) => {
        this.searchResult = res;
        this.loading = false;
        this.history.push(this.searchQuery);
        this.saveLocalStorage();
      });
    }
  }

  saveLocalStorage() {
    this.dataService.saveToLocalStorage(this.history);
  }

  // function helps to get everything from local storage
  getFromLocalStorage() {
    const reference = localStorage.getItem('Github Users');
    // if reference exists
    if (reference) {
      // converts back to array and store it in todos array
      this.history = JSON.parse(reference);
    }
  }
}
