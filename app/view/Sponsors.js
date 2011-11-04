Ext.define('Prdc.view.Sponsors', {
	id:'Sponsors',
	extend:'Ext.Panel',
	config: {
			fullscreen: true,
			autoDestroy: true,
			styleHtmlContent: true,
			layout: 'card',
			items: [
				{
					xtype:"toolbar",
					title:"Sponsor",
					docked: 'top',
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
							xtype:"panel",
							scroll:"vertical",
							html:"<h3>This mobile-app provided by:</h3> <h4>George Chen</h4><h5>Monstercoder</h5><div class='details'><div class='header'><img src='resources/images/georgechen2.jpg'/><div class='info'><img src='resources/images/location.png'>Winnipeg MB<br/><img src='resources/images/email.png'>MonsterCoder@gmail.com<br/><img src='resources/images/twitter.png'>@Georgec_monster<br/><img src='resources/images/website.png'>http://github.com/Monster</div></div><h4>Amir Barylko</h4><h5>Maventhought Inc.</h5><div class='header'><img src='resources/images/amirbarylko.jpg' /><div class='info'><img src='resources/images/location.png'>Winnipeg MB<br/><img src='resources/images/email.png'>amir@barylko.com<br/><img src='resources/images/twitter.png'>abarylko<br/><img src='resources/images/website.png'>http://www.maventhought.com</div></div>"
				}
			]
		}
});

