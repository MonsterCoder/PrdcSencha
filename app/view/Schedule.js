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
			var scheStoreDay2 = Ext.data.StoreManager.lookup('ScheduleStore2');
			var sessionstore = Ext.data.StoreManager.lookup('SessionsStore');
			var cards = [];
			this.addCarousel('Day1', scheStoreDay1, cards, sessionstore);
			this.addCarousel('Day2', scheStoreDay2, cards, sessionstore);
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
			
			
	},
	addCarousel: function(day, store, cards, sessionstore){
				var groups = store.getGroups();
				
				for(var i =0; i < groups.length; i++){

						var s =  Ext.create('Ext.data.Store', {
							      model:'Prdc.model.Schedule',
						 });
							
								
						var p = Ext.create('Prdc.view.roomschedule', {store :s});
						var room = groups[i].name;
						if (!room){
							room="Room TBD";
						}
						cards.push( Ext.create('Ext.Panel', {layout:'card',  items :[{xtype: 'toolbar', title:day + ' - ' + room ,docked:'top'},p]}));
								
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
			

	}
});



