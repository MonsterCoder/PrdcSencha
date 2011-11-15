Ext.define('Prdc.store.MenuItems', {
	extend: 'Ext.data.Store',
	model: 'Prdc.model.MenuItem',
	data: [
			{name: 'Sessions', image:'session.png'},
			{name: 'Speakers', image:'speaker.png'},
			{name: 'Starred', image:'favourate.png'},
			{name: 'Twitter', image:'twitter2.png'},
			{name: 'Schedule', image:'schedule.png'},
			{name: 'Map', image:'locate.png'},
			{name: 'Sponsors', image:'sponsor.png'}
	],
	autoLoad:true
});