import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-company-table',
  templateUrl: './company-table.component.html',
  styleUrls: ['./company-table.component.css']
})
export class CompanyTableComponent implements OnInit {

	@Input() data: any
	@ViewChild(MatSort) sort: MatSort;

	displayedColumns = [
		'id',
		'company',
		'number_of_employees',
		'market_cap',
		'hq_city'
	];

	dataSource: any;

	constructor(public _companyService: CompanyService) { }

	ngOnInit() {
		this.dataSource = new MatTableDataSource(this.data);
	}

	selectTable(data) {
		this._companyService.setSelectedTable(data);
	}
}
