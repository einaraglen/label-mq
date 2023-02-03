import Redis from "ioredis";

declare global {
    // allow global `var` declarations
    // eslint-disable-next-line no-var
    var publisher: Redis | undefined;
  }

  const Publisher = () => {
    const client = new Redis(process.env.REDIS_URL!)
    global.publisher = client;
    return client
  }

  const publisher = global.publisher || Publisher();
  
  export default publisher