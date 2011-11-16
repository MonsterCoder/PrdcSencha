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
			var groups = scheStoreDay1.getGroups();
			var cards = [Ext.create('Ext.Panel', {html :"   ", layout:'fit',style: 'background-color: #759E60'})];
			for(var i =0; i < groups.length; i++){

				var s =  Ext.create('Ext.data.Store', {
						  model:'Prdc.model.Schedule',
				 });
				for(var j = 0; j < groups[i].children.length; j ++){
					s.add(groups[i].children[j].data);
				};
								
				var p = Ext.create('Prdc.view.roomschedule', {store :s});
				//var p = Ext.create('Ext.Panel', {html :groups[i].name, layout:'fit',style: 'background-color: #759E60'});
				cards.push( Ext.create('Ext.Panel', {layout:'card', items :[p]}));
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



