Ext.define('Prdc.view.SpeakerDetails', {
	id:'SpeakerDetails',
	extend: 'Ext.Panel',
	setData: function (data) {
		this.items.items[0].setTitle(data.first_name +' ' + data.last_name);
		this.items.items[1].setData(data);
	},
	config: {
		styleHtmlContent: true,
		items:[
			{
				xtype:"toolbar",
				title: "speakername",
				docked:"top",
				items: [
					{
						id: "detailsback",
						xtype:"button",
						ui   : 'back',
						text:"back"
					}
				]
			},
			{
				xtype:"panel",
				tpl:"<div ><div class='details'><img src='http://prdc.herokuapp.com/assets/speakers/{picture}'/><div>{bio}</div></div></div>"
			}
		]
	},
	initialize: function() {
		this.setScrollable(true);
	}
});