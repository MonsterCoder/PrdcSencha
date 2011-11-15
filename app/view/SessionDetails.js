Ext.define('Prdc.view.SessionDetails', {
	id:'SessionDetails',
	extend:'Ext.Panel',
	setData: function (data) {
		this.items.items[0].items.items[1].data = data;
		this.items.items[0].items.items[2].data = data;
		this.items.items[1].setData(data);
		if (data.starred !== true) {
			this.items.items[0].items.items[2].iconElement.replaceCls('favourate','star');
		} else {
			this.items.items[0].items.items[2].iconElement.replaceCls('star','favourate');
		}
	},
	config: {
	    styleHtmlContent: true,
		layout: 'card',
		items: [
			{
				xtype: 'toolbar',
				docked:'top',
				ui:'light',
				items:[
					{
						id: 'sessiondetailsback',
						xtype:'button',
						ui   : 'back',
						text:'back'
					},
					{
						id: 'sessionspeaker',
						xtype:'button',
						ui   : 'back',
						text:'speaker'
					},
					{ 
						id: 'star',
						docked:'right',
						iconCls:'star'
					}
				]
			}, 
			{
				xtype:'panel',
				scroll:'vertical',
				tpl:Ext.create('Ext.XTemplate','<div class="details"><h4 class="session_title">{title}</h4><span class="tag">{tags}</span><h6><span> <tpl if="start != null"> {[this.formatDueDate(values.start)]} {[this.formatTime(values.start)]}</tpl></span><span> @ <tpl if="room != null"> {room}, <tpl else> TBA </tpl></span></h6><div>{abstract}</div></div>',{formatDueDate: function(date) {
                    date = date.split('T')[0];

                    var format = "M j";
                        parsed = new Date(Ext.Date.parse(date, "Y-m-d"));
                    return Ext.Date.format(parsed, format);
                                    },
               formatTime: function (date){
					var hour = date.split('T')[1].split(':')[0];
					var minu = date.split('T')[1].split(':')[1];
					var am = "PM";
					
					if (hour < "12") {
						am = "AM";
					}
					
                	return hour+':'+minu + ' ' +am;
                }
                                    
            }),
			}
		]
		
	},
	initialize: function() {
		this.setScrollable(true);
	}
});
