Ext.define('Prdc.view.Menu', {
	id:"Menu",
    extend: 'Ext.Container',
    config: {
        fullscreen: true,
        layout: {
			type: 'card',
			animation: {
				type: 'slide',
				direction: 'left'
			}
		},
        items: [
			{
				xtype:'toolbar',
				title:'Prdc2011',
				ui:'light',
				docked:'top'
			},
            {
				id: 'main_menu',
                xtype: 'list',
				store: 'MenuItems',	
				itemTpl: '<div class="main_menu_item"><img src="resources/images/{image}" alt="{image}" class="pic"/><span> {name}</span></div>'
            }
        ]		
    }
});