"use strict";

var config = require('./config/config'),
    actions = require('./config/actions'),
    SlackBot = require('slackbots'),
    utils = require('./lib/utilities'),
    argv = require('yargs').argv,
    BotActions = require('./lib/Actions'),
    _ = require('underscore');

// create a bot
var bot = new SlackBot({
    token: argv.apikey || config.apiKey, // Add a bot https://my.slack.com/services/new/bot and put the token
    name: argv.name || config.botName || 'Chuck Norris'
});

bot.on('start', function () {
    utils.init(bot, config);

    var botId = utils.getBotId();
    var botActions = new BotActions(bot);

    bot.on('message', function (data) {

        var actionTaken = false;
        // Is a message and is it from someone other than the bot itself?
        if (data.type == 'message' && botId !== data.user) {

            _.each(actions, function (value, key) {
                if(!actionTaken) {
                    if (utils.messageContains(data.text, value.keywords)) {
                        actionTaken = true;
                        botActions[key]({
                            data: data,
                            config: value
                        });
                    }
                }
                else
                {
                    // Action has already been taken on the message
                }
            });
        }
    });
});