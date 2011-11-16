Ext.define('Prdc.view.Schedule', {
	id:'Schedule',
	extend: 'Ext.Panel',
	requires:['Prdc.view.roomschedule', 'Prdc.model.Schedule'],
	config: {
			fullscreen:true,
			styleHtmlContent: true,
			layout: 'card',
			items:[
				{
					xtype: 'toolbar',
					docked:'top',
					title: 'Schedule',
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
								],
					initialize: function() {
							var scheStoreDay1 = Ext.data.StoreManager.lookup('ScheduleStore1');
							var groups = scheStoreDay1.getGroups();
							for(var i =0; i < groups.length; i++){

								var s =  Ext.create('Ext.data.Store', {
										  model:'Prdc.model.Schedule',
								 });
								for(var j = 0; j < groups[i].children.length; j ++){
									s.add(groups[i].children[j].data);
								};
												
								this.add( Ext.create('Prdc.view.roomschedule', {store :s}));
							}
							
							

							
							this.setActiveItem(0);
					}
				}
			]
	}
});



