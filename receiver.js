const amqp = require("amqplib/callback_api");

amqp.connect("amqp://wdelgado:wdelgado@localhost:8888", (connError, conneciton) => {
    if (connError) {
        throw connError;
    }
    conneciton.createChannel((channelError, channel) => {
        if (channelError) {
            throw channelError;
        }

        const QUEUE = "codingtest";
        channel.assertQueue(QUEUE);

        channel.consume(QUEUE, (msg) => {
            console.log(`Message received: ${msg.content.toString()}`);
        })
    });
});