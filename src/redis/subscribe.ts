export enum Channels {
  PING = "ping",
  PRINT = "print",
  ERROR = "error",
}

const Subscribe = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (subscriber == null) {
      return reject(new Error("Cannot listen to subscriber before initialized"))
    }

    const channels = Object.keys(Channels).map((key) => Object(Channels)[key]);
  
    subscriber.subscribe(...channels, (err, count) => {
      if (err) {
        return reject(err)
      }
  
      console.log(`Successfully subscribed to ${count} channels`)
      resolve()
    });
  })
};


export default Subscribe