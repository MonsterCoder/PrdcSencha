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
							html:'<h4>This mobile-app provided by:</h4> <div class="sponsor"><img src="../../resources/images/georgechen2.jpg" /> <div><h5>George Chen, (MonsterCoder)</h5><h5>twitter: Georgec_monster</h5><h5>email: MonsterCoder@gmail.com</h5></div></div><div class="sponsor"><img src="../../resources/images/amirbarylko.jpg" /><div><h5>Amir Barylko, <a href="http://www.maventhought.com">MavenThought Inc</a></h5><h5>twitter: abarylko<h5/><h5>email: amir@barylko.com</h5><div/></div>'
				}
			]
		}
});