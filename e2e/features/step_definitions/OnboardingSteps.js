import { Given, setDefaultTimeout } from "@cucumber/cucumber";
// setDefaultTimeout add timeouts to all steps in the file

setDefaultTimeout(120 * 1000);

// we can override the timeout with an extra paramter after the text
// text here exaclty the same as the feature file
Given("I start Detox", async () => {
  console.log("Test started");
});
