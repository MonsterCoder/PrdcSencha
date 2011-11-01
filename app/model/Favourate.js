Ext.define('Prdc.model.Favourate',{
	extend: 'Ext.data.Model',
	fields: ['id','session_id','session'],
	proxy: {
        type: 'localstorage',
        id  : 'favourate_session',
		batchActions:false
    },
});