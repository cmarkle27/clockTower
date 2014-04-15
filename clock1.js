var cronJob = require('cron').CronJob;
var exec = require("child_process").exec;
var shellOptions = { timeout: 10000, maxBuffer: 20000*1024 };

var runCron = function(message) {

	exec("afplay Alert.mp3", shellOptions, function (error, stdout, stderr) {
		if (error !== null) {
			console.log(error);
		}
	});

	exec("growlnotify -m \"" + message + '"' + " \"" + "clockTower" + '"', shellOptions, function (error, stdout, stderr) {
		if (error !== null) {
			console.log(error);
		}
	});

};

var job = new cronJob({
	// minute hour day month day-of-week
	cronTime: '00 55 15 * * *',
	onTick: function() {
		var currentTime = new Date();
		runCron("Go home it's " + currentTime);
	},
	start: false,
	timeZone: "America/New_York"
});

job.start();

// --------------------------------------------------------------------

var job = new cronJob({
	// minute hour day month day-of-week
	cronTime: '00 20 09 * * *',
	onTick: function() {
		var currentTime = new Date();
		runCron("Do Things it's " + currentTime);
	},
	start: false,
	timeZone: "America/New_York"
});

job.start();

console.log("clockTower.js started\n");