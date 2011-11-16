Ext.define("Prdc.model.Schedule", {
								extend: 'Ext.data.Model',
								fields: ['id', 'start', 'finish', 'main','session_id', 'room'],
								gettime: function(){
								        var d = this.get('start');
           								var hour = d.split('T')[1].split(':')[0];
										var minu = d.split('T')[1].split(':')[1];
									    return "12:00";
								}
							});