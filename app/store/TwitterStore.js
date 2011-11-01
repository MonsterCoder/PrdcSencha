Ext.define("Prdc.store.TwitterStore", {
	extend: 'Ext.data.Store',
	model: 'Prdc.model.Tweet',                          
    autoLoad: true ,
	proxy: {
		type:'jsonp',
		 url: 'http://search.twitter.com/search.json?q=PrairieDevCon',                   
        reader: {
            type: 'json',
            root: 'results'
        } 
	}
});