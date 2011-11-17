Ext.define('Prdc.store.ScheduleStore2',{
	extend:'Ext.data.Store',
	model:'Prdc.model.Schedule',
	proxy: {
		type:'jsonp',
		url:"http://prdc.heroku.com/Schedule/days/2.js",
		reader:{
			type:'json',
			root:'day'
		}
	},
    autoLoad:true,
    sorters: 'start',	
	getGroupString: function(r) {
		return r.get('room')
	},
});