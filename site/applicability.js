const APPLICABILITY={
  "segments": {
    "1": {
      "setup": "Both inbound and outbound",
      "applies": "People can speak while the bot is talking, answer early, or repeat themselves during delays.",
      "notApplicable": "Individual overlap issues can be out of scope in an enforced push-to-talk or strictly alternating interface. Inbound versus outbound direction alone does not remove turn-taking risk."
    },
    "2": {
      "setup": "Both inbound and outbound",
      "applies": "The bot accepts spoken answers and uses silence to decide whether the user has finished, especially for lookup tasks or long values.",
      "notApplicable": "A specific capture flow may be out of scope if it uses only buttons, keypad input, or a completion control instead of spoken endpointing. A controlled microphone does not remove natural thinking pauses."
    },
    "3": {
      "setup": "Both inbound and outbound",
      "applies": "Users can speak freely, restart, change their minds, or correct information before an action.",
      "notApplicable": "A specific field may be out of scope if it cannot be spoken or changed and comes only from a trusted structured source. Short prompts or yes/no flows alone do not prevent verbal self-correction."
    },
    "4": {
      "setup": "Environment-dependent",
      "applies": "Open microphones can pick up coughs, breathing, household noise, traffic, or typing alongside speech.",
      "notApplicable": "A particular noise source may be out of scope if the deployment physically excludes it. A controlled device can reduce acoustic variation, but filters or a quiet test room do not prove that all noise is excluded."
    },
    "5": {
      "setup": "Speaker setup matters",
      "applies": "One audio channel can contain callers, helpers, nearby people, or media; more than one participant may affect a transaction.",
      "notApplicable": "Wrong-speaker input can be out of scope only if the full audio path reliably isolates the sole authorized speaker. Speaker labels or diarization alone do not establish who is authorized to instruct the bot."
    },
    "6": {
      "setup": "Call legs and devices matter",
      "applies": "The bot uses telephone networks, customer-owned devices, keypad tones, outbound dialing, transfers, voicemail, or other automated systems.",
      "notApplicable": "Only exclude the unsupported device or call state: a locked-down device may remove Bluetooth switching, while a system with no dialing or transfer legs may exclude voicemail or IVR encounters. The whole segment is not removed by controlled hardware."
    },
    "7": {
      "setup": "Depends on captured fields",
      "applies": "Spoken values feed bookings, records, identification, addresses, contact details, amounts, or other tools.",
      "notApplicable": "A particular field type can be out of scope if the bot never captures, interprets, changes, or forwards it. A general information bot may exclude payment-amount capture while still needing reliable names, dates, or intent handling."
    },
    "8": {
      "setup": "Depends on task and permissions",
      "applies": "Users can change tasks, give indirect or conditional answers, cancel, correct the bot, or request a human.",
      "notApplicable": "Transactional cancellation and approval may be out of scope for a read-only information bot with no actions. Clarification, intent repair, and support requests can still apply."
    },
    "9": {
      "setup": "Both inbound and outbound",
      "applies": "People can become confused, frustrated, uncertain, distressed, or concerned about identity and privacy.",
      "notApplicable": "A one-way announcement with no listening or dialogue can exclude conversational response handling. A simple script, outbound campaign, or controlled device does not remove the caller’s trust concerns."
    },
    "10": {
      "setup": "Depends on supported speakers",
      "applies": "Users vary in accent, language, pace, volume, articulation, age, or preferred input method.",
      "notApplicable": "A specific language or audience condition can be outside the explicitly defined service population. Do not use a uniform device, assumed user profile, or narrow test sample to exclude accessibility needs."
    },
    "11": {
      "setup": "Depends on bot interaction design",
      "applies": "The bot asks questions, produces prompts, waits on tools, confirms values, or repairs conversations.",
      "notApplicable": "Individual prompt-related issues may be out of scope in an application that never uses that prompt pattern. A one-way announcement cannot have interactive confirmation failures, but prompt length and trust can still matter."
    },
    "12": {
      "setup": "Depends on data and authority",
      "applies": "The flow has permission limits, disclosures, verification, sensitive information, or a route to human assistance.",
      "notApplicable": "A specific policy step may be out of scope if the product genuinely has no such requirement or capability. Not asking for sensitive data does not prevent callers from volunteering it; inbound versus outbound alone is not an exemption."
    }
  },
  "behaviors": {
    "1.1": {
      "applies": "People can interrupt a spoken bot response to redirect the task.",
      "notApplicable": "No bot speech overlaps any enabled input window, and turn restrictions are explicit. Merely disabling barge-in leaves a lost-intent experience to assess."
    },
    "1.2": {
      "applies": "The audio system can stop bot speech when it detects caller activity.",
      "notApplicable": "The bot is not speaking or acoustic activity cannot interrupt its output; noise can still affect recognition in listening turns."
    },
    "1.3": {
      "applies": "The user can say “mm-hmm” or similar while the bot is speaking.",
      "notApplicable": "There is no simultaneous input during bot speech. The tradeoff of missing early answers should be reviewed separately."
    },
    "1.4": {
      "applies": "Answers may arrive before a bot question has finished.",
      "notApplicable": "A supported input control reliably prevents early spoken answers. A half-duplex design must make that restriction clear."
    },
    "1.5": {
      "applies": "Users can anticipate and complete the bot’s question.",
      "notApplicable": "The bot never asks spoken questions or the interface enforces a clear answer window without accepting early speech."
    },
    "1.6": {
      "applies": "Both sides can speak at the same time on the live audio path.",
      "notApplicable": "The interface guarantees alternating audio turns; this changes the interaction model rather than making free-flowing conversation safe."
    },
    "1.7": {
      "applies": "The bot can pause and resume an explanation after an interruption.",
      "notApplicable": "There is no interrupted content to resume, such as a listening-only capture step with no prior bot response."
    },
    "1.8": {
      "applies": "The caller may experience silence or an unexplained processing wait.",
      "notApplicable": "There is no two-way interaction or no waiting state exposed to the caller. Inbound/outbound direction is not a useful exclusion."
    },
    "1.9": {
      "applies": "Tool or response delays give the caller time to repeat an answer.",
      "notApplicable": "No repeated input can reach the same pending operation. Fast responses alone reduce exposure but do not guarantee exclusion."
    },
    "1.10": {
      "applies": "Silence or partial recognition can trigger the next bot response.",
      "notApplicable": "Turn completion is explicitly controlled by a button or keypad marker and spoken silence is not used to commit an answer."
    },
    "1.11": {
      "applies": "The user must wait for a response after finishing speech.",
      "notApplicable": "The application is a one-way message with no expected reply. Real-time two-way conversations still need a response-latency review."
    },
    "2.1": {
      "applies": "The recognizer accepts spontaneous speech with fillers such as “um.”",
      "notApplicable": "The field is entered exclusively by structured controls, with no spoken interpretation in that step."
    },
    "2.2": {
      "applies": "A user may think during an incomplete spoken answer.",
      "notApplicable": "A completion control ends capture and no silence-based decision is made in the relevant step."
    },
    "2.3": {
      "applies": "The user must find a card, document, order, or other information.",
      "notApplicable": "All required information is already available and the flow never asks the user to look anything up. Thinking pauses can still apply."
    },
    "2.4": {
      "applies": "The bot asks for facts the caller has to recall.",
      "notApplicable": "The value comes only from an authoritative structured source and no uncertain spoken recollection is accepted."
    },
    "2.5": {
      "applies": "Long numbers, codes, names, or addresses are read aloud in chunks.",
      "notApplicable": "Those fields are captured only through keypad, typed, or prefilled input; any remaining long spoken values still need review."
    },
    "2.6": {
      "applies": "Breathing gaps can influence speech endpointing.",
      "notApplicable": "The relevant input is not speech, or completion is explicitly signaled instead of inferred from pauses."
    },
    "2.7": {
      "applies": "A spoken response may continue after a long thinking or reading gap.",
      "notApplicable": "The step does not use spoken input or wait on unfinished answers. A generous timeout is a mitigation, not an exclusion."
    },
    "2.8": {
      "applies": "The application waits for the user and must distinguish silence from absence.",
      "notApplicable": "There is no interactive listening state, such as a fire-and-finish announcement with no response flow."
    },
    "3.1": {
      "applies": "A spoken answer can be corrected before or during a tool action.",
      "notApplicable": "The relevant value is never derived from speech and cannot be changed through this conversation."
    },
    "3.2": {
      "applies": "Users can abandon one spoken intent in favor of another.",
      "notApplicable": "No free-form task selection exists and spoken fragments cannot select or trigger a task."
    },
    "3.3": {
      "applies": "The bot interprets spontaneous utterances containing restarts.",
      "notApplicable": "The step accepts only structured non-speech input. Restricting prompts to short questions does not exclude restarts."
    },
    "3.4": {
      "applies": "Repeated words can influence intent or create duplicate requests.",
      "notApplicable": "No speech-to-task interpretation is performed in the relevant flow."
    },
    "3.5": {
      "applies": "A user can replace a field value, destination, or other instruction.",
      "notApplicable": "The field cannot be set or changed through the voice flow and is not used from the transcript downstream."
    },
    "3.6": {
      "applies": "Partial words can be recognized or committed before the user finishes.",
      "notApplicable": "The step uses no spoken value or intent capture, or partial speech cannot affect the final decision."
    },
    "3.7": {
      "applies": "Speech capture must handle repeated or prolonged sounds.",
      "notApplicable": "The particular input step is non-speech. A controlled device or a short answer format does not exclude this speaker variation."
    },
    "3.8": {
      "applies": "The caller can abandon an identifier or switch input methods mid-answer.",
      "notApplicable": "The field is not spoken, cannot be switched, and partial captured data is never used by downstream processing."
    },
    "4.1": {
      "applies": "A cough can enter the microphone while the bot speaks.",
      "notApplicable": "Cough events cannot trigger an interruption in that input state. They may still interfere with recognition elsewhere."
    },
    "4.2": {
      "applies": "Breaths or sighs can trigger a new turn or an interruption.",
      "notApplicable": "The bot does not listen in that state or non-speech events cannot trigger task transitions; emotional context may still matter."
    },
    "4.3": {
      "applies": "Laughter can occur alone or within meaningful speech.",
      "notApplicable": "The relevant capture step is non-speech. A scripted task does not prevent a real caller from laughing."
    },
    "4.4": {
      "applies": "An open microphone can pick up mouth noises.",
      "notApplicable": "No microphone input reaches speech-event detection in the relevant step."
    },
    "4.5": {
      "applies": "A caller may type near an open microphone or use speakerphone.",
      "notApplicable": "The deployment physically excludes keyboards and related tapping near the microphone. Noise filtering alone is not a guarantee."
    },
    "4.6": {
      "applies": "Impact sounds can reach speech detection.",
      "notApplicable": "The installation genuinely excludes these sounds from the audio path. Controlled hardware alone does not exclude environmental noise."
    },
    "4.7": {
      "applies": "Callers can use the service from a vehicle, street, or other noisy setting.",
      "notApplicable": "The service is confined to a verified quiet location with enforced audio conditions. Customer-owned phones generally do not meet this condition."
    },
    "4.8": {
      "applies": "Callers may have children, pets, media, or household noise nearby.",
      "notApplicable": "The physical environment and audio isolation reliably exclude these sources, rather than merely assuming a quiet caller."
    },
    "5.1": {
      "applies": "The primary caller can speak to someone else while the microphone remains open.",
      "notApplicable": "A verified single-speaker environment excludes side conversations across the full audio path."
    },
    "5.2": {
      "applies": "A helper or nearby person can answer a question the bot asked the caller.",
      "notApplicable": "Only the authorized caller’s isolated audio is accepted. Multi-speaker recognition alone is not authorization."
    },
    "5.3": {
      "applies": "Several people can join the same call or speak through one device.",
      "notApplicable": "The supported session enforces one authorized participant and isolates that speaker. Speakerphone restrictions alone may not exclude nearby voices."
    },
    "5.4": {
      "applies": "Children or other household members can be audible.",
      "notApplicable": "The deployment reliably excludes household interruptions; the voice of the authorized user still needs to be supported."
    },
    "5.5": {
      "applies": "TV, radio, podcasts, or other media may enter the microphone.",
      "notApplicable": "Media playback is excluded from the captured audio path by the actual environment and routing configuration."
    },
    "5.6": {
      "applies": "Calls occur in shared workspaces or near other conversations.",
      "notApplicable": "The microphone path is verified to isolate the sole speaker and exclude floor cross-talk."
    },
    "5.7": {
      "applies": "The user may consult another person for information during a call.",
      "notApplicable": "The task and operating environment do not involve consulting others. A single-speaker model does not by itself prevent consultation."
    },
    "5.8": {
      "applies": "The caller intentionally relays another person’s answer.",
      "notApplicable": "The workflow never accepts relayed input for the relevant field. Distinguishing speakers does not exclude a caller quoting a helper."
    },
    "6.1": {
      "applies": "Bot audio can be replayed through a loudspeaker and recaptured by a microphone.",
      "notApplicable": "The full supported audio path prevents playback from reaching capture, as verified for the controlled device; echo cancellation merely reduces risk."
    },
    "6.2": {
      "applies": "Calls traverse telephone codecs or other constrained audio paths.",
      "notApplicable": "The entire supported path avoids the affected narrowband codecs and compression. A controlled endpoint does not guarantee an unconstrained network path."
    },
    "6.3": {
      "applies": "Audio travels over a network that can lose or delay packets.",
      "notApplicable": "Capture and processing are entirely local with no packet-based audio transport. A managed network reduces risk but is not a complete exclusion."
    },
    "6.4": {
      "applies": "The user, operating system, app, or device can mute audio.",
      "notApplicable": "No mute or capture-suppression mechanism exists anywhere on the supported path. Hiding a mute button alone is insufficient."
    },
    "6.5": {
      "applies": "Callers can change Bluetooth, headset, car, or output/input routing during a session.",
      "notApplicable": "A locked-down device prevents route switching at every supported layer. This removes switching-specific issues, not all channel failures."
    },
    "6.6": {
      "applies": "The peer can place the bot on hold or the call can enter a hold queue.",
      "notApplicable": "The supported device and call routing cannot enter a hold state or send hold announcements."
    },
    "6.7": {
      "applies": "Call-waiting tones or device notifications can enter the audio stream.",
      "notApplicable": "The controlled endpoint and network path exclude those tones from captured audio. Muting app notifications alone may not block network-generated beeps."
    },
    "6.8": {
      "applies": "Keypad tones are accepted, expected, or can affect the flow alongside speech.",
      "notApplicable": "The interface has no keypad channel, accepts no tones, and clearly supports voice only. Simply failing to implement keypad handling on a telephone flow is not an exclusion."
    },
    "6.9": {
      "applies": "The bot dials a number or transfers to a call leg that may reach voicemail or an answering machine.",
      "notApplicable": "The system never dials or transfers and every accepted session is known to contain a live user. “Inbound-only” is not enough if there are outbound transfer legs."
    },
    "6.10": {
      "applies": "Dialing or transfers can reach a phone tree, another bot, or an automated endpoint.",
      "notApplicable": "All call legs are restricted to verified human endpoints with no route to automated systems. Initial inbound/outbound direction alone is insufficient."
    },
    "7.1": {
      "applies": "Spoken identifiers or numbers can be chunked, regrouped, or corrected.",
      "notApplicable": "No spoken numeric sequence is captured or forwarded; identifiers come only from a trusted structured source."
    },
    "7.2": {
      "applies": "The caller can correct digits in an identifier or other numerical value.",
      "notApplicable": "Digit fields are never sourced or updated from voice. The remaining conversational correction risks still apply."
    },
    "7.3": {
      "applies": "Spoken numbers influence a date, amount, identifier, address, or other field.",
      "notApplicable": "No numerical field is interpreted from speech or used from transcripts in downstream processing."
    },
    "7.4": {
      "applies": "The bot captures names or other spelled values.",
      "notApplicable": "Names and spellings are not collected, changed, or used from the voice conversation."
    },
    "7.5": {
      "applies": "Users can spell letters using example words, such as “B as in boy.”",
      "notApplicable": "There is no spoken spelling input or letter-based identifier capture in the supported tasks."
    },
    "7.6": {
      "applies": "Email addresses are spoken, corrected, or extracted for follow-up.",
      "notApplicable": "The bot never captures or changes email addresses; any email comes only from an authoritative structured record."
    },
    "7.7": {
      "applies": "Addresses or unit details are captured or updated through the conversation.",
      "notApplicable": "Address data is never derived from speech or transcripts and cannot be updated through this application."
    },
    "7.8": {
      "applies": "Dates or times are interpreted for bookings, deadlines, reminders, or records.",
      "notApplicable": "No date/time is interpreted or acted on from the conversation. An outbound-only scheduler still needs this behavior."
    },
    "7.9": {
      "applies": "Spoken amounts feed prices, payments, refunds, balances, orders, or quotes.",
      "notApplicable": "The application neither captures nor uses spoken amounts for any downstream operation. Read-only spoken-number understanding may still need separate review."
    },
    "8.1": {
      "applies": "The user can request several supported tasks in one turn.",
      "notApplicable": "The application supports no task selection or task execution from speech. A single advertised task does not prevent callers from asking for more."
    },
    "8.2": {
      "applies": "Users may supply useful information before the corresponding prompt.",
      "notApplicable": "The flow has no multi-field spoken capture and no value given early can be used later."
    },
    "8.3": {
      "applies": "A spoken yes/no interpretation determines the next step.",
      "notApplicable": "No branch or action depends on interpreting spoken agreement or refusal; structured button input handles that decision."
    },
    "8.4": {
      "applies": "A caller can revise a spoken yes/no answer within a turn.",
      "notApplicable": "The relevant decision is never made from speech. A transactional bot with short yes/no questions still needs this behavior."
    },
    "8.5": {
      "applies": "A user’s approval can contain conditions that matter to an action.",
      "notApplicable": "The bot has no approval-dependent actions and conditional answers are not used to authorize downstream processing."
    },
    "8.6": {
      "applies": "The bot asks questions or gives information that a user may ask to repeat or explain.",
      "notApplicable": "The application has no two-way conversational exchange. Prompt simplicity alone does not exclude clarification requests."
    },
    "8.7": {
      "applies": "The bot maintains values or task state that the user can correct.",
      "notApplicable": "No spoken information affects retained conversation state or downstream actions. Not persisting data after the call does not remove live-state mistakes."
    },
    "8.8": {
      "applies": "A caller can signal that the bot has misunderstood their request.",
      "notApplicable": "No interpretation or two-way dialogue takes place. This is broadly applicable to conversational inbound and outbound bots."
    },
    "8.9": {
      "applies": "The bot can continue a task or trigger an action after the user withdraws it.",
      "notApplicable": "There are no pending or future actions controlled by the dialogue. The user may still need a way to end an unwanted conversation."
    },
    "8.10": {
      "applies": "The product offers, requires, or encounters requests for human assistance.",
      "notApplicable": "Human escalation is explicitly outside the service’s supported model and this is clearly communicated; a usable alternative support route still needs consideration."
    },
    "9.1": {
      "applies": "The caller may feel ignored, repeat information, or encounter repeated prompts.",
      "notApplicable": "There is no conversational response handling, such as a one-way announcement. Direction of calling does not exclude frustration."
    },
    "9.2": {
      "applies": "The application must respond to angry or dissatisfied users.",
      "notApplicable": "The app does not listen or respond to the recipient. A narrow script does not make anger impossible."
    },
    "9.3": {
      "applies": "The task needs information the user may be unsure about.",
      "notApplicable": "The relevant flow uses only verified structured inputs and never interprets an uncertain spoken answer as final."
    },
    "9.4": {
      "applies": "The conversation requests or may elicit information a caller does not want to say aloud.",
      "notApplicable": "The application neither asks for nor uses such information in the supported flow. Unsolicited sensitive disclosure remains a separate concern."
    },
    "9.5": {
      "applies": "The user may question who is calling, who operates the bot, or whether the interaction is legitimate.",
      "notApplicable": "No genuine person interacts with the system, such as an isolated test harness. Outbound calls often heighten rather than remove this concern."
    },
    "9.6": {
      "applies": "The bot uses natural-language agreement or sentiment to interpret a response.",
      "notApplicable": "No decision is made from natural-language responses, for example a non-listening notification."
    },
    "9.7": {
      "applies": "Meaningful speech may be mixed with laughter.",
      "notApplicable": "Speech is not captured or interpreted in the relevant step."
    },
    "9.8": {
      "applies": "Callers may be distressed and the service needs to respond or route them appropriately.",
      "notApplicable": "The system performs no listening or conversational response. Do not exclude distress solely because it is uncommon in the intended task."
    },
    "10.1": {
      "applies": "The user population includes pronunciation or dialect variation.",
      "notApplicable": "There is no spoken recognition. A controlled device or assumed standard accent is not a reliable basis for exclusion."
    },
    "10.2": {
      "applies": "Supported callers may mix languages or language varieties.",
      "notApplicable": "The supported task does not interpret speech, or the language variant is genuinely outside the defined service with a clear fallback. A configured recognizer language does not prevent code-switching."
    },
    "10.3": {
      "applies": "Users can supply rapid speech or long explanations.",
      "notApplicable": "The step uses non-speech input or a genuinely constrained input mechanism that prevents rapid spoken values."
    },
    "10.4": {
      "applies": "The interface recognizes speech and infers turn completion from timing.",
      "notApplicable": "The relevant step uses non-speech input or an explicit completion control. A known speaker or device does not guarantee a constant speaking pace."
    },
    "10.5": {
      "applies": "Callers may speak softly or the microphone receives low-volume speech.",
      "notApplicable": "The step uses no spoken input. Controlled microphone levels can reduce exposure but do not guarantee the caller will speak at a fixed volume."
    },
    "10.6": {
      "applies": "Loud speech or environmental noise can clip the captured audio.",
      "notApplicable": "The step uses no audio capture. Device control must cover actual capture levels and caller behavior before treating clipping as excluded."
    },
    "10.7": {
      "applies": "People with repetitions, prolongations, or speech blocks may use the service.",
      "notApplicable": "The particular task is completed without speech. Do not assume a narrow task or fixed device removes this accessibility requirement."
    },
    "10.8": {
      "applies": "The supported population includes people with reduced articulation clarity.",
      "notApplicable": "The step does not require speech and has a fully usable supported alternative. A small recognition test set does not establish that this need is absent."
    },
    "10.9": {
      "applies": "Older adults may use the application or the flow relies on fixed speech timing.",
      "notApplicable": "The relevant audience genuinely excludes this group by service definition, or no speech is recognized; other slow or variable speech remains relevant."
    },
    "10.10": {
      "applies": "Children can access the voice channel or the product serves younger callers.",
      "notApplicable": "Access is reliably restricted to the defined adult population. Voice pitch alone must not be treated as proof of age or authorization."
    },
    "11.1": {
      "applies": "The bot delivers prompts or explanations before inviting an answer.",
      "notApplicable": "The bot produces no spoken prompts, or the specific long-prompt pattern does not exist. Concise prompts reduce exposure but still need interruption handling."
    },
    "11.2": {
      "applies": "The user waits while the bot processes input or calls tools.",
      "notApplicable": "There is no interactive response expectation, such as a one-way recording. Fast nominal response times are not a full exclusion."
    },
    "11.3": {
      "applies": "Question wording constrains what the user thinks is a valid answer.",
      "notApplicable": "The bot asks no questions and interprets no responses. A rigid script does not by itself prevent unexpected answers."
    },
    "11.4": {
      "applies": "Users can correct the bot’s values or task interpretation.",
      "notApplicable": "No spoken input can affect state or actions. Not storing user information after the call does not remove correction failures during it."
    },
    "11.5": {
      "applies": "The bot asks for repeated confirmations or could treat several approvals as separate actions.",
      "notApplicable": "The flow has no confirmation step and repeated approval cannot trigger another action."
    },
    "11.6": {
      "applies": "Unconfirmed values can drive a consequential action or system update.",
      "notApplicable": "The bot is read-only, cannot change anything, and no downstream consumer treats its unconfirmed output as authoritative."
    },
    "11.7": {
      "applies": "The person hears bot speech and its delivery affects engagement or trust.",
      "notApplicable": "There is no user-facing spoken output. Outbound campaigns and controlled devices still have voice-delivery concerns."
    },
    "11.8": {
      "applies": "The interface uses spoken menus or expects narrow response phrasing.",
      "notApplicable": "The app has no menu-style question or restricted grammar. Natural-language support should be verified rather than assumed."
    },
    "12.1": {
      "applies": "The approved flow requires a notice or disclosure that may be interrupted.",
      "notApplicable": "No disclosure is required for the specific service and context, as established by the product’s approved requirements. Device or call-direction settings do not decide this alone."
    },
    "12.2": {
      "applies": "The caller can limit permission for recording, processing, or an action.",
      "notApplicable": "No permission-dependent action is performed. A general service flow still needs a way to respect restrictions it encounters."
    },
    "12.3": {
      "applies": "The flow requests sensitive information or identity verification that a user may refuse.",
      "notApplicable": "The application has no such request or verification dependency. The caller can still refuse participation in the broader conversation."
    },
    "12.4": {
      "applies": "An open speech channel lets the caller volunteer sensitive information, even if it is never requested.",
      "notApplicable": "Do not exclude this merely because the task does not need sensitive data. Excluding a specific storage or routing impact requires verified controls across the entire audio, transcript, logging, and tool path."
    },
    "12.5": {
      "applies": "The user must authenticate or transfer through flows with verification state.",
      "notApplicable": "No identity verification is performed or relied on anywhere in the application and its handoffs."
    },
    "12.6": {
      "applies": "A sensitive workflow can need a human handoff or receive a request for one.",
      "notApplicable": "The application has no sensitive workflow or such handoff path. Any support request that can arise still needs a clear supported response."
    }
  }
};

function behaviorApplicability(id){const a=APPLICABILITY.behaviors[id];return `<section class="applicability behavior-applicability"><div class="detail-label">DOES THIS APPLY TO YOUR APPLICATION?</div><div class="applicability-grid"><div><h3>Applies when</h3><p>${esc(a.applies)}</p></div><div><h3>May be out of scope when</h3><p>${esc(a.notApplicable)}</p></div></div></section>`}
function mountApplicability(){const a=APPLICABILITY.segments[PAGE_SEGMENT],target=document.querySelector('#segmentApplicability');if(!target)return;target.innerHTML=`<div class="section-index">CHECK YOUR APPLICATION SETUP</div><h2>When this segment matters</h2><span class="impact-flag live-impact">${esc(a.setup)}</span><div class="applicability-grid"><div><h3>Applies when</h3><p>${esc(a.applies)}</p></div><div><h3>May be out of scope when</h3><p>${esc(a.notApplicable)}</p></div></div><p class="scope-note">A control can reduce risk without removing the behavior. Review the specific issues below before excluding the entire segment; call direction alone rarely determines applicability.</p>`}
