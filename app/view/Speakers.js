Ext.define('Prdc.view.Speakers', {
	id:"Speakers",
	extend: 'Ext.Container',
	config: {
		fullscreen: true,
		autoDestroy: true,
		styleHtmlContent: true,
		layout: 'card',
		items: [
			{
				xtype:"toolbar",
				title:"Speakers",
				docked: 'top',
				ui:'light',
				items: [
					{
						id:'homebutton',
						xtype:'button',
						ui   : 'back',
						text:'back'
					}
				]
			},
			{
						id:"speakerslist",
						xtype:"list",
						store:"SpeakerStore",
						scroll:"vertical",
						itemTpl: "<h5>{first_name} {last_name}</h5>"
			}
		]
	},
	doRefreshList: function(){
	if (this.items.items[1].getStore()){
		this.items.items[1].doRefresh(this.items.items[1]);
		}
	}
});