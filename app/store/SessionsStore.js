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
    autoLoad:true
});