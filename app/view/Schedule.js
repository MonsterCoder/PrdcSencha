Ext.define('Prdc.view.Schedule', {
	id:'Schedule',
	extend: 'Ext.Panel',
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
					xtype:'panel',
					html: 'Coming soon ...'
				}
			]
	}
});