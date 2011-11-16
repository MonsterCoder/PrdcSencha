Ext.define('Prdc.store.ScheduleStore1',{
	extend:'Ext.data.Store',
	model:'Prdc.model.Schedule',
	proxy: {
		type:'jsonp',
		url:"http://prdc.heroku.com/Schedule/days/1.js",
		reader:{
			type:'json',
			root:'day'
		}
	},
    sorters: 'start',
    autoLoad:true
});