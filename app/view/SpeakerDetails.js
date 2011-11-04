Ext.define('Prdc.view.SpeakerDetails', {
	id:'SpeakerDetails',
	extend: 'Ext.Panel',
	setData: function (data) {
		this.items.items[0].setTitle(data.first_name +' ' + data.last_name);
		this.items.items[1].setData(data);
	},
	config: {
		styleHtmlContent: true,
		layout: 'card',
		items:[
			{
				xtype:"toolbar",
				title: "speakername",
				docked:"top",
				ui:'light',
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
				tpl:"<div class='details'><div class='header'><img src='http://prdc.herokuapp.com/assets/speakers/{picture}'><div class='info'><h5>{location}</h5><h5>{email}</h5><h5>{blog}</h5><h5>{twitter}</h5><h5>{website}</h5></div></div><div>{bio}</div>"
			}
		]
	},
	initialize: function() {
		this.setScrollable(true);
	}
});