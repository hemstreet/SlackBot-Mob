***This bot provides a nodejs bot into slack. this will not work with `/` commands. For that you will need to register an app.***

Setup
==
Make sure we have the npm modules installed
`npm install`

Register for a new API key for your SlackBot
Get the API key from https://{{MySlackTeam}}.slack.com/services/new/bot

Get the token, you can either put this in the `config/config.json` file as `apiKey : "API-KEY-GOES-HERE"` or you can
pass it in at runtime with the `--apikey` flag

```
node bot.js --apikey api-key-goes-here
```

To add more functionality to this bot, update the `actions.json` file in side the config folder. Enter the callbacks' name
as the key and give it which channels to output to, also set which keywords trigger these callbacks.
Don't forget to change `lib/Actions.js` to reflect your newly created callbacks.

You can also change the bot's name on runtime by passing it as a flag like we did above.
```
node bot.js --name "Norris Chuck"
```

@TODO
===
    * Add controller to Actions config to separate Action code form Actions.js
    * Implement dynamic bot name / pictures / emoji
    * Multiple keywords to be satisfied before triggering callbacks
    * Multiple Aliases for bots
    * Implement Monkey Learn
    * Per channel response and accept commands