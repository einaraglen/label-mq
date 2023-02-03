import { Redis } from "ioredis";

export enum Channels {
  PING = "ping",
  PRINT = "print",
  ERROR = "error",
}

const Subscribe = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    const client = new Redis(process.env.REDIS_URL!)

    const channels = Object.keys(Channels).map((key) => Object(Channels)[key]);
  
    client.subscribe(...channels, (err, count) => {
      if (err) {
        return reject(err)
      }
  
      console.log(`Successfully subscribed to ${count} channels`)
      resolve()
    });

    client.on("messageBuffer", (channel, buffer) => {
      switch (channel.toString()) {
        case Channels.PRINT: 
            break;
        case Channels.PING:
            break;
        case Channels.ERROR:
            break;        
      }
    });
  })
};


export default Subscribe