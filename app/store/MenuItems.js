Ext.define('Prdc.store.MenuItems', {
	extend: 'Ext.data.Store',
	model: 'Prdc.model.MenuItem',
	data: [
			{name: 'Sessions', image:'session.png'},
			{name: 'Speakers', image:'speaker.png'},
			{name: 'Starred', image:'user_fave.png'},
			{name: 'Twitter', image:'twitter.png'},
			{name: 'Schedule', image:'schedule.png'},
			{name: 'Map', image:'locate.png'},
			{name: 'Sponsors', image:'sponsor.png'}
	],
	autoLoad:true
});