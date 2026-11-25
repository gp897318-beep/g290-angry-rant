import { mkdirSync, writeFileSync } from "node:fs";

// One short rant about an everyday annoyance: the self-checkout machine
// accusing an innocent shopper of theft. 252 characters, inside the
// competition's 1-400 gate. The rant escalates in three beats: the
// accusation, the machine's own words turned against it, and the closing
// punch — we were both here, it watched me do the job it is complaining
// about. No throat-clearing, one concrete annoyance, every sentence
// earning its place.

// The rant in three beats, each one a named part so the escalation is
// visible in the code itself: the accusation, the machine's own words
// turned against it, and the closing punch. Joined with single spaces so
// the file reads exactly as the judge will see it.
const accusation =
  "The self-checkout machine has accused me of theft four times today and I haven't stolen anything.";
const machineWords =
  '"Unexpected item in the bagging area." The unexpected item is my groceries. That\'s the whole job.';
const punch = "I scanned it. You watched me scan it. We were both here.";

const rant = [accusation, machineWords, punch].join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", rant, "utf8");
