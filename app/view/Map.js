Ext.define('Prdc.view.Map', {
	id:'Map',
	extend: 'Ext.Panel',
	config: {
			fullscreen:true,
			styleHtmlContent: true,
			layout: 'card',
			items:[
				{
					xtype: 'toolbar',
					docked:'top',
					title: 'Map',
					ui:'light',
					items:[
						{
							id:'homebutton',
							xtype:'button',
							ui   : 'back',
							text:'back'
						}
					]
				},
				{
						id:'location',
						xtype:'map',
						useCurrentLocation: true
				}
			]
		}
		
});