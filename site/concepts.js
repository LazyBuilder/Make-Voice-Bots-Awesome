const CONCEPTS={
  "1": {
    "title": "An interruption should change who has the floor",
    "caption": "Caller speech and bot speech should take turns. Continuing the old response can lose the new intent.",
    "bad": [
      [
        "Bot",
        "Keeps explaining"
      ],
      [
        "Caller",
        "“No, wait—billing.”"
      ],
      [
        "Bot",
        "Continues the old topic"
      ],
      [
        "Outcome",
        "New intent is lost"
      ]
    ],
    "good": [
      [
        "Bot",
        "Starts explaining"
      ],
      [
        "Caller",
        "“No, wait—billing.”"
      ],
      [
        "Bot",
        "Stops and listens"
      ],
      [
        "Outcome",
        "Moves to billing"
      ]
    ],
    "takeaway": "Yield to a genuine interruption, capture the new intent, then continue.",
    "art": "segment-01-natural-labeled.png",
    "artAlt": "Taking turns. Left, problem: Both keep talking. Right, better handling: The bot stops and listens. The phone caller is labeled USER and the audio box is labeled AI VOICE BOT.",
    "artLeft": "Both keep talking",
    "artRight": "The bot stops and listens"
  },
  "2": {
    "title": "A pause is not always the end of an answer",
    "caption": "The caller may be thinking, finding a card, or reading a value in chunks.",
    "bad": [
      [
        "Caller",
        "“My number is…”"
      ],
      [
        "Pause",
        "Still looking it up"
      ],
      [
        "Bot",
        "Responds too early"
      ],
      [
        "Outcome",
        "Incomplete number"
      ]
    ],
    "good": [
      [
        "Caller",
        "“My number is…”"
      ],
      [
        "Pause",
        "Bot allows time"
      ],
      [
        "Caller",
        "Finishes the number"
      ],
      [
        "Outcome",
        "Complete value checked"
      ]
    ],
    "takeaway": "Keep incomplete answers open and use a helpful, bounded check-in.",
    "art": "segment-02-natural-labeled.png",
    "artAlt": "A pause is not the end. Left, problem: The bot cuts in too soon. Right, better handling: Give the user time to finish. The phone caller is labeled USER and the audio box is labeled AI VOICE BOT.",
    "artLeft": "The bot cuts in too soon",
    "artRight": "Give the user time to finish"
  },
  "3": {
    "title": "The correction must replace the earlier value",
    "caption": "Understanding the words is only half the task. The active value must change too.",
    "bad": [
      [
        "Caller",
        "“Tuesday…”"
      ],
      [
        "Caller",
        "“…no, Wednesday.”"
      ],
      [
        "State",
        "Tuesday survives"
      ],
      [
        "Outcome",
        "Wrong booking"
      ]
    ],
    "good": [
      [
        "Caller",
        "“Tuesday…”"
      ],
      [
        "Caller",
        "“…no, Wednesday.”"
      ],
      [
        "State",
        "Wednesday replaces it"
      ],
      [
        "Outcome",
        "Correct date confirmed"
      ]
    ],
    "takeaway": "Update the corrected field before letting it reach the next action.",
    "art": "segment-03-natural-labeled.png",
    "artAlt": "Listen to the correction. Left, problem: The old date stays. Right, better handling: Use the corrected date. The phone caller is labeled USER and the audio box is labeled AI VOICE BOT.",
    "artLeft": "The old date stays",
    "artRight": "Use the corrected date"
  },
  "4": {
    "title": "Sound detected does not mean instruction received",
    "caption": "A cough or sudden noise can trigger speech detection without carrying a request.",
    "bad": [
      [
        "Bot",
        "Is answering"
      ],
      [
        "Sound",
        "Caller coughs"
      ],
      [
        "Detector",
        "Treats cough as a turn"
      ],
      [
        "Outcome",
        "Answer is cut off"
      ]
    ],
    "good": [
      [
        "Bot",
        "Is answering"
      ],
      [
        "Sound",
        "Caller coughs"
      ],
      [
        "Detector",
        "Rejects noise-only event"
      ],
      [
        "Outcome",
        "Conversation continues"
      ]
    ],
    "takeaway": "Separate non-speech events from meaningful speech without suppressing quiet answers.",
    "art": "segment-04-natural-labeled.png",
    "artAlt": "Noise is not a request. Left, problem: A cough stops the answer. Right, better handling: Ignore noise, keep listening. The phone caller is labeled USER and the audio box is labeled AI VOICE BOT.",
    "artLeft": "A cough stops the answer",
    "artRight": "Ignore noise, keep listening"
  },
  "5": {
    "title": "The loudest voice may not be the authorized caller",
    "caption": "Intelligible background speech can still be unrelated to the bot’s task.",
    "bad": [
      [
        "Caller",
        "Consults a helper"
      ],
      [
        "Helper",
        "“Wednesday!”"
      ],
      [
        "Bot",
        "Accepts without checking"
      ],
      [
        "Outcome",
        "Unverified instruction"
      ]
    ],
    "good": [
      [
        "Caller",
        "Consults a helper"
      ],
      [
        "Helper",
        "“Wednesday!”"
      ],
      [
        "Bot",
        "Checks with the caller"
      ],
      [
        "Outcome",
        "Caller confirms intent"
      ]
    ],
    "takeaway": "Confirm who is directing the action when speaker ownership is uncertain.",
    "art": "segment-05-natural-labeled.png",
    "artAlt": "Who is speaking?. Left, problem: The wrong voice is accepted. Right, better handling: Confirm with the caller. The phone caller is labeled USER and the audio box is labeled AI VOICE BOT.",
    "artLeft": "The wrong voice is accepted",
    "artRight": "Confirm with the caller"
  },
  "6": {
    "title": "A broken signal can become a broken value",
    "caption": "Gaps in the phone channel should not be filled with confident guesses.",
    "bad": [
      [
        "Caller",
        "Reads an account ID"
      ],
      [
        "Channel",
        "Drops part of the audio"
      ],
      [
        "Bot",
        "Guesses the missing part"
      ],
      [
        "Outcome",
        "Wrong record lookup"
      ]
    ],
    "good": [
      [
        "Caller",
        "Reads an account ID"
      ],
      [
        "Channel",
        "Drops part of the audio"
      ],
      [
        "Bot",
        "Asks for the affected part"
      ],
      [
        "Outcome",
        "Complete ID checked"
      ]
    ],
    "takeaway": "Recover missing input or use a supported fallback before continuing.",
    "art": "segment-06-natural-labeled.png",
    "artAlt": "A broken call needs repair. Left, problem: Missing audio becomes a guess. Right, better handling: Ask for the missing part. The phone caller is labeled USER and the audio box is labeled AI VOICE BOT.",
    "artLeft": "Missing audio becomes a guess",
    "artRight": "Ask for the missing part"
  },
  "7": {
    "title": "A small capture error can travel a long way",
    "caption": "The same mistaken field can affect the booking and the customer record.",
    "bad": [
      [
        "Caller",
        "Corrects a date"
      ],
      [
        "Capture",
        "Old date is retained"
      ],
      [
        "Booking",
        "Uses the old date"
      ],
      [
        "Record",
        "Stores the wrong date"
      ]
    ],
    "good": [
      [
        "Caller",
        "Corrects a date"
      ],
      [
        "Capture",
        "Replaces the old value"
      ],
      [
        "Check",
        "Confirms the final date"
      ],
      [
        "Systems",
        "Use one correct value"
      ]
    ],
    "takeaway": "Validate the final field before it is used by downstream systems.",
    "art": "segment-07-natural-labeled.png",
    "artAlt": "One value, many systems. Left, problem: Wrong data spreads. Right, better handling: Confirm before sending. The phone caller is labeled USER and the audio box is labeled AI VOICE BOT.",
    "artLeft": "Wrong data spreads",
    "artRight": "Confirm before sending"
  },
  "8": {
    "title": "“Yes, but…” is a condition—not blanket permission",
    "caption": "The condition must remain attached to the intended action.",
    "bad": [
      [
        "Caller",
        "“Yes, if there’s no fee.”"
      ],
      [
        "Bot",
        "Keeps only “yes”"
      ],
      [
        "Action",
        "Proceeds with a fee"
      ],
      [
        "Outcome",
        "Condition ignored"
      ]
    ],
    "good": [
      [
        "Caller",
        "“Yes, if there’s no fee.”"
      ],
      [
        "Bot",
        "Preserves the condition"
      ],
      [
        "Check",
        "Verifies the fee first"
      ],
      [
        "Outcome",
        "Proceeds only if allowed"
      ]
    ],
    "takeaway": "Reevaluate pending actions when intent, conditions, or permission change.",
    "art": "segment-08-natural-labeled.png",
    "artAlt": "A condition changes the answer. Left, problem: The bot hears only yes. Right, better handling: Keep the condition. The phone caller is labeled USER and the audio box is labeled AI VOICE BOT.",
    "artLeft": "The bot hears only yes",
    "artRight": "Keep the condition"
  },
  "9": {
    "title": "Repeating the prompt can amplify the frustration",
    "caption": "An emotional response may be a signal that the service flow has already failed.",
    "bad": [
      [
        "Caller",
        "“I already told you.”"
      ],
      [
        "Bot",
        "Asks the same question"
      ],
      [
        "Caller",
        "Becomes more frustrated"
      ],
      [
        "Outcome",
        "Trust declines"
      ]
    ],
    "good": [
      [
        "Caller",
        "“I already told you.”"
      ],
      [
        "Bot",
        "Acknowledges the effort"
      ],
      [
        "Flow",
        "Uses the earlier answer"
      ],
      [
        "Outcome",
        "Offers a useful next step"
      ]
    ],
    "takeaway": "Address the service need behind the reaction instead of forcing the same loop.",
    "art": "segment-09-natural-labeled.png",
    "artAlt": "Trust needs a useful response. Left, problem: The same question again. Right, better handling: Acknowledge and move forward. The phone caller is labeled USER and the audio box is labeled AI VOICE BOT.",
    "artLeft": "The same question again",
    "artRight": "Acknowledge and move forward"
  },
  "10": {
    "title": "Repeating the same failure is not a fallback",
    "caption": "Different speech patterns need enough time and a usable path to completion.",
    "bad": [
      [
        "Caller",
        "Uses slower speech"
      ],
      [
        "Bot",
        "Cuts off the answer"
      ],
      [
        "Loop",
        "Asks for the same input"
      ],
      [
        "Outcome",
        "Caller remains blocked"
      ]
    ],
    "good": [
      [
        "Caller",
        "Uses slower speech"
      ],
      [
        "Bot",
        "Allows time to finish"
      ],
      [
        "Fallback",
        "Offers another route"
      ],
      [
        "Outcome",
        "Task can continue"
      ]
    ],
    "takeaway": "Support the speaker’s pace and make an alternative route reachable.",
    "art": "segment-10-natural-labeled.png",
    "artAlt": "Make room for different voices. Left, problem: The caller gets stuck. Right, better handling: Allow time or another route. The phone caller is labeled USER and the audio box is labeled AI VOICE BOT.",
    "artLeft": "The caller gets stuck",
    "artRight": "Allow time or another route"
  },
  "11": {
    "title": "The bot can create the behavior it struggles with",
    "caption": "A long prompt can provoke a barge-in, which is then mishandled as a user problem.",
    "bad": [
      [
        "Bot",
        "Long, rigid prompt"
      ],
      [
        "Caller",
        "Interrupts to answer"
      ],
      [
        "Bot",
        "Misses the interruption"
      ],
      [
        "Outcome",
        "Frustration and repair"
      ]
    ],
    "good": [
      [
        "Bot",
        "One concise question"
      ],
      [
        "Caller",
        "Answers naturally"
      ],
      [
        "Bot",
        "Listens and confirms"
      ],
      [
        "Outcome",
        "Clear next step"
      ]
    ],
    "takeaway": "Fix prompt design and timing as well as interruption detection.",
    "art": "segment-11-natural-labeled.png",
    "artAlt": "Good prompts leave room to answer. Left, problem: Long prompts overwhelm. Right, better handling: One question, then listen. The phone caller is labeled USER and the audio box is labeled AI VOICE BOT.",
    "artLeft": "Long prompts overwhelm",
    "artRight": "One question, then listen"
  },
  "12": {
    "title": "A restriction has to survive all the way to the action",
    "caption": "Accurate transcription does not guarantee that the caller’s boundary is respected.",
    "bad": [
      [
        "Caller",
        "“Don’t record my card.”"
      ],
      [
        "Bot",
        "Treats it as full consent"
      ],
      [
        "Flow",
        "Continues unchanged"
      ],
      [
        "Outcome",
        "Stated limit is missed"
      ]
    ],
    "good": [
      [
        "Caller",
        "“Don’t record my card.”"
      ],
      [
        "Bot",
        "Preserves the restriction"
      ],
      [
        "Flow",
        "Uses an approved route"
      ],
      [
        "Outcome",
        "Boundary is respected"
      ]
    ],
    "takeaway": "Stop or redirect steps that cannot honor the stated permission limits.",
    "art": "segment-12-natural-labeled.png",
    "artAlt": "Respect the caller's limits. Left, problem: A restriction is ignored. Right, better handling: Stop or use an approved route. The phone caller is labeled USER and the audio box is labeled AI VOICE BOT.",
    "artLeft": "A restriction is ignored",
    "artRight": "Stop or use an approved route"
  }
};