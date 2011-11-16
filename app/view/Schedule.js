Ext.define('Prdc.view.Schedule', {
	id:'Schedule',
	extend: 'Ext.Panel',
	requires:['Prdc.view.roomschedule'],
	config: {
			fullscreen:true,
			styleHtmlContent: true,
			layout: 'card',
			items:[
				{
					xtype: 'toolbar',
					docked:'top',
					title: 'Sessions',
					ui:'light',
					items:[
						{
							id:'homebutton',
							xtype:'button',
							ui   : 'back',
							text:'home'
						}
					]
				},
				{
					xtype:'carousel',
					layout:'card',
					    items: [
									{
										xtype: 'roomSchedule',
										store: 'ScheduleStore1'


									}

								]
					
				}
			]
	}
});



