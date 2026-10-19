const DATA={
  "segments": [
    {
      "id": 1,
      "name": "Turn-Taking and Floor Control",
      "description": "Covers how users and bots manage “who has the floor.” Includes intentional interruptions, accidental interruptions, backchannels, overlap, latency-driven repetition, and cases where the bot speaks too early or waits too long.",
      "notes": [
        "Notes: The highest-risk items here are intentional barge-ins, cooperative completions, overlapping speech, and premature endpointing. These directly affect whether the bot understands who owns the floor and whether it captured the user’s full answer.",
        "Over-waiting has a low data score, but it can still be commercially damaging because it increases perceived latency and hang-ups. That impact is not fully captured by these three dimensions."
      ]
    },
    {
      "id": 2,
      "name": "Hesitation, Pauses, and Floor-Holding",
      "description": "Covers moments where the user pauses but has not finished speaking. Includes filled pauses, silent thinking, lookup pauses, memory search, breath pauses, and chunked reading of numbers or IDs.",
      "notes": [
        "Notes: The riskiest behavior here is chunked reading, especially for account numbers, claim numbers, addresses, dates, card details, order numbers, and confirmation codes.",
        "A subtle but important distinction: a pause is not always an end-of-turn. Sometimes it means “I am thinking,” “I am reading,” “I am looking something up,” or “I am still holding the floor.”"
      ]
    },
    {
      "id": 3,
      "name": "Disfluency and Self-Repair",
      "description": "Covers natural imperfections in spontaneous speech. Includes false starts, restarts, repetitions, stutters, abandoned phrases, and cases where the user corrects or replaces a value mid-sentence.",
      "notes": [
        "Notes: This is one of the highest-risk categories because the user is explicitly changing their mind or repairing their own speech. A bot that cannot understand repair will often preserve stale or wrong values.",
        "The key rule for this category: later corrected values usually supersede earlier values. For example, in “Tuesday — wait, no, Wednesday,” the business-critical value is Wednesday, not Tuesday."
      ]
    },
    {
      "id": 4,
      "name": "Non-Speech Sounds That Look Like Speech Events",
      "description": "Covers acoustic events that are not meaningful speech but may trigger the bot’s speech detection. Includes coughs, sighs, laughter, mouth sounds, keyboard noise, door slams, traffic, dogs, babies, or household noise.",
      "notes": [
        "Notes: These often look lower-risk than slot or intent errors, but they can create severe experience problems when repeated. A single cough is usually recoverable. Constant background noise can destroy the call.",
        "The main failure is not always wrong data. It is often false turn-taking: the bot stops talking, starts listening, or reprompts when no real user turn occurred."
      ]
    },
    {
      "id": 5,
      "name": "Background Speech and Multi-Party Calls",
      "description": "Covers speech that may be human but not necessarily directed at the bot. Includes side conversations, third-party helpers, speakerphone calls, TV or radio speech, children interrupting, and call-center floor noise.",
      "notes": [
        "Notes: This category is dangerous because the audio may contain perfectly valid human speech — but not speech intended for the bot.",
        "The critical distinction is:",
        "Speech detected does not mean user-directed instruction detected.",
        "For revenue-touching workflows, the bot must know whether the authorized caller, a helper, a background speaker, or a media source provided the information."
      ]
    },
    {
      "id": 6,
      "name": "Phone-Channel and Device Behaviors",
      "description": "Covers telephony and device-specific issues that distort the call. Includes speakerphone echo, low-bandwidth audio, packet loss, mute/unmute, Bluetooth switching, hold music, DTMF keypad input, voicemail, and bot-to-IVR interactions.",
      "notes": [
        "Notes: This category is easy to underestimate because it feels “technical,” not “behavioral.” But in phone production, device and channel behavior directly shape human behavior.",
        "The two highest-risk items here are another IVR/bot and DTMF mishandling. DTMF is especially important because users often assume keypad input is valid in phone systems."
      ]
    },
    {
      "id": 7,
      "name": "Slot-Filling and Value-Correction Behaviors",
      "description": "Covers high-risk information capture. Includes names, dates, times, emails, addresses, account numbers, payment amounts, spelled values, digit corrections, and ambiguous numbers like “fifteen” vs “fifty.”",
      "notes": [
        "Notes: This is probably the most directly revenue-touching category.",
        "These values often feed downstream tools: booking systems, payment processors, CRM updates, identity verification, shipping systems, claim systems, refund systems, and scheduling engines.",
        "The highest-risk slot types are:"
      ]
    },
    {
      "id": 8,
      "name": "Intent Ambiguity and Conversation Repair",
      "description": "Covers cases where the user’s intent changes, is unclear, or needs repair. Includes multi-intent turns, indirect answers, contradictory answers, “never mind,” clarification requests, user corrections, and requests for a human agent.",
      "notes": [
        "Notes: This is the category where bots often appear “stubborn.” The user may be clearly telling the system that something is wrong, but the bot continues executing the previous state.",
        "The highest-risk behaviors here are:"
      ]
    },
    {
      "id": 9,
      "name": "Emotional, Social, and Trust Behaviors",
      "description": "Covers emotional and social signals that affect the conversation. Includes frustration, anger, anxiety, sarcasm, distrust, privacy concerns, embarrassment, laughter, distress, or the user questioning whether the bot is legitimate.",
      "notes": [
        "Notes: This category is less about raw ASR and more about conversation judgment.",
        "A frustrated customer may not provide a clean intent like “I want escalation.” They may say:",
        "“This is the third time I’ve called.” “You people keep getting this wrong.” “I already gave you that.” “Can I please talk to someone who can help?”",
        "These are not just emotions. They are often operational signals: repeat contact, failed automation, escalation need, privacy concern, or trust breakdown."
      ]
    },
    {
      "id": 10,
      "name": "Speaker Variation and Accessibility",
      "description": "Covers differences in how people speak. Includes accents, dialects, code-switching, fast speech, slow speech, soft speech, shouting, stuttering, dysarthric speech, older adult speech patterns, children’s voices, and other accessibility-related variation.",
      "notes": [
        "Notes: This category is both a robustness issue and an accessibility issue.",
        "The highest-risk item is persistent recognizer mismatch. If the system consistently fails a speaker because of accent, disability, age, speech rate, or voice quality, the user may have no natural path to correction. They can repeat the same thing many times and still fail.",
        "This is why Correction Risk is high for many rows in this category."
      ]
    },
    {
      "id": 11,
      "name": "Bot-Caused Human Behaviors",
      "description": "Covers user behaviors that are triggered by poor bot design. Includes barge-ins caused by long prompts, repetition caused by latency, frustration caused by ignored corrections, and unnatural responses caused by rigid menu-style questions.",
      "notes": [
        "Notes: This category is important because many “bad user behaviors” are actually caused by the bot.",
        "For example:",
        "The highest-risk bot-caused behavior is ignoring correction. Once a user says “No, I said Wednesday,” the bot has a clear opportunity to repair. If it misses that, the failure becomes much harder to recover from."
      ]
    },
    {
      "id": 12,
      "name": "Compliance, Consent, and Boundary Behaviors",
      "description": "Covers high-risk moments involving user permission, privacy, security, and escalation. Includes interrupted disclosures, partial consent, refusal to provide sensitive information, over-sharing sensitive data, authentication fatigue, and requests for a human during sensitive flows.",
      "notes": [
        "Notes: This is a high-risk category even when the transcript is accurate.",
        "For example, the bot may correctly hear:",
        "“Fine, but don’t record my card number.”",
        "But if it treats that as simple consent, the interpretation is wrong at the policy level. The words were recognized, but the boundary condition was not understood.",
        "The highest-risk rows here are partial consent, sensitive info over-sharing, interrupted disclosures, and blocked escalation during sensitive flows."
      ]
    }
  ],
  "behaviors": [
    {
      "id": "1.1",
      "segment": 1,
      "name": "Intentional barge-in",
      "example": "“No, wait — I need billing.”",
      "failure": "Bot fails to stop, misses new intent, or continues wrong path.",
      "scores": [
        4,
        4,
        3
      ],
      "total": 11
    },
    {
      "id": "1.2",
      "segment": 1,
      "name": "Accidental barge-in / false positive",
      "example": "Cough, sigh, dog bark, door slam",
      "failure": "Bot stops speaking even though user did not intend to interrupt.",
      "scores": [
        2,
        2,
        2
      ],
      "total": 6
    },
    {
      "id": "1.3",
      "segment": 1,
      "name": "Backchanneling",
      "example": "“Mm-hmm,” “yeah,” “right,” while bot is speaking",
      "failure": "Bot treats “I’m listening” as “stop talking.”",
      "scores": [
        3,
        2,
        2
      ],
      "total": 7
    },
    {
      "id": "1.4",
      "segment": 1,
      "name": "Acknowledgment plus intent",
      "example": "“Yeah, Tuesday,” while bot is still asking the question",
      "failure": "Bot may treat it as a backchannel and miss the actual answer.",
      "scores": [
        4,
        4,
        3
      ],
      "total": 11
    },
    {
      "id": "1.5",
      "segment": 1,
      "name": "Cooperative completion",
      "example": "Bot: “Can I get your—” User: “Account number? Yeah, it’s…”",
      "failure": "User answers early; bot may not be listening yet or may discard it.",
      "scores": [
        4,
        4,
        3
      ],
      "total": 11
    },
    {
      "id": "1.6",
      "segment": 1,
      "name": "Competitive overlap",
      "example": "Bot keeps talking while user keeps talking",
      "failure": "Both parties fight for the floor; user’s content is lost or partially captured.",
      "scores": [
        4,
        4,
        4
      ],
      "total": 12
    },
    {
      "id": "1.7",
      "segment": 1,
      "name": "User yields back",
      "example": "“Sorry, go ahead.” / “Never mind, continue.”",
      "failure": "Bot restarts awkwardly or treats this as new task content.",
      "scores": [
        2,
        1,
        1
      ],
      "total": 4
    },
    {
      "id": "1.8",
      "segment": 1,
      "name": "User checks aliveness",
      "example": "“Hello?” / “Are you there?”",
      "failure": "Bot treats aliveness check as task input instead of latency/friction signal.",
      "scores": [
        2,
        1,
        1
      ],
      "total": 4
    },
    {
      "id": "1.9",
      "segment": 1,
      "name": "Repeated attempts due to latency",
      "example": "“Tuesday. Tuesday. I said Tuesday.”",
      "failure": "Bot may duplicate, overwrite, or mis-handle repeated slot values.",
      "scores": [
        3,
        3,
        2
      ],
      "total": 8
    },
    {
      "id": "1.10",
      "segment": 1,
      "name": "Premature bot response",
      "example": "User pauses briefly; bot jumps in before user is done.",
      "failure": "Bot captures incomplete intent or incomplete slot values.",
      "scores": [
        4,
        4,
        4
      ],
      "total": 12
    },
    {
      "id": "1.11",
      "segment": 1,
      "name": "Over-waiting after true end-of-turn",
      "example": "User finishes; bot waits too long.",
      "failure": "Bot feels broken; user repeats, hangs up, or says “hello?”",
      "scores": [
        1,
        1,
        1
      ],
      "total": 3
    },
    {
      "id": "2.1",
      "segment": 2,
      "name": "Filled pause",
      "example": "“I want to book for… um… Wednesday.”",
      "failure": "Bot cuts in after “for” or treats “um” as meaningful content.",
      "scores": [
        3,
        3,
        3
      ],
      "total": 9
    },
    {
      "id": "2.2",
      "segment": 2,
      "name": "Silent thinking pause",
      "example": "“My account number is…” 2-second pause",
      "failure": "Bot assumes the user has finished and responds too early.",
      "scores": [
        4,
        4,
        4
      ],
      "total": 12
    },
    {
      "id": "2.3",
      "segment": 2,
      "name": "Lookup pause",
      "example": "“One sec, let me find my card.”",
      "failure": "Bot reprompts too aggressively or times out.",
      "scores": [
        3,
        3,
        2
      ],
      "total": 8
    },
    {
      "id": "2.4",
      "segment": 2,
      "name": "Memory search",
      "example": "“It was… I think… last Friday?”",
      "failure": "Bot treats uncertain partial answer as final.",
      "scores": [
        4,
        4,
        3
      ],
      "total": 11
    },
    {
      "id": "2.5",
      "segment": 2,
      "name": "Chunked reading",
      "example": "“Four one two… six nine… wait…”",
      "failure": "Bot finalizes before full number, ID, address, or card detail is complete.",
      "scores": [
        5,
        5,
        4
      ],
      "total": 14
    },
    {
      "id": "2.6",
      "segment": 2,
      "name": "Breath pause",
      "example": "User inhales before continuing.",
      "failure": "Bot misreads natural breathing as end-of-turn.",
      "scores": [
        2,
        2,
        2
      ],
      "total": 6
    },
    {
      "id": "2.7",
      "segment": 2,
      "name": "Long pause with intent to continue",
      "example": "“The address is…” long pause",
      "failure": "Bot cuts off the answer or starts a repair prompt too early.",
      "scores": [
        4,
        4,
        3
      ],
      "total": 11
    },
    {
      "id": "2.8",
      "segment": 2,
      "name": "Actual abandonment silence",
      "example": "User leaves, mutes, or hangs up.",
      "failure": "Bot cannot tell if user is thinking, muted, gone, or disconnected.",
      "scores": [
        2,
        2,
        4
      ],
      "total": 8
    },
    {
      "id": "3.1",
      "segment": 3,
      "name": "Self-correction",
      "example": "“Tuesday — wait, no, Wednesday.”",
      "failure": "Bot stores the first value instead of the corrected value.",
      "scores": [
        5,
        5,
        4
      ],
      "total": 14
    },
    {
      "id": "3.2",
      "segment": 3,
      "name": "False start",
      "example": "“I need to cancel— actually I need to reschedule.”",
      "failure": "Bot follows the abandoned intent.",
      "scores": [
        4,
        4,
        3
      ],
      "total": 11
    },
    {
      "id": "3.3",
      "segment": 3,
      "name": "Restart",
      "example": "“Can you— sorry — I’m trying to book an appointment.”",
      "failure": "Bot overweights the fragment before the restart.",
      "scores": [
        3,
        3,
        2
      ],
      "total": 8
    },
    {
      "id": "3.4",
      "segment": 3,
      "name": "Repetition",
      "example": "“I, I, I need help with my card.”",
      "failure": "ASR or NLU duplicates words and distorts intent.",
      "scores": [
        3,
        3,
        2
      ],
      "total": 8
    },
    {
      "id": "3.5",
      "segment": 3,
      "name": "Word / phrase replacement",
      "example": "“Ship it to my office — no, my home.”",
      "failure": "Bot keeps the old value instead of replacing it.",
      "scores": [
        5,
        5,
        4
      ],
      "total": 14
    },
    {
      "id": "3.6",
      "segment": 3,
      "name": "Mid-word cutoff",
      "example": "“Book it for Tues— Wednesday.”",
      "failure": "Bot guesses the incomplete word or stores wrong date.",
      "scores": [
        4,
        4,
        4
      ],
      "total": 12
    },
    {
      "id": "3.7",
      "segment": 3,
      "name": "Stutter-like repetition",
      "example": "“W-w-wednesday.”",
      "failure": "Bot misrecognizes or times out during repeated/prolonged sounds.",
      "scores": [
        3,
        3,
        3
      ],
      "total": 9
    },
    {
      "id": "3.8",
      "segment": 3,
      "name": "Abandoned phrase",
      "example": "“The number is 415… actually use my email.”",
      "failure": "Bot stores irrelevant partial slot values.",
      "scores": [
        4,
        4,
        3
      ],
      "total": 11
    },
    {
      "id": "4.1",
      "segment": 4,
      "name": "Coughing / throat clearing",
      "example": "“Ahem” during bot speech",
      "failure": "Bot falsely detects barge-in and stops speaking.",
      "scores": [
        2,
        2,
        2
      ],
      "total": 6
    },
    {
      "id": "4.2",
      "segment": 4,
      "name": "Heavy breathing / sighing",
      "example": "Frustrated sigh",
      "failure": "Bot thinks user is starting a turn.",
      "scores": [
        2,
        2,
        2
      ],
      "total": 6
    },
    {
      "id": "4.3",
      "segment": 4,
      "name": "Laughing",
      "example": "User laughs while bot speaks.",
      "failure": "Bot may stop, transcribe nonsense, or miss surrounding words.",
      "scores": [
        2,
        1,
        2
      ],
      "total": 5
    },
    {
      "id": "4.4",
      "segment": 4,
      "name": "Mouth sounds",
      "example": "Lip smack, eating, swallowing",
      "failure": "Bot detects false start/end events.",
      "scores": [
        1,
        1,
        1
      ],
      "total": 3
    },
    {
      "id": "4.5",
      "segment": 4,
      "name": "Keyboard sounds",
      "example": "Typing while on speakerphone",
      "failure": "Bot may think the user is speaking or interrupting.",
      "scores": [
        2,
        2,
        2
      ],
      "total": 6
    },
    {
      "id": "4.6",
      "segment": 4,
      "name": "Door slam / object drop",
      "example": "Sudden impulse noise",
      "failure": "Bot cuts itself off or creates a false interruption.",
      "scores": [
        2,
        1,
        2
      ],
      "total": 5
    },
    {
      "id": "4.7",
      "segment": 4,
      "name": "Traffic / sirens",
      "example": "Caller is in car or street.",
      "failure": "ASR degrades; bot misses or distorts user input.",
      "scores": [
        3,
        3,
        3
      ],
      "total": 9
    },
    {
      "id": "4.8",
      "segment": 4,
      "name": "Dog / baby / household noise",
      "example": "Dog barking, baby crying, TV in background",
      "failure": "Bot may confuse background sound with user speech.",
      "scores": [
        3,
        2,
        3
      ],
      "total": 8
    },
    {
      "id": "5.1",
      "segment": 5,
      "name": "Side conversation",
      "example": "User says to spouse: “What day works?”",
      "failure": "Bot treats spouse-directed speech as bot-directed speech.",
      "scores": [
        4,
        4,
        4
      ],
      "total": 12
    },
    {
      "id": "5.2",
      "segment": 5,
      "name": "Third-party answer",
      "example": "Someone in background says “Wednesday!”",
      "failure": "Bot may accept the wrong speaker’s answer.",
      "scores": [
        5,
        5,
        4
      ],
      "total": 14
    },
    {
      "id": "5.3",
      "segment": 5,
      "name": "Multiple people on speakerphone",
      "example": "Caller and coworker both talk.",
      "failure": "Bot cannot decide whose instruction controls the transaction.",
      "scores": [
        5,
        5,
        4
      ],
      "total": 14
    },
    {
      "id": "5.4",
      "segment": 5,
      "name": "Child / household interruption",
      "example": "“Mom!” in background",
      "failure": "Bot may interrupt flow or transcribe irrelevant speech.",
      "scores": [
        2,
        1,
        2
      ],
      "total": 5
    },
    {
      "id": "5.5",
      "segment": 5,
      "name": "TV / radio speech",
      "example": "News, ads, podcast, sports broadcast",
      "failure": "Bot may transcribe external speech as user input.",
      "scores": [
        4,
        3,
        4
      ],
      "total": 11
    },
    {
      "id": "5.6",
      "segment": 5,
      "name": "Call-center / floor audio",
      "example": "Other agents or customers nearby",
      "failure": "Cross-talk creates false intents or false confirmations.",
      "scores": [
        4,
        3,
        4
      ],
      "total": 11
    },
    {
      "id": "5.7",
      "segment": 5,
      "name": "User asks someone else for info",
      "example": "“Hey, what’s the policy number?”",
      "failure": "Bot jumps in too early or captures the question as task content.",
      "scores": [
        3,
        2,
        3
      ],
      "total": 8
    },
    {
      "id": "5.8",
      "segment": 5,
      "name": "User relays another person’s answer",
      "example": "“She says it’s Wednesday.”",
      "failure": "Bot may miss the actual answer or mishandle attribution.",
      "scores": [
        3,
        4,
        3
      ],
      "total": 10
    },
    {
      "id": "6.1",
      "segment": 6,
      "name": "Speakerphone echo",
      "example": "Bot hears its own TTS through caller mic.",
      "failure": "Bot falsely interrupts itself or transcribes its own speech.",
      "scores": [
        3,
        2,
        3
      ],
      "total": 8
    },
    {
      "id": "6.2",
      "segment": 6,
      "name": "Low-bandwidth audio",
      "example": "PSTN compression, muffled call",
      "failure": "ASR loses consonants, names, digits, or short words.",
      "scores": [
        4,
        4,
        4
      ],
      "total": 12
    },
    {
      "id": "6.3",
      "segment": 6,
      "name": "Packet loss / jitter",
      "example": "Choppy audio",
      "failure": "Bot hears gaps, partial words, or false pauses.",
      "scores": [
        4,
        4,
        4
      ],
      "total": 12
    },
    {
      "id": "6.4",
      "segment": 6,
      "name": "Mute / unmute",
      "example": "User answers while muted.",
      "failure": "Bot believes the user did not answer; user believes they did.",
      "scores": [
        2,
        2,
        4
      ],
      "total": 8
    },
    {
      "id": "6.5",
      "segment": 6,
      "name": "Bluetooth / car audio switching",
      "example": "User changes headset or car audio.",
      "failure": "Sudden gain, noise, delay, or missing speech.",
      "scores": [
        3,
        2,
        3
      ],
      "total": 8
    },
    {
      "id": "6.6",
      "segment": 6,
      "name": "Hold music",
      "example": "User puts bot on hold.",
      "failure": "Bot may transcribe music or announcements as speech.",
      "scores": [
        2,
        1,
        2
      ],
      "total": 5
    },
    {
      "id": "6.7",
      "segment": 6,
      "name": "Call waiting / notification beeps",
      "example": "Beep during prompt or answer",
      "failure": "False acoustic event or missing word near the beep.",
      "scores": [
        1,
        1,
        1
      ],
      "total": 3
    },
    {
      "id": "6.8",
      "segment": 6,
      "name": "DTMF keypad input",
      "example": "User presses numbers instead of speaking.",
      "failure": "Bot ignores a valid input channel or double-processes it.",
      "scores": [
        4,
        5,
        3
      ],
      "total": 12
    },
    {
      "id": "6.9",
      "segment": 6,
      "name": "Voicemail / answering machine",
      "example": "Outbound bot reaches voicemail.",
      "failure": "Bot talks to a recording as if it were a live user.",
      "scores": [
        4,
        4,
        4
      ],
      "total": 12
    },
    {
      "id": "6.10",
      "segment": 6,
      "name": "IVR or another automated system",
      "example": "Bot reaches another phone tree.",
      "failure": "Bot may get stuck talking to another bot or trigger wrong actions.",
      "scores": [
        5,
        5,
        5
      ],
      "total": 15
    },
    {
      "id": "7.1",
      "segment": 7,
      "name": "Numeric regrouping",
      "example": "“It’s 415… 55… no, 5502.”",
      "failure": "Bot stores partial or wrongly grouped number.",
      "scores": [
        5,
        5,
        4
      ],
      "total": 14
    },
    {
      "id": "7.2",
      "segment": 7,
      "name": "Digit correction",
      "example": "“Nine two three — sorry, nine two four.”",
      "failure": "Bot keeps the earlier digit.",
      "scores": [
        5,
        5,
        4
      ],
      "total": 14
    },
    {
      "id": "7.3",
      "segment": 7,
      "name": "Ambiguous numbers",
      "example": "“Fifteen” vs “fifty”; “oh” vs “zero”",
      "failure": "Wrong amount, date, ID, address, or account number.",
      "scores": [
        5,
        5,
        4
      ],
      "total": 14
    },
    {
      "id": "7.4",
      "segment": 7,
      "name": "Spelling names",
      "example": "“Sara, S-A-R-A — no H.”",
      "failure": "Bot stores wrong spelling or ignores correction.",
      "scores": [
        4,
        4,
        3
      ],
      "total": 11
    },
    {
      "id": "7.5",
      "segment": 7,
      "name": "Phonetic spelling",
      "example": "“B as in boy, D as in dog.”",
      "failure": "Bot stores “boy” and “dog” instead of B and D.",
      "scores": [
        4,
        4,
        4
      ],
      "total": 12
    },
    {
      "id": "7.6",
      "segment": 7,
      "name": "Email addresses",
      "example": "“john dot smith at…”",
      "failure": "Punctuation, domain, or spelling gets lost.",
      "scores": [
        5,
        5,
        4
      ],
      "total": 14
    },
    {
      "id": "7.7",
      "segment": 7,
      "name": "Addresses",
      "example": "“Five thirty Main, apartment B… actually unit D.”",
      "failure": "Bot misses apartment/unit/street correction.",
      "scores": [
        5,
        5,
        4
      ],
      "total": 14
    },
    {
      "id": "7.8",
      "segment": 7,
      "name": "Dates and times",
      "example": "“Next Friday,” “this coming Monday,” “Wednesday afternoon-ish”",
      "failure": "Bot resolves wrong date/time or stores vague value.",
      "scores": [
        5,
        5,
        4
      ],
      "total": 14
    },
    {
      "id": "7.9",
      "segment": 7,
      "name": "Amounts",
      "example": "“One hundred and fifteen” vs “one fifteen”",
      "failure": "Wrong payment, refund, quote, balance, or order amount.",
      "scores": [
        5,
        5,
        4
      ],
      "total": 14
    },
    {
      "id": "8.1",
      "segment": 8,
      "name": "Multi-intent turn",
      "example": "“I need to change my address and pay my bill.”",
      "failure": "Bot handles only one intent and drops the other.",
      "scores": [
        4,
        5,
        3
      ],
      "total": 12
    },
    {
      "id": "8.2",
      "segment": 8,
      "name": "Out-of-order answer",
      "example": "Bot asks name; user gives name, account number, and issue.",
      "failure": "Bot discards useful information because it came too early.",
      "scores": [
        4,
        4,
        3
      ],
      "total": 11
    },
    {
      "id": "8.3",
      "segment": 8,
      "name": "Indirect answer",
      "example": "“I guess so,” “not really,” “that should be fine.”",
      "failure": "Bot maps ambiguous response to wrong yes/no.",
      "scores": [
        4,
        4,
        3
      ],
      "total": 11
    },
    {
      "id": "8.4",
      "segment": 8,
      "name": "Contradictory answer",
      "example": "“Yes — actually no.”",
      "failure": "Bot takes the first polarity instead of the correction.",
      "scores": [
        5,
        5,
        4
      ],
      "total": 14
    },
    {
      "id": "8.5",
      "segment": 8,
      "name": "Qualified consent",
      "example": "“Yes, but only if there’s no fee.”",
      "failure": "Bot treats conditional approval as unconditional approval.",
      "scores": [
        5,
        5,
        5
      ],
      "total": 15
    },
    {
      "id": "8.6",
      "segment": 8,
      "name": "Meta-request",
      "example": "“Can you repeat that?” / “What do you mean?”",
      "failure": "Bot treats request for clarification as task content.",
      "scores": [
        3,
        2,
        2
      ],
      "total": 7
    },
    {
      "id": "8.7",
      "segment": 8,
      "name": "Correction of bot",
      "example": "“No, I said Wednesday.”",
      "failure": "Bot fails to update state after explicit correction.",
      "scores": [
        5,
        5,
        4
      ],
      "total": 14
    },
    {
      "id": "8.8",
      "segment": 8,
      "name": "User says bot misunderstood",
      "example": "“That’s not what I said.”",
      "failure": "Bot continues down the wrong path despite repair signal.",
      "scores": [
        5,
        5,
        4
      ],
      "total": 14
    },
    {
      "id": "8.9",
      "segment": 8,
      "name": "User abandons task",
      "example": "“Never mind.” / “Forget it.”",
      "failure": "Bot keeps pushing original flow or triggers unwanted action.",
      "scores": [
        4,
        4,
        4
      ],
      "total": 12
    },
    {
      "id": "8.10",
      "segment": 8,
      "name": "User asks for human",
      "example": "“Agent.” / “Representative.”",
      "failure": "Bot ignores escalation request and traps user in automation.",
      "scores": [
        5,
        5,
        5
      ],
      "total": 15
    },
    {
      "id": "9.1",
      "segment": 9,
      "name": "Frustration",
      "example": "“I already told you that.”",
      "failure": "Bot repeats itself and misses the repair/friction signal.",
      "scores": [
        3,
        2,
        3
      ],
      "total": 8
    },
    {
      "id": "9.2",
      "segment": 9,
      "name": "Anger / profanity",
      "example": "“This is ridiculous.”",
      "failure": "Bot treats anger as irrelevant instead of service failure signal.",
      "scores": [
        3,
        2,
        3
      ],
      "total": 8
    },
    {
      "id": "9.3",
      "segment": 9,
      "name": "Anxiety / uncertainty",
      "example": "“I don’t know… I’m not sure.”",
      "failure": "Bot forces precision too early or stores uncertain answer as final.",
      "scores": [
        4,
        4,
        3
      ],
      "total": 11
    },
    {
      "id": "9.4",
      "segment": 9,
      "name": "Embarrassment / privacy concern",
      "example": "“I don’t want to say that out loud.”",
      "failure": "Bot keeps asking for sensitive information in the same way.",
      "scores": [
        5,
        5,
        4
      ],
      "total": 14
    },
    {
      "id": "9.5",
      "segment": 9,
      "name": "Suspicion",
      "example": "“Are you a real person?” / “Is this a scam?”",
      "failure": "Bot ignores trust issue and continues task flow.",
      "scores": [
        4,
        3,
        4
      ],
      "total": 11
    },
    {
      "id": "9.6",
      "segment": 9,
      "name": "Joking / sarcasm",
      "example": "“Sure, because that worked so well last time.”",
      "failure": "Bot interprets sarcastic response literally.",
      "scores": [
        4,
        3,
        4
      ],
      "total": 11
    },
    {
      "id": "9.7",
      "segment": 9,
      "name": "Laughter while speaking",
      "example": "“Yeah, haha, I forgot again.”",
      "failure": "Bot drops meaningful content around laughter.",
      "scores": [
        3,
        2,
        3
      ],
      "total": 8
    },
    {
      "id": "9.8",
      "segment": 9,
      "name": "Crying or distress",
      "example": "User speech becomes unstable.",
      "failure": "Bot misrecognizes speech or responds coldly.",
      "scores": [
        4,
        3,
        4
      ],
      "total": 11
    },
    {
      "id": "10.1",
      "segment": 10,
      "name": "Accent or dialect variation",
      "example": "Regional pronunciation, non-native English",
      "failure": "Bot misrecognizes words, names, places, or intent.",
      "scores": [
        4,
        4,
        4
      ],
      "total": 12
    },
    {
      "id": "10.2",
      "segment": 10,
      "name": "Code-switching",
      "example": "“Book it para mañana — sorry, tomorrow.”",
      "failure": "Bot loses intent or switches language incorrectly.",
      "scores": [
        4,
        4,
        4
      ],
      "total": 12
    },
    {
      "id": "10.3",
      "segment": 10,
      "name": "Fast speech",
      "example": "Rapid account details or long explanation",
      "failure": "Bot misses values or compresses multiple intents.",
      "scores": [
        4,
        4,
        3
      ],
      "total": 11
    },
    {
      "id": "10.4",
      "segment": 10,
      "name": "Slow speech",
      "example": "Long gaps between words",
      "failure": "Bot cuts user off or prematurely endpoints.",
      "scores": [
        4,
        4,
        4
      ],
      "total": 12
    },
    {
      "id": "10.5",
      "segment": 10,
      "name": "Soft speech / whispering",
      "example": "User is in public or office.",
      "failure": "VAD may not trigger; ASR misses words.",
      "scores": [
        4,
        4,
        4
      ],
      "total": 12
    },
    {
      "id": "10.6",
      "segment": 10,
      "name": "Shouting / clipped speech",
      "example": "Angry user or noisy environment",
      "failure": "Audio clips or distorts; ASR quality drops.",
      "scores": [
        3,
        3,
        3
      ],
      "total": 9
    },
    {
      "id": "10.7",
      "segment": 10,
      "name": "Stuttering, prolongations, blocks",
      "example": "“I need to b-b-book…”",
      "failure": "Bot times out, interrupts, or misrecognizes.",
      "scores": [
        4,
        4,
        4
      ],
      "total": 12
    },
    {
      "id": "10.8",
      "segment": 10,
      "name": "Dysarthric speech",
      "example": "Reduced articulation clarity",
      "failure": "Bot repeatedly fails recognition.",
      "scores": [
        5,
        5,
        5
      ],
      "total": 15
    },
    {
      "id": "10.9",
      "segment": 10,
      "name": "Older adult speech patterns",
      "example": "Slower pace, more pauses, voice changes",
      "failure": "Endpointing and recognition become less reliable.",
      "scores": [
        3,
        3,
        3
      ],
      "total": 9
    },
    {
      "id": "10.10",
      "segment": 10,
      "name": "Children or very young voices",
      "example": "Higher pitch, unpredictable phrasing",
      "failure": "Bot misunderstands or mishandles authorization.",
      "scores": [
        4,
        3,
        4
      ],
      "total": 11
    },
    {
      "id": "11.1",
      "segment": 11,
      "name": "Bot speaks too long",
      "example": "User barges in.",
      "failure": "Looks like interruption problem, but root cause is verbose prompt design.",
      "scores": [
        3,
        2,
        2
      ],
      "total": 7
    },
    {
      "id": "11.2",
      "segment": 11,
      "name": "Bot response is delayed",
      "example": "User repeats or says “hello?”",
      "failure": "Bot may double-capture or misread repeated intent.",
      "scores": [
        3,
        3,
        2
      ],
      "total": 8
    },
    {
      "id": "11.3",
      "segment": 11,
      "name": "Bot asks unnatural questions",
      "example": "User gives unexpected answer.",
      "failure": "Bot fails outside its expected grammar.",
      "scores": [
        4,
        4,
        3
      ],
      "total": 11
    },
    {
      "id": "11.4",
      "segment": 11,
      "name": "Bot ignores correction",
      "example": "User escalates emotionally.",
      "failure": "Bot continues with known-wrong state.",
      "scores": [
        5,
        5,
        5
      ],
      "total": 15
    },
    {
      "id": "11.5",
      "segment": 11,
      "name": "Bot over-confirms",
      "example": "User says “yes, yes, yes” impatiently.",
      "failure": "Bot may process repeated confirmations oddly.",
      "scores": [
        2,
        2,
        1
      ],
      "total": 5
    },
    {
      "id": "11.6",
      "segment": 11,
      "name": "Bot under-confirms",
      "example": "User corrects later.",
      "failure": "Wrong value flows downstream without validation.",
      "scores": [
        5,
        5,
        4
      ],
      "total": 14
    },
    {
      "id": "11.7",
      "segment": 11,
      "name": "Bot sounds too robotic",
      "example": "User tests it or asks for a human.",
      "failure": "Trust drops; user may abandon automation.",
      "scores": [
        2,
        2,
        3
      ],
      "total": 7
    },
    {
      "id": "11.8",
      "segment": 11,
      "name": "Bot uses rigid menu language",
      "example": "User replies naturally.",
      "failure": "Bot fails because user does not follow expected menu format.",
      "scores": [
        4,
        4,
        3
      ],
      "total": 11
    },
    {
      "id": "12.1",
      "segment": 12,
      "name": "Interrupting required disclosure",
      "example": "User talks over recording notice or legal disclosure.",
      "failure": "Bot may skip or fail to confirm required information was delivered.",
      "scores": [
        3,
        4,
        5
      ],
      "total": 12
    },
    {
      "id": "12.2",
      "segment": 12,
      "name": "Partial consent",
      "example": "“Fine, but don’t record my card number.”",
      "failure": "Bot treats limited consent as full consent.",
      "scores": [
        5,
        5,
        5
      ],
      "total": 15
    },
    {
      "id": "12.3",
      "segment": 12,
      "name": "Refusal",
      "example": "“I’m not giving you my date of birth.”",
      "failure": "Bot loops on same question or blocks alternate verification.",
      "scores": [
        5,
        5,
        4
      ],
      "total": 14
    },
    {
      "id": "12.4",
      "segment": 12,
      "name": "Sensitive info over-sharing",
      "example": "User blurts full SSN or card number.",
      "failure": "Bot may mishandle, store, repeat, or route sensitive data improperly.",
      "scores": [
        4,
        5,
        5
      ],
      "total": 14
    },
    {
      "id": "12.5",
      "segment": 12,
      "name": "Authentication fatigue",
      "example": "“I already verified this.”",
      "failure": "Bot repeats security flow, frustrates user, or misses prior verification state.",
      "scores": [
        4,
        4,
        3
      ],
      "total": 11
    },
    {
      "id": "12.6",
      "segment": 12,
      "name": "Request for human during sensitive flow",
      "example": "“I want a person.”",
      "failure": "Bot blocks escalation when user is in a high-risk context.",
      "scores": [
        5,
        5,
        5
      ],
      "total": 15
    }
  ]
};