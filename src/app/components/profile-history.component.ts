import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-profile-history',
  templateUrl: './profile-history.component.html',
  styleUrls: ['./profile-history.component.scss'],
})
export class ProfileHistoryComponent implements OnInit {
  @Input() history;
  searchResult;
  constructor(public dataService: DataService) {}

  ngOnInit() {}

  deleteHistory(id: number) {
    this.history.shift();
    this.dataService.saveToLocalStorage(this.history);
  }
}
