const login = require("facebook-chat-api");
const ownID = '100028584160601';		// Facebook Account ID to receive messages
const guestID = '100003590959766';		// Facebook Account ID to get messages from
const messagingAccount = {
	email: "",
	password: ""
}; // this account will be used to transfer messages.

login(messagingAccount, (err, api) => {
    if(err) return console.error(err);
    api.listen((err, message) => {
		console.log(message);
		if (message.senderID == guestID) {
			api.sendMessage(message.body, ownID);
		} else if (message.senderID == ownID) {
			api.sendMessage(message.body, guestID);
		}
    });
});









































