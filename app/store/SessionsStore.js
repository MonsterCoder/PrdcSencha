Ext.define('Prdc.store.SessionsStore',{
	extend:'Ext.data.Store',
	model:'Prdc.model.Session',
	proxy: {
		type:'jsonp',
		url:'http://prdc.heroku.com/sessions.js',
		reader:{
			type:'json',
			root:'sessions'
		}
	},
    sorters: 'start',						
	getGroupString: function(r){
		var start = r.get('start');
			if (start===null) {
			 return "2011-11-22";
			 
		    }
			 
			return start.split('T')[0];
	},

    autoLoad:true
});