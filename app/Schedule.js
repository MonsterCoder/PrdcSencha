Ext.define("Prdc.view.Schedule",{
	extend:'Ext.Panel',
	config: {
			fullscreen:true,
			styleHtmlContent: true,
			layout:'card',
			items:[
				{
					xtype: 'toolbar',
					docked:'top',
					title:'Schedule',
					items:[
						{
							id:'homebutton',
							xtype:'button',
							text:'home'
						}
					]
				},
				{
						id:'scheduleList',
						xtype:'list',
						store:'scheduleStore',
						scroll:'vertical',
						itemTpl: '{title}'
				}
			]
		}	
})