import { BeforeAll, Before, AfterAll } from "@cucumber/cucumber";
import { init, cleanup } from "detox";
import { detox as config } from "../../../package.json";

// cucumber by default has 5sec of timeout to initalize detox but sometimes are
// issues out of control, such as too much ram especially when we run in paralel
// so in order to avoid more issues is good to add extra timeout.
BeforeAll({ timeout: 60 * 1000 }, async () => {
  await init(config);
});

Before(async () => {
  await device.launchApp({
    newInstance: true, // asure the app lunch every time we are running a new scenario.
  });
});

AfterAll(async () => {
  await cleanup();
});
