Setup
==

Before getting stared, register for a new API key for your SlackBot
Get the API key from https://{{MySlackTeam}}.slack.com/services/new/bot

Get the token and rename `config/_config.json` to `config/config.json`, replace the apiKey value for your newly generated API Key
Update the `actions` object to reflect your keywords and callback method names inside `lib/Actions.js`
```
npm install
node bot.js
```