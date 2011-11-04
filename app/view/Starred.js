Ext.define('Prdc.view.Starred', {
	extend:'Ext.Panel',
	id:'Starred',
	config: {
				fullscreen:true,
				styleHtmlContent: true,
				layout: 'card',
				items:[
					{
						xtype: 'toolbar',
						docked:'top',
						title: 'Favourate',
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
							id:'starredsessionslist',
							xtype:'list',
							store:'StarredSessionsStore',
							scroll:'vertical',
							itemTpl: '<h5>{session.title}<h5>',
							placeHolder: 'No favourate session ...',
							emptyText: 'Currently you have no starred session.'
					}
				]
			}
});