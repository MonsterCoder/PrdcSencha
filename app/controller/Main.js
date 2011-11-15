Ext.define('Prdc.controller.Main', {
	extend: 'Ext.app.Controller',
	autoCreateViewport: true,
    views : [
        'Menu','Speakers','SpeakerDetails', 'Sessions', 'SessionDetails','Twitter', 'Starred','Schedule','Map', 'Authors'
    ],
	stores: [
	'MenuItems',
	'SpeakerStore',
	'SessionsStore',
	'TwitterStore',
	'StarredSessionsStore',
	'ScheduleStore1',
	'ScheduleStore2'
	],

    init: function() {
		Ext.Viewport.setLayout({type: 'card', animation: {type: 'slide'}});
        Ext.Viewport.add(this.getMenuView().create());
		
		this.control({
			'#main_menu': {
				select: this.onMenuItemSelected
			},
			'#homebutton': {
				tap:  this.onBack
				
			},
			'#speakerslist': {
				select: this.onSpeakersSelected
			},
			'#sessionslist':{
				select: this.onSessionsSelected
			},
			'#starredsessionslist':{
				select: this.onStarredSessionSelected
			},
			'#detailsback': {
				tap: this.onBack
			},
			'#sessiondetailsback': {
				tap: this.onBack
			},
			'#sessionspeaker': {
				tap: function(sender) {
					//var previous = Ext.Viewport.getActiveItem();
					var store =	this.getSpeakerStoreStore();
					store.clearFilter();
					store.filter('id', sender.data.speakers[0]);
					this.changeView('Speakers');
					//Ext.Viewport.getActiveItem().previous = previous;
				}
			},
			'#star': {
				tap: function(sender) {
				  var store = this.getStarredSessionsStoreStore();
					
				  if (sender.iconElement.hasCls('star')) {
					sender.data.starred = true;
					var model =  Ext.create('Prdc.model.Favourate', {id: sender.data.id, session: sender.data});
					model.save();
					store.load();
					sender.iconElement.replaceCls('star', 'favourate');
				  } else {
		
					var idx = store.find('id', sender.data.id);
					var Favourate = Ext.ModelManager.getModel('Prdc.model.Favourate');
					if (idx > 0)
					{
						Favourate.load(store.getAt(idx).data.id, {success: function(favourate) { favourate.destroy();}});
						
						sender.data.starred = false;
						store.removeAt(idx);
					} else {
						Favourate.load(store.getAt(0).data.id, {success: function(favourate) { favourate.destroy();}});
					}
					store.load();
					sender.iconElement.replaceCls('favourate','star');
				  } 
				}
			},
			'#location': {
				maprender : function(comp, map){
								comp.update({ latitude: '49.879911', longitude: '-97.202312'});
								     var infowindow = new google.maps.InfoWindow({
										content: '<h5 id="hotel_title">Viscount Gort</h5><div class="small">1670 Portage Avenue<br/>Winnipeg, MB</div>1-800-665-1122 '
									});
									
								var marker = new google.maps.Marker({
									 position: new google.maps.LatLng('49.879911', '-97.202312'),
									 title : 'The Viscount Gort Hotel',
									 map: map
								});
								
							    google.maps.event.addListener(marker, 'click', function() {
									 infowindow.open(map, marker);
								});

								infowindow.open(map, marker);
								
				}
			},
			'#refreshtwitter': {
				tap: function(sender) {
					this.getTwitterStoreStore().load();
				}
			}
		});
    },
	onMenuItemSelected: function(container, item) {
		//alert(item.data.name);
		this.changeView(item.data.name);
		//container.deSelect(item);
	},
	onSpeakersSelected: function(container, item) {
		var previous = Ext.Viewport.getActiveItem();
		this.changeView('SpeakerDetails');
		var idx = Ext.Viewport.items.keys.indexOf("SpeakerDetails");
		Ext.Viewport.items.items[idx].setData(item.data);
	    Ext.Viewport.getActiveItem().previous = previous;
		
	},
	onSessionsSelected: function(container, item) {
		var store = this.getStarredSessionsStoreStore();
		var previous = Ext.Viewport.getActiveItem();
		var record_idx = store.find('session_id', item.data.id);
		if (record_idx > 0)
		{
				item.data.starred = true;
		}
		this.changeView('SessionDetails');
		
		var idx = Ext.Viewport.items.keys.indexOf("SessionDetails");
		Ext.Viewport.items.items[idx].setData(item.data);
		Ext.Viewport.getActiveItem().previous = previous;
	},
	onStarredSessionSelected:function(container, item){
		var previous = Ext.Viewport.getActiveItem();
		this.changeView('SessionDetails');
		
		var idx = Ext.Viewport.items.keys.indexOf("SessionDetails");
		Ext.Viewport.items.items[idx].setData(item.data.session);
		Ext.Viewport.getActiveItem().previous = previous;
	},
	changeView: function(view_name) {		
		if (Ext.Viewport.items.keys.indexOf(view_name) < 0){
			var view = this.getView(view_name);
			Ext.Viewport.add(view.create());
		};
		
		Ext.Viewport.setActiveItem(Ext.Viewport.items.keys.indexOf(view_name));
	
		if (Ext.Viewport.getActiveItem().doRefreshList){
			Ext.Viewport.getActiveItem().doRefreshList();
		}
	},
	onBack: function(sender) { 
				  this.getSessionsStoreStore().clearFilter();
				  this.getSpeakerStoreStore().clearFilter();
				  if (sender.parent.parent.previous){
						this.changeView(sender.parent.parent.previous.id);
				  } else {
					this.changeView("Menu");
				  }
		  }
});
