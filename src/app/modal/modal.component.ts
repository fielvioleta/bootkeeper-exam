import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

	@Input() selected: any; 
	product: any;
	constructor() { }

	ngOnInit() {
		
	}

	onChange(data) {
		this.product = JSON.parse(data);
	}

	clear() {
		this.product = '';
	}
}
