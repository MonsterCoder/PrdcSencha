Ext.define('Prdc.view.Sessions', {
		id: 'Sessions',
		extend:'Ext.Panel',
		config: {
			fullscreen:true,
			styleHtmlContent: true,
			layout: 'card',
			items:[
				{
					xtype: 'toolbar',
					docked:'top',
					title: 'Sessions',
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
					xtype: 'toolbar',
					docked:'top',
					ui: 'searchbar',
					items: [
						{ 
							xtype: 'component',
							html : '<span class="small">Tag</span>'
						},
						{
							id:'tagfilter',
							xtype: 'textfield',
							name: 'tagfilter'
						}
					]
				},
				{
						id:'sessionslist',
						xtype:'list',
						store:'SessionsStore',
						scroll:'vertical',
						itemTpl: '<h5>{title}</h5><h6><span>Room: {room}</span><span> Time: {start} - {finish}</span></h6>',
						placeHolder: 'loading...'
				}
			]
		},
		initialize: function() {
			this.on({    
						delegate: '#tagfilter',
						change: function(sender, value) {
						   var store = this.items.items[2].getStore();
						   if (value === ''){
								store.clearFilter();
						   } else {
							var tag = value.charAt(0).toUpperCase() + value.slice(1);
							store.filterBy(function(item) { 
								     return	item.data.tags.indexOf(tag) > -1;
									});
						   }
						   this.items.items[2].doRefresh(this.items.items[2]);
						}
					}
					
				);
		},
		doRefreshList: function(){
			if (this.items.items[2].getStore()){
				this.items.items[2].doRefresh(this.items.items[2]);
			}
		}
	});