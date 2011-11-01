Ext.define('Prdc.view.Twitter',{
	id:'Twitter',
	extend: 'Ext.Panel',
	config: {
		fullscreen: true,
		autoDestroy: true,
		styleHtmlContent: true,
		layout: 'card',
		items: [
			{
				xtype:"toolbar",
				title:"Twitter",
				docked: 'top',
				items: [
					{
						id:'homebutton',
						xtype:'button',
						ui:'back',
						text:'back'
					}
				]
			},
			{
						id:"Twitterlist",
						xtype:"list",
						store:"TwitterStore",
						scroll:"vertical",
						itemTpl: "<div class='twitter'><img src ='{profile_image_url}'/><a href='http://twitter.com/{from_user}'>{from_user}</a>&nbsp;</br><span class='tweet_content'>{text}</span></div>"
			}
		]
	}
})