# youtube-escpos
🖨 A node program that prints YouTube live chat... live.

## So... what's this for?
This is a program created for '[Print your Messages](https://twitter.com/williamsthing/status/982246629913735168)', a live stream from 6/4/18 to 7/4/18. ALl messages in YouTube chat were printed on standard, 58mm reciept paper.

## Why?
Art.

## How can I install this on my computer and run this on my printer?
1. Register with the YouTuhe Data API [here](https://developers.google.com/youtube/v3/getting-started).
2. Clone the repo using `git clone https://github.com/williamsthing/youtube-escpos.git` and then run `cd youtube-escpos && npm install`.
3. You may need to edit the 'youtube-live-chat' moduele with the code found [here](https://github.com/Hennamann/youtube-live-chat).
5. Replace the respected fields in index.js with a channel ID and your YouTube API key.
6. Plug in your printer, run `node index.js`, and you're good to go!

## I don't wanna go to all the hassle of buying a printer and setting this up, is there an API I can use to send a string and then get a base64-encoded-image response?
Not right now, but I'm working on it!

## I like this. Will you do it again?
Maybe. [Follow me on Twitter (@williamsthing)](https://twitter.com/williamsthing) for updates.