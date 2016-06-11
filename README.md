# freeman-slack
Publish messages to multiple Slack accounts &amp; channels simultaneously.

# use case
This is a wrapper for `slack-notify` (NPM module) with the added advantage of publishing to multiple accounts.

We use this so we can receive info and bug messages in the Freeman Industries Slack, and simultaneously publish the same messages to a channel our clients' Slack channels.

Someone who needs to publish a message to more than one Slack account will find this useful.

# initializing
```
var product_name = "A Freeman Industries node.js app";

var accounts = [{
    name: "Freeman Industries",
    channel: "#dedicated-app-channel",
    info_emoji: ":muscle:",
    bug_emoji: ":scream:",
    hook: "https://hooks.slack.com/services/..."
}, {
    name: "Client",
    channel: "#app-freeman-industries-made-for-us",
    info_emoji: ":ocean:",
    bug_emoji: ":volcano:",
    hook: "https://hooks.slack.com/services/..."
}]

var slack = require('freeman-slack')(product_name, accounts);
```

# available commands

## `slack.info`
Here's how we usually use it. `text` and `fields` are both required, even if empty string/object. You can have as many fields as you like. In this example `product_name` is a global, and `message` is a JS object that's been passed to a function. 
```
slack.info({
  text: 'Info message on ' + product_name + '!',
  fields: {
      'Body': id,
      'More info': JSON.stringify(message)
  }
});
```

## `slack.bug`
Pretty much the same as above. Customize to your heart's content!!
```
slack.bug({
  text: 'New bug on ' + product_name + '!',
  fields: {
      'Function': id,
      'Error body': JSON.stringify(message)
  }
});
```

# contributions

All contributions are welcome 🌞
