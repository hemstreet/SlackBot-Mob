Setup
==

Before getting stared, register for a new API key for your SlackBot
Get the API key from https://{{MySlackTeam}}.slack.com/services/new/bot

Get the token, you can either put this in the `config/config.json` file as `apiKey : "API-KEY-GOES-HERE"` or you can
pass it in at runtime with the `--apikey` flag

```
npm install
node bot.js --apikey api-key-goes-here
```

To add functionality and add more functionality update the `actions.json` file in side the config folder. Enter the callbacks' name
as the key and give it which channels to output to, also set which keywords trigger these callbacks.
Don't forget to change `lib/Actions.js` to reflect your newly created callbacks.

@TODO
===
    * Add controller to Actions config to separate Action code form Actions.js