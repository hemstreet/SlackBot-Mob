var _ = require('underscore');

var utilities = {
    botId: null,
    bot: null,

    init: function(bot, config) {

        this.config = config;
        _.each(bot.users, function(value) {
            if(value.real_name == config.botName) {
                this.botId = value.id;
                this.bot = value;
            }
        }.bind(this));
    },

    getBotId: function() {
        return this.botId;
    },

    messageContains: function(haystack, needle) {
        var containsString = false;
        _.each(needle, function(value) {
            if(haystack.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                containsString = true;
                return;
            }
        });

        return containsString;
    }
};

module.exports = utilities;