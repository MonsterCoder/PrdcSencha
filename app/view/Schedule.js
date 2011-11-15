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
					xtype:'carousel',
					layout:'card',
					    items: [
									{
										xtype: 'list',
										items: {
											xtype: 'toolbar',
											dock: 'top',
											title: 'Room 1'
										},

										store: {
											fields: ['name'],
											data: [
												{name: 'Rob'},
												{name: 'Ed'},
												{name: 'Jacky'},
												{name: 'Jamie'},
												{name: 'Tommy'},
												{name: 'Abe'}
											]
										},

										itemTpl: '{name}'
									},

								]
					
				}
			]
	}
});



