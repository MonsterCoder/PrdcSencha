Ext.define("Prdc.view.roomschedule", {
	extend: "Ext.List",
	xtype: "roomSchedule",
	config:{
		layout:'card',
		styleHtmlContent: true,
		itemTpl:Ext.create('Ext.XTemplate', '<div class="left">{[this.getTime(values.start)]}</div>, {room},<div class="box">{session_id}</div>',{            
												getTime: function (date){
															var hour = date.split('T')[1].split(':')[0];
															var minu = date.split('T')[1].split(':')[1];
					
                											return hour+':'+minu;
                						}})

	}
})