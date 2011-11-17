Ext.define("Prdc.view.roomschedule", {
	extend: "Ext.List",
	xtype: "roomSchedule",
	scroll:'vertical',

	config:{
		layout:'fit',
		cls:"schedule",
		styleHtmlContent: true,
		itemTpl:Ext.create('Ext.XTemplate', '<div class="left">{[this.getTime(values.start)]}</div><div class="box">{custom}<p>{title}</p></box>',{            
												getTime: function (date){
															var hour = date.split('T')[1].split(':')[0];
															var minu = date.split('T')[1].split(':')[1];
					
                											return hour+':'+minu;
                						}})

	}
})