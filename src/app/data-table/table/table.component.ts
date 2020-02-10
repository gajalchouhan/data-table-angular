import { Component, OnInit } from '@angular/core';
import { rawData, details } from './data';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {

  modifyData = rawData;
  tableData: any;
  contentDetail: any = [];
  searchValue;
  constructor() { }

  getBaseData(data) {
    this.tableData = data;
  }

  matchAnyKey(pattern, obj) {
    let keys = Object.keys(obj);
    pattern = pattern.toLowerCase();
    for (let j = 0; j < keys.length; ++j) {
      if (obj[keys[j]].toLowerCase().match(pattern)) return true;
    }
    return false;
  }

  // Search by name....
  searchByName(e, table) {
    let ans = [];
    for (let i = 0; i < table.length; ++i) {
      if (this.matchAnyKey(e.target.value, table[i])) ans.push(table[i]);
    }
    this.tableData = ans;
  }

  detailcontent() {
    this.contentDetail = details;
  }


  ngOnInit() {
    this.tableData = rawData;
  }
}
