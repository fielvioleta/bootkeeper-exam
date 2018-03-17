import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css'],
  providers: [CompanyService]
})
export class CompanyListComponent implements OnInit {

	compnaies: any;

	@Output() sendData = new EventEmitter<any>();

	constructor(
		private _companyService: CompanyService
	){ }

	ngOnInit() {
		this._companyService.getCompanies().then(data => {
			this.compnaies = data;
		});

		this._companyService.selected.subscribe(data => {
			this.sendEventData(data);
		});
	}

	sendEventData(data) {
		this.sendData.emit(data);
	}
}
