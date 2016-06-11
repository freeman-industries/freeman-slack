module.exports = function(product_name, slack_hooks){
    var slack_info = [];
    var slack_bug = [];

    slack_hooks.forEach(function(account){
        var Slack = require('slack-notify')(account.hook);

        var info = Slack.extend({
            channel: account.channel,
            icon_emoji: account.info_emoji,
            username: product_name
        });

        var bug = Slack.extend({
            channel: account.channel,
            icon_emoji: account.bug_emoji,
            username: product_name
        });

        slack_info.push(info);
        slack_bug.push(bug);
    });

    return {
        info: function(options){
            slack_info.forEach(function(slack){
                slack(options);
            });
        },

        bug: function(options){
            slack_bug.forEach(function(slack){
                slack(options);
            });
        }
    }
};