Ext.define('Prdc.store.SpeakerStore', {
	extend: 'Ext.data.Store',
	model: 'Prdc.model.Speaker',
	proxy: {
        type: 'jsonp',
        url : 'http://prdc.heroku.com/speakers.js',
		reader: {
			type : 'json',
			root: 'speakers'
		}
    },
    sorters: 'last_name',						
	getGroupString: function(r){
										        return r.get('last_name')[0]
	},

	autoLoad:true
});