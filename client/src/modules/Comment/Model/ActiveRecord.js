import $ from 'jquery';

class ActiveRecord {
	
	constructor(options) {
		this.url = options.url;
	}
	
	save(options) {
		this.model = options.model;
		this.success = options.success || {};
		 
		$.post(this.url, this.model)
			.success((data) =>  {
				console.log('model post succesfully');
				this.success(data);
			}
			.bind(this));
	}
	
	static getList(options) {
		$.get(options.url)
			.success((data) => 
				{ 
					options.success(data); 
				});
	}
}