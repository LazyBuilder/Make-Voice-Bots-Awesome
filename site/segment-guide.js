const SEGMENT_GUIDE=[
  {
    "id": 1,
    "slug": "turn-taking",
    "title": "Turn-Taking and Floor Control",
    "summary": "Interruptions, overlap, and timing failures that make the bot lose the conversation.",
    "post": "possible",
    "count": 11
  },
  {
    "id": 2,
    "slug": "pauses",
    "title": "Hesitation, Pauses, and Floor-Holding",
    "summary": "Thinking, lookup pauses, and unfinished answers mistaken for the end of a turn.",
    "post": "possible",
    "count": 8
  },
  {
    "id": 3,
    "slug": "self-repair",
    "title": "Disfluency and Self-Repair",
    "summary": "Corrections and restarts that leave the bot acting on the wrong value or intent.",
    "post": "direct",
    "count": 8
  },
  {
    "id": 4,
    "slug": "non-speech-sounds",
    "title": "Non-Speech Sounds That Look Like Speech Events",
    "summary": "Coughs, laughter, and everyday noise that trigger false speech events.",
    "post": "possible",
    "count": 8
  },
  {
    "id": 5,
    "slug": "background-speech",
    "title": "Background Speech and Multi-Party Calls",
    "summary": "Other voices mistaken for instructions from the authorized caller.",
    "post": "direct",
    "count": 8
  },
  {
    "id": 6,
    "slug": "phone-and-devices",
    "title": "Phone-Channel and Device Behaviors",
    "summary": "Echo, broken audio, keypads, and automated systems that disrupt real calls.",
    "post": "possible",
    "count": 10
  },
  {
    "id": 7,
    "slug": "value-capture",
    "title": "Slot-Filling and Value-Correction Behaviors",
    "summary": "Names, dates, amounts, and identifiers captured or corrected incorrectly.",
    "post": "direct",
    "count": 9
  },
  {
    "id": 8,
    "slug": "intent-and-repair",
    "title": "Intent Ambiguity and Conversation Repair",
    "summary": "Changed intentions, conditional answers, and requests the bot fails to follow.",
    "post": "direct",
    "count": 10
  },
  {
    "id": 9,
    "slug": "emotion-and-trust",
    "title": "Emotional, Social, and Trust Behaviors",
    "summary": "Frustration, distress, and privacy concerns the bot fails to respond to.",
    "post": "possible",
    "count": 8
  },
  {
    "id": 10,
    "slug": "accessibility",
    "title": "Speaker Variation and Accessibility",
    "summary": "Different accents, voices, and speaking patterns the bot struggles to support.",
    "post": "possible",
    "count": 10
  },
  {
    "id": 11,
    "slug": "bot-caused-behaviors",
    "title": "Bot-Caused Human Behaviors",
    "summary": "Long prompts, delays, and rigid questions that create the caller’s frustration.",
    "post": "possible",
    "count": 8
  },
  {
    "id": 12,
    "slug": "consent-and-boundaries",
    "title": "Compliance, Consent, and Boundary Behaviors",
    "summary": "Permission, refusal, sensitive data, and escalation boundaries the bot misses.",
    "post": "direct",
    "count": 6
  }
];