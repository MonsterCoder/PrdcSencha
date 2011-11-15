Ext.define('Prdc.view.Sessions', {
		id: 'Sessions',
		extend:'Ext.Panel',
		config: {
			fullscreen:true,
			styleHtmlContent: true,
			layout: 'card',
			items:[
				{
					id: 'sessionstoolbar',
					xtype: 'toolbar',
					docked:'top',
					ui:'light',
					title: 'Sessions',
					defaults: {
                        iconMask: true,
                        ui      : 'plain'
                    },
					items:[
						{
							id:'homebutton',
							xtype:'button',
							ui   : 'back',
							text:'back'
						}, 		
						{ 
							id:'showfilter',
							docked:'right',
							ui:'plain',
							iconCls:'arrow_down'
						},						
						{ 
							id:'hidefilter',
							docked:'right',
							ui:'plain',
							iconCls:'arrow_up',
							hidden: true
						}
					]
				},
				{
					id:'filterbar',
					xtype: 'toolbar',
					docked:'top',
					ui: 'searchbar',
					hidden:true,
					defaults: {
                        iconMask: true,
                        ui      : 'plain'
                    },
					items: [
						{ 
							iconCls: 'search'
						},
						{
							id:'tagfilter',
							xtype: 'textfield',
							name: 'tagfilter',
							placeHolder: 'filter by tag...'
						}
					]
				},
				{
						id:'sessionslist',
						xtype:'list',
						store:'SessionsStore',
						scroll:'vertical',
						grouped: true,
						itemTpl: Ext.create('Ext.XTemplate','<h5>{title}</h5><h6><span> <tpl if="start != null"> {[this.formatDueDate(values.start)]} {[this.formatTime(values.start)]}</tpl> </span>  <span> @ <tpl if="room != null"> {room}, <tpl else> TBA </tpl></span></h6>',{
                formatDueDate: function(date) {
                    date = date.split('T')[0];

                    var format = "M j";
                        parsed = new Date(Ext.Date.parse(date, "Y-m-d"));
                    return Ext.Date.format(parsed, format);
                                    },
                formatTime: function (date){
					var hour = date.split('T')[1].split(':')[0];
					var minu = date.split('T')[1].split(':')[1];
					var am = "PM";
					
					if (hour < "12") {
						am = "AM";
					}
					
                	return hour+':'+minu + ' ' +am;
                }
                                    
            }),
						placeHolder: 'loading...'
				}
			]
		},
		initialize: function() {
			this.on({    
						delegate: '#tagfilter',
						change: function(sender, value) {
						   var store = this.items.items[2].getStore();
						   store.clearFilter();
						   if (value !== ''){
								var tag = value.charAt(0).toUpperCase() + value.slice(1);
								store.filterBy(function(item) { 
								     return	item.data.tags.indexOf(tag) > -1;
								});
						   }
						   this.items.items[2].doRefresh(this.items.items[2]);
						}
					}
					
				);	

			this.on({
							delegate:'#showfilter',
							tap: function(sender) {
								//var filterbar = Ext.ComponentQuery.query('toolbar#filterbar');
								//var hideFilter = Ext.ComponentQuery.query('#filterbar');
								//var showFilter = Ext.ComponentQuery.query('#filterbar');
								
								var filterbar = this.items.items[1];
								var hideFilter =this.items.items[0].items.items[2];
								var showFilter = sender;
								filterbar.setHidden(false);
								showFilter.setHidden(true);
								hideFilter.setHidden(false);
								//sender.setHidden(true);
							}
						});				
			this.on({
							delegate:'#hidefilter',
							tap: function(sender) {
								//var filterbar = Ext.ComponentQuery.query('toolbar#filterbar');
								//var hideFilter = Ext.ComponentQuery.query('#filterbar');
								//var showFilter = Ext.ComponentQuery.query('#filterbar');
								
								var filterbar = this.items.items[1];
								var hideFilter =sender;
								var showFilter = this.items.items[0].items.items[1];
								filterbar.setHidden(true);
								showFilter.setHidden(false);
								hideFilter.setHidden(true);
								//sender.setHidden(true);
							}
						});	
			this.on({
							delegate:'#sessionstoolbar',
							drag: function(sender) {
								//var filterbar = Ext.ComponentQuery.query('toolbar#filterbar');
								//var hideFilter = Ext.ComponentQuery.query('#filterbar');
								//var showFilter = Ext.ComponentQuery.query('#filterbar');
								
								var filterbar = this.items.items[1];
								var hideFilter =this.items.items[0].items.items[2];
								var showFilter = this.items.items[0].items.items[1];
								
								if (filterbar.getHidden()){
									filterbar.setHidden(false);
									showFilter.setHidden(true);
									hideFilter.setHidden(false);

								} else {
									filterbar.setHidden(true);
									showFilter.setHidden(false);
									hideFilter.setHidden(true);
								}
								//sender.setHidden(true);
							}
						});	

		},
		doRefreshList: function(){
			if (this.items.items[2].getStore()){
				this.items.items[2].doRefresh(this.items.items[2]);
			}
		}
	});