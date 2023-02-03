import { Channels } from "./Subscribe";

const Messages = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (subscriber == null) {
      return reject(
        new Error("Cannot listen to subscriber before initialized")
      );
    }

    subscriber.on("messageBuffer", (channel, buffer) => {
      switch (channel.toString()) {
        case Channels.PRINT: 
            break;
        case Channels.PING:
            break;
        case Channels.ERROR:
            break;        
      }
    });

    resolve();
  });
};

export default Messages;
