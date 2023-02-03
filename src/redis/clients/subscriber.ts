import Redis from "ioredis";

declare global {
    // allow global `var` declarations
    // eslint-disable-next-line no-var
    var subscriber: Redis | undefined;
  }

  const Subscriber = () => {
    const client = new Redis(process.env.REDIS_URL!)
    global.subscriber = client;
    return client
  }

  const subscriber = global.subscriber || Subscriber();
  
  export default subscriber