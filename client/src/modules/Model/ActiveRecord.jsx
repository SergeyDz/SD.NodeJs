import $ from 'jquery';
import deferred from 'deferred';

export class ActiveRecord {
	
	constructor(options) {
		this.url = options.url;
	}
	
	save(model) {
		let def = deferred();
		$.post(this.url, model)
			.success((data) =>  {
				def.resolve(data);
			});
			
		return def.promise;
	}
	
	static getList(options) {
		let def = deferred();
		
		$.get(options.url)
			.success((data) => { 
					def.resolve(data);
				});
				
		return def.promise;
	}
}