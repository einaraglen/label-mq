import { Redis } from "ioredis";
import { PrintMessage } from "./protobuf/PrintMessage";

const run = () => {
    const sub = new Redis(process.env.REDIS_URL!)
    const pub = new Redis(process.env.REDIS_URL!)


    sub.subscribe("test", (err, count) => {
        if (err) {
          // Just like other commands, subscribe() can fail for some reasons,
          // ex network issues.
          console.error("Failed to subscribe: %s", err.message);
        } else {
          // `count` represents the number of channels this client are currently subscribed to.
          console.log(
            `Subscribed successfully! This client is currently subscribed to ${count} channels.`
          );
        }
      });

      sub.on("messageBuffer", (channel, message) => {
        const decoded = PrintMessage.decode(message)
        console.log(channel.toString(), decoded);
      });

      setInterval(() => {
        const message = new PrintMessage({ page: "test", label_count: 1, user_id: "abc", created_at: new Date().toISOString(), version: "0.5.0"  })
        const array = PrintMessage.encode(message).finish()
        pub.publish("test", Buffer.from(array));
      }, 5000);
}

export default run;