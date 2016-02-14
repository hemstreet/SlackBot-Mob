var config = require('../config/config'),
    SlackBot = require('slackbots'),
    utils = require('./utilities'),
    BotActions = require('./Actions'),
    _ = require('underscore');

// create a bot
var bot = new SlackBot({
    token: config.apiKey, // Add a bot https://my.slack.com/services/new/bot and put the token
    name: config.name || 'norrisbot'
});

bot.on('start', function() {
    utils.init(bot, config);

    var botId = utils.getBotId();
    var botActions = new BotActions(bot);

    bot.on('message', function(data) {

        // Is a message and is it from someone other than the bot itself?
        if(data.type == 'message' && botId !== data.user) {

            _.each(config.actions, function(value, key) {
                if(utils.messageContains(data.text, value)) {

                    botActions[key]();
                }
            });
        }
    });
});