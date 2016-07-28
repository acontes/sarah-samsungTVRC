
exports.action = function(data, callback, config, SARAH){
	console.log(config.description)

	var config=config.modules.SamsungTVRC
	var iptv=config.IPtv
	var modeltv=config.Modeltv

    var SamsungRemote = require('./lib/samsung-remote');

    var remote = new SamsungRemote({
       ip: iptv // required: IP address of your Samsung Smart TV
    });

	var commands =data.command

	commands.forEach(function(element, index, array) {
		remote.send(element, function callback(err) {
    		if (err) {
        		console.log( "impossible de faire l'action " + element);
    		}
		});
	});

   callback({ 'tts': ""});

}