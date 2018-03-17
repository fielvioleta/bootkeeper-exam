import { Component, OnInit, OnChanges, Input } from '@angular/core';
import * as c3 from 'c3';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit, OnChanges {

	@Input() product: any;

	constructor() { }

	ngOnChanges() {
		this.generateChart();
	}

	ngOnInit() {
		this.generateChart();
	}

	generateChart() {
		const productSales = this.product.prior_week_sales_count[0];
		const productSalesDayArray = ['x'];
		const productSalesArray = [''];
		Object.keys(productSales).forEach(function (key) {
			productSalesDayArray.push(key);
			productSalesArray.push(productSales[key]);
		});


		const chart = c3.generate({
			bindto: '#chart',
		    data: {
		        x : 'x',
		        columns: [
		            productSalesDayArray,
		            productSalesArray
		        ],
		        type: 'bar'
		    },
		    axis: {
		        x: {
		            type: 'category',
		            tick: {
		                multiline: false
		            },
		            height: 130
		        }
		    },
		    legend: {
				show: false
			},
			tooltip: {
				show: false
			}
		});
	}
}
