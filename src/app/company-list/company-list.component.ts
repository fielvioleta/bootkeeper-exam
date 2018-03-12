import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

	companies: any;

	constructor(private http: HttpClient){ }

	ngOnInit() {
		this.http.get('https://my.api.mockaroo.com/products.json?key=adf292d0').subscribe(data => {
			this.companies = data;
		});
	}

}
