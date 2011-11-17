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
						},
					]
				}
			]
	},
	initialize: function(me) {
			this.callParent(arguments);

				
			
			var scheStoreDay1 = Ext.data.StoreManager.lookup('ScheduleStore1');
			var sessionstore = Ext.data.StoreManager.lookup('SessionsStore');
			
			var groups = scheStoreDay1.getGroups();
			var cards = [];
			for(var i =0; i < groups.length; i++){

				var s =  Ext.create('Ext.data.Store', {
						  model:'Prdc.model.Schedule',
				 });

								
				var p = Ext.create('Prdc.view.roomschedule', {store :s});
				
				cards.push( Ext.create('Ext.Panel', {layout:'card',  items :[{xtype: 'toolbar', title:'day1',docked:'top'},p]}));
								
				for(var j = 0; j < groups[i].children.length; j ++){
					var m=groups[i].children[j].data;
					if (m.session_id){
						var idx = sessionstore.find('id', m.session_id);
						if (idx > -1){
							m.title = sessionstore.getAt(idx).data.title;
						}
					}
					s.add(m);
				};
			}
			
			var cs = Ext.create('Ext.Carousel', {
					fullscreen: true,

					defaults: {
						styleHtmlContent: true,
						layout:'card'
					},
					//store:scheStoreDay1,
					items: cards
			});
			
			cs.setActiveItem(0);
			//cs.doRefresh(cs);
			this.add(cs);
			
			
	}
});



