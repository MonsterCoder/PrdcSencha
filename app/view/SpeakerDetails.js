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
				tpl:"<div class='details'><div class='header'><img src='http://prdc.herokuapp.com/assets/speakers/{picture}'><div class='info'><img src='resources/images/location.png'>{location}<br/><img src='resources/images/email.png'>{email}<br/><img src='resources/images/blog.png'>{blog}<br/><img src='resources/images/twitter.png'>{twitter}<br/><img src='resources/images/website.png'>{website}</div></div><div>{bio}</div>"
			}
		]
	},
	initialize: function() {
		this.setScrollable(true);
	}
});