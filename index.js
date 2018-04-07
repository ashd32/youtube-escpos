const escpos = require("escpos");

const YouTube = require("youtube-live-chat");
const yt = new YouTube("[ CHANNEL ID HERE ]", "[ API KEY HERE ]");

yt.on("ready", () => {
	console.log("[youtube-escpos] Connected to YT Stream");
	yt.listen(1000);
});

var queue = [];
var isPrinting = false;
var checkCount = 0;

const ESC = "\u001B";
const BoldOn = ESC + "E" + "\u0001";
const BoldOff = ESC + "E" + "\0";

const device  = new escpos.USB();
const printer = new escpos.Printer(device);
 
yt.on("chat", data => {
	if(checkCount > 5){
		if(data.snippet.displayMessage.length < 140 && data.snippet.type != "superChatEvent"){
			queue.push(data.authorDetails.displayName + ": "  + data.snippet.displayMessage);
		} else if(data.snippet.type == "superChatEvent"){
			queue.push("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" + BoldOn + data.authorDetails.displayName + ": "  + data.snippet.displayMessage + BoldOff + "\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
		}
	}
});

function handleQueue(){
	if(queue.length > 0){
		device.open(function(){
			printer.text(queue.join("\n")).close();
			queue = [];
		});
	}
}

setInterval(function(argument) {
	if(queue.length > 0 && checkCount > 0){
		handleQueue();
	}

	checkCount++;
}, 1000)
 
yt.on("error", error => {
	console.error("[youtube-escpos] Connection Error: " + error);
});