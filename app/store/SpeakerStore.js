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

	autoLoad:true
});