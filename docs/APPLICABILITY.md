# Applicability reference

Editorial product-scoping guidance displayed on segment pages and in behavior details.

## Segment 1

**Setup:** Both inbound and outbound

**Applies when:** People can speak while the bot is talking, answer early, or repeat themselves during delays.

**May be out of scope when:** Individual overlap issues can be out of scope in an enforced push-to-talk or strictly alternating interface. Inbound versus outbound direction alone does not remove turn-taking risk.

## Segment 2

**Setup:** Both inbound and outbound

**Applies when:** The bot accepts spoken answers and uses silence to decide whether the user has finished, especially for lookup tasks or long values.

**May be out of scope when:** A specific capture flow may be out of scope if it uses only buttons, keypad input, or a completion control instead of spoken endpointing. A controlled microphone does not remove natural thinking pauses.

## Segment 3

**Setup:** Both inbound and outbound

**Applies when:** Users can speak freely, restart, change their minds, or correct information before an action.

**May be out of scope when:** A specific field may be out of scope if it cannot be spoken or changed and comes only from a trusted structured source. Short prompts or yes/no flows alone do not prevent verbal self-correction.

## Segment 4

**Setup:** Environment-dependent

**Applies when:** Open microphones can pick up coughs, breathing, household noise, traffic, or typing alongside speech.

**May be out of scope when:** A particular noise source may be out of scope if the deployment physically excludes it. A controlled device can reduce acoustic variation, but filters or a quiet test room do not prove that all noise is excluded.

## Segment 5

**Setup:** Speaker setup matters

**Applies when:** One audio channel can contain callers, helpers, nearby people, or media; more than one participant may affect a transaction.

**May be out of scope when:** Wrong-speaker input can be out of scope only if the full audio path reliably isolates the sole authorized speaker. Speaker labels or diarization alone do not establish who is authorized to instruct the bot.

## Segment 6

**Setup:** Call legs and devices matter

**Applies when:** The bot uses telephone networks, customer-owned devices, keypad tones, outbound dialing, transfers, voicemail, or other automated systems.

**May be out of scope when:** Only exclude the unsupported device or call state: a locked-down device may remove Bluetooth switching, while a system with no dialing or transfer legs may exclude voicemail or IVR encounters. The whole segment is not removed by controlled hardware.

## Segment 7

**Setup:** Depends on captured fields

**Applies when:** Spoken values feed bookings, records, identification, addresses, contact details, amounts, or other tools.

**May be out of scope when:** A particular field type can be out of scope if the bot never captures, interprets, changes, or forwards it. A general information bot may exclude payment-amount capture while still needing reliable names, dates, or intent handling.

## Segment 8

**Setup:** Depends on task and permissions

**Applies when:** Users can change tasks, give indirect or conditional answers, cancel, correct the bot, or request a human.

**May be out of scope when:** Transactional cancellation and approval may be out of scope for a read-only information bot with no actions. Clarification, intent repair, and support requests can still apply.

## Segment 9

**Setup:** Both inbound and outbound

**Applies when:** People can become confused, frustrated, uncertain, distressed, or concerned about identity and privacy.

**May be out of scope when:** A one-way announcement with no listening or dialogue can exclude conversational response handling. A simple script, outbound campaign, or controlled device does not remove the caller’s trust concerns.

## Segment 10

**Setup:** Depends on supported speakers

**Applies when:** Users vary in accent, language, pace, volume, articulation, age, or preferred input method.

**May be out of scope when:** A specific language or audience condition can be outside the explicitly defined service population. Do not use a uniform device, assumed user profile, or narrow test sample to exclude accessibility needs.

## Segment 11

**Setup:** Depends on bot interaction design

**Applies when:** The bot asks questions, produces prompts, waits on tools, confirms values, or repairs conversations.

**May be out of scope when:** Individual prompt-related issues may be out of scope in an application that never uses that prompt pattern. A one-way announcement cannot have interactive confirmation failures, but prompt length and trust can still matter.

## Segment 12

**Setup:** Depends on data and authority

**Applies when:** The flow has permission limits, disclosures, verification, sensitive information, or a route to human assistance.

**May be out of scope when:** A specific policy step may be out of scope if the product genuinely has no such requirement or capability. Not asking for sensitive data does not prevent callers from volunteering it; inbound versus outbound alone is not an exemption.

## Behavior-specific scoping

### 1.1

**Applies when:** People can interrupt a spoken bot response to redirect the task.

**May be out of scope when:** No bot speech overlaps any enabled input window, and turn restrictions are explicit. Merely disabling barge-in leaves a lost-intent experience to assess.

### 1.2

**Applies when:** The audio system can stop bot speech when it detects caller activity.

**May be out of scope when:** The bot is not speaking or acoustic activity cannot interrupt its output; noise can still affect recognition in listening turns.

### 1.3

**Applies when:** The user can say “mm-hmm” or similar while the bot is speaking.

**May be out of scope when:** There is no simultaneous input during bot speech. The tradeoff of missing early answers should be reviewed separately.

### 1.4

**Applies when:** Answers may arrive before a bot question has finished.

**May be out of scope when:** A supported input control reliably prevents early spoken answers. A half-duplex design must make that restriction clear.

### 1.5

**Applies when:** Users can anticipate and complete the bot’s question.

**May be out of scope when:** The bot never asks spoken questions or the interface enforces a clear answer window without accepting early speech.

### 1.6

**Applies when:** Both sides can speak at the same time on the live audio path.

**May be out of scope when:** The interface guarantees alternating audio turns; this changes the interaction model rather than making free-flowing conversation safe.

### 1.7

**Applies when:** The bot can pause and resume an explanation after an interruption.

**May be out of scope when:** There is no interrupted content to resume, such as a listening-only capture step with no prior bot response.

### 1.8

**Applies when:** The caller may experience silence or an unexplained processing wait.

**May be out of scope when:** There is no two-way interaction or no waiting state exposed to the caller. Inbound/outbound direction is not a useful exclusion.

### 1.9

**Applies when:** Tool or response delays give the caller time to repeat an answer.

**May be out of scope when:** No repeated input can reach the same pending operation. Fast responses alone reduce exposure but do not guarantee exclusion.

### 1.10

**Applies when:** Silence or partial recognition can trigger the next bot response.

**May be out of scope when:** Turn completion is explicitly controlled by a button or keypad marker and spoken silence is not used to commit an answer.

### 1.11

**Applies when:** The user must wait for a response after finishing speech.

**May be out of scope when:** The application is a one-way message with no expected reply. Real-time two-way conversations still need a response-latency review.

### 2.1

**Applies when:** The recognizer accepts spontaneous speech with fillers such as “um.”

**May be out of scope when:** The field is entered exclusively by structured controls, with no spoken interpretation in that step.

### 2.2

**Applies when:** A user may think during an incomplete spoken answer.

**May be out of scope when:** A completion control ends capture and no silence-based decision is made in the relevant step.

### 2.3

**Applies when:** The user must find a card, document, order, or other information.

**May be out of scope when:** All required information is already available and the flow never asks the user to look anything up. Thinking pauses can still apply.

### 2.4

**Applies when:** The bot asks for facts the caller has to recall.

**May be out of scope when:** The value comes only from an authoritative structured source and no uncertain spoken recollection is accepted.

### 2.5

**Applies when:** Long numbers, codes, names, or addresses are read aloud in chunks.

**May be out of scope when:** Those fields are captured only through keypad, typed, or prefilled input; any remaining long spoken values still need review.

### 2.6

**Applies when:** Breathing gaps can influence speech endpointing.

**May be out of scope when:** The relevant input is not speech, or completion is explicitly signaled instead of inferred from pauses.

### 2.7

**Applies when:** A spoken response may continue after a long thinking or reading gap.

**May be out of scope when:** The step does not use spoken input or wait on unfinished answers. A generous timeout is a mitigation, not an exclusion.

### 2.8

**Applies when:** The application waits for the user and must distinguish silence from absence.

**May be out of scope when:** There is no interactive listening state, such as a fire-and-finish announcement with no response flow.

### 3.1

**Applies when:** A spoken answer can be corrected before or during a tool action.

**May be out of scope when:** The relevant value is never derived from speech and cannot be changed through this conversation.

### 3.2

**Applies when:** Users can abandon one spoken intent in favor of another.

**May be out of scope when:** No free-form task selection exists and spoken fragments cannot select or trigger a task.

### 3.3

**Applies when:** The bot interprets spontaneous utterances containing restarts.

**May be out of scope when:** The step accepts only structured non-speech input. Restricting prompts to short questions does not exclude restarts.

### 3.4

**Applies when:** Repeated words can influence intent or create duplicate requests.

**May be out of scope when:** No speech-to-task interpretation is performed in the relevant flow.

### 3.5

**Applies when:** A user can replace a field value, destination, or other instruction.

**May be out of scope when:** The field cannot be set or changed through the voice flow and is not used from the transcript downstream.

### 3.6

**Applies when:** Partial words can be recognized or committed before the user finishes.

**May be out of scope when:** The step uses no spoken value or intent capture, or partial speech cannot affect the final decision.

### 3.7

**Applies when:** Speech capture must handle repeated or prolonged sounds.

**May be out of scope when:** The particular input step is non-speech. A controlled device or a short answer format does not exclude this speaker variation.

### 3.8

**Applies when:** The caller can abandon an identifier or switch input methods mid-answer.

**May be out of scope when:** The field is not spoken, cannot be switched, and partial captured data is never used by downstream processing.

### 4.1

**Applies when:** A cough can enter the microphone while the bot speaks.

**May be out of scope when:** Cough events cannot trigger an interruption in that input state. They may still interfere with recognition elsewhere.

### 4.2

**Applies when:** Breaths or sighs can trigger a new turn or an interruption.

**May be out of scope when:** The bot does not listen in that state or non-speech events cannot trigger task transitions; emotional context may still matter.

### 4.3

**Applies when:** Laughter can occur alone or within meaningful speech.

**May be out of scope when:** The relevant capture step is non-speech. A scripted task does not prevent a real caller from laughing.

### 4.4

**Applies when:** An open microphone can pick up mouth noises.

**May be out of scope when:** No microphone input reaches speech-event detection in the relevant step.

### 4.5

**Applies when:** A caller may type near an open microphone or use speakerphone.

**May be out of scope when:** The deployment physically excludes keyboards and related tapping near the microphone. Noise filtering alone is not a guarantee.

### 4.6

**Applies when:** Impact sounds can reach speech detection.

**May be out of scope when:** The installation genuinely excludes these sounds from the audio path. Controlled hardware alone does not exclude environmental noise.

### 4.7

**Applies when:** Callers can use the service from a vehicle, street, or other noisy setting.

**May be out of scope when:** The service is confined to a verified quiet location with enforced audio conditions. Customer-owned phones generally do not meet this condition.

### 4.8

**Applies when:** Callers may have children, pets, media, or household noise nearby.

**May be out of scope when:** The physical environment and audio isolation reliably exclude these sources, rather than merely assuming a quiet caller.

### 5.1

**Applies when:** The primary caller can speak to someone else while the microphone remains open.

**May be out of scope when:** A verified single-speaker environment excludes side conversations across the full audio path.

### 5.2

**Applies when:** A helper or nearby person can answer a question the bot asked the caller.

**May be out of scope when:** Only the authorized caller’s isolated audio is accepted. Multi-speaker recognition alone is not authorization.

### 5.3

**Applies when:** Several people can join the same call or speak through one device.

**May be out of scope when:** The supported session enforces one authorized participant and isolates that speaker. Speakerphone restrictions alone may not exclude nearby voices.

### 5.4

**Applies when:** Children or other household members can be audible.

**May be out of scope when:** The deployment reliably excludes household interruptions; the voice of the authorized user still needs to be supported.

### 5.5

**Applies when:** TV, radio, podcasts, or other media may enter the microphone.

**May be out of scope when:** Media playback is excluded from the captured audio path by the actual environment and routing configuration.

### 5.6

**Applies when:** Calls occur in shared workspaces or near other conversations.

**May be out of scope when:** The microphone path is verified to isolate the sole speaker and exclude floor cross-talk.

### 5.7

**Applies when:** The user may consult another person for information during a call.

**May be out of scope when:** The task and operating environment do not involve consulting others. A single-speaker model does not by itself prevent consultation.

### 5.8

**Applies when:** The caller intentionally relays another person’s answer.

**May be out of scope when:** The workflow never accepts relayed input for the relevant field. Distinguishing speakers does not exclude a caller quoting a helper.

### 6.1

**Applies when:** Bot audio can be replayed through a loudspeaker and recaptured by a microphone.

**May be out of scope when:** The full supported audio path prevents playback from reaching capture, as verified for the controlled device; echo cancellation merely reduces risk.

### 6.2

**Applies when:** Calls traverse telephone codecs or other constrained audio paths.

**May be out of scope when:** The entire supported path avoids the affected narrowband codecs and compression. A controlled endpoint does not guarantee an unconstrained network path.

### 6.3

**Applies when:** Audio travels over a network that can lose or delay packets.

**May be out of scope when:** Capture and processing are entirely local with no packet-based audio transport. A managed network reduces risk but is not a complete exclusion.

### 6.4

**Applies when:** The user, operating system, app, or device can mute audio.

**May be out of scope when:** No mute or capture-suppression mechanism exists anywhere on the supported path. Hiding a mute button alone is insufficient.

### 6.5

**Applies when:** Callers can change Bluetooth, headset, car, or output/input routing during a session.

**May be out of scope when:** A locked-down device prevents route switching at every supported layer. This removes switching-specific issues, not all channel failures.

### 6.6

**Applies when:** The peer can place the bot on hold or the call can enter a hold queue.

**May be out of scope when:** The supported device and call routing cannot enter a hold state or send hold announcements.

### 6.7

**Applies when:** Call-waiting tones or device notifications can enter the audio stream.

**May be out of scope when:** The controlled endpoint and network path exclude those tones from captured audio. Muting app notifications alone may not block network-generated beeps.

### 6.8

**Applies when:** Keypad tones are accepted, expected, or can affect the flow alongside speech.

**May be out of scope when:** The interface has no keypad channel, accepts no tones, and clearly supports voice only. Simply failing to implement keypad handling on a telephone flow is not an exclusion.

### 6.9

**Applies when:** The bot dials a number or transfers to a call leg that may reach voicemail or an answering machine.

**May be out of scope when:** The system never dials or transfers and every accepted session is known to contain a live user. “Inbound-only” is not enough if there are outbound transfer legs.

### 6.10

**Applies when:** Dialing or transfers can reach a phone tree, another bot, or an automated endpoint.

**May be out of scope when:** All call legs are restricted to verified human endpoints with no route to automated systems. Initial inbound/outbound direction alone is insufficient.

### 7.1

**Applies when:** Spoken identifiers or numbers can be chunked, regrouped, or corrected.

**May be out of scope when:** No spoken numeric sequence is captured or forwarded; identifiers come only from a trusted structured source.

### 7.2

**Applies when:** The caller can correct digits in an identifier or other numerical value.

**May be out of scope when:** Digit fields are never sourced or updated from voice. The remaining conversational correction risks still apply.

### 7.3

**Applies when:** Spoken numbers influence a date, amount, identifier, address, or other field.

**May be out of scope when:** No numerical field is interpreted from speech or used from transcripts in downstream processing.

### 7.4

**Applies when:** The bot captures names or other spelled values.

**May be out of scope when:** Names and spellings are not collected, changed, or used from the voice conversation.

### 7.5

**Applies when:** Users can spell letters using example words, such as “B as in boy.”

**May be out of scope when:** There is no spoken spelling input or letter-based identifier capture in the supported tasks.

### 7.6

**Applies when:** Email addresses are spoken, corrected, or extracted for follow-up.

**May be out of scope when:** The bot never captures or changes email addresses; any email comes only from an authoritative structured record.

### 7.7

**Applies when:** Addresses or unit details are captured or updated through the conversation.

**May be out of scope when:** Address data is never derived from speech or transcripts and cannot be updated through this application.

### 7.8

**Applies when:** Dates or times are interpreted for bookings, deadlines, reminders, or records.

**May be out of scope when:** No date/time is interpreted or acted on from the conversation. An outbound-only scheduler still needs this behavior.

### 7.9

**Applies when:** Spoken amounts feed prices, payments, refunds, balances, orders, or quotes.

**May be out of scope when:** The application neither captures nor uses spoken amounts for any downstream operation. Read-only spoken-number understanding may still need separate review.

### 8.1

**Applies when:** The user can request several supported tasks in one turn.

**May be out of scope when:** The application supports no task selection or task execution from speech. A single advertised task does not prevent callers from asking for more.

### 8.2

**Applies when:** Users may supply useful information before the corresponding prompt.

**May be out of scope when:** The flow has no multi-field spoken capture and no value given early can be used later.

### 8.3

**Applies when:** A spoken yes/no interpretation determines the next step.

**May be out of scope when:** No branch or action depends on interpreting spoken agreement or refusal; structured button input handles that decision.

### 8.4

**Applies when:** A caller can revise a spoken yes/no answer within a turn.

**May be out of scope when:** The relevant decision is never made from speech. A transactional bot with short yes/no questions still needs this behavior.

### 8.5

**Applies when:** A user’s approval can contain conditions that matter to an action.

**May be out of scope when:** The bot has no approval-dependent actions and conditional answers are not used to authorize downstream processing.

### 8.6

**Applies when:** The bot asks questions or gives information that a user may ask to repeat or explain.

**May be out of scope when:** The application has no two-way conversational exchange. Prompt simplicity alone does not exclude clarification requests.

### 8.7

**Applies when:** The bot maintains values or task state that the user can correct.

**May be out of scope when:** No spoken information affects retained conversation state or downstream actions. Not persisting data after the call does not remove live-state mistakes.

### 8.8

**Applies when:** A caller can signal that the bot has misunderstood their request.

**May be out of scope when:** No interpretation or two-way dialogue takes place. This is broadly applicable to conversational inbound and outbound bots.

### 8.9

**Applies when:** The bot can continue a task or trigger an action after the user withdraws it.

**May be out of scope when:** There are no pending or future actions controlled by the dialogue. The user may still need a way to end an unwanted conversation.

### 8.10

**Applies when:** The product offers, requires, or encounters requests for human assistance.

**May be out of scope when:** Human escalation is explicitly outside the service’s supported model and this is clearly communicated; a usable alternative support route still needs consideration.

### 9.1

**Applies when:** The caller may feel ignored, repeat information, or encounter repeated prompts.

**May be out of scope when:** There is no conversational response handling, such as a one-way announcement. Direction of calling does not exclude frustration.

### 9.2

**Applies when:** The application must respond to angry or dissatisfied users.

**May be out of scope when:** The app does not listen or respond to the recipient. A narrow script does not make anger impossible.

### 9.3

**Applies when:** The task needs information the user may be unsure about.

**May be out of scope when:** The relevant flow uses only verified structured inputs and never interprets an uncertain spoken answer as final.

### 9.4

**Applies when:** The conversation requests or may elicit information a caller does not want to say aloud.

**May be out of scope when:** The application neither asks for nor uses such information in the supported flow. Unsolicited sensitive disclosure remains a separate concern.

### 9.5

**Applies when:** The user may question who is calling, who operates the bot, or whether the interaction is legitimate.

**May be out of scope when:** No genuine person interacts with the system, such as an isolated test harness. Outbound calls often heighten rather than remove this concern.

### 9.6

**Applies when:** The bot uses natural-language agreement or sentiment to interpret a response.

**May be out of scope when:** No decision is made from natural-language responses, for example a non-listening notification.

### 9.7

**Applies when:** Meaningful speech may be mixed with laughter.

**May be out of scope when:** Speech is not captured or interpreted in the relevant step.

### 9.8

**Applies when:** Callers may be distressed and the service needs to respond or route them appropriately.

**May be out of scope when:** The system performs no listening or conversational response. Do not exclude distress solely because it is uncommon in the intended task.

### 10.1

**Applies when:** The user population includes pronunciation or dialect variation.

**May be out of scope when:** There is no spoken recognition. A controlled device or assumed standard accent is not a reliable basis for exclusion.

### 10.2

**Applies when:** Supported callers may mix languages or language varieties.

**May be out of scope when:** The supported task does not interpret speech, or the language variant is genuinely outside the defined service with a clear fallback. A configured recognizer language does not prevent code-switching.

### 10.3

**Applies when:** Users can supply rapid speech or long explanations.

**May be out of scope when:** The step uses non-speech input or a genuinely constrained input mechanism that prevents rapid spoken values.

### 10.4

**Applies when:** The interface recognizes speech and infers turn completion from timing.

**May be out of scope when:** The relevant step uses non-speech input or an explicit completion control. A known speaker or device does not guarantee a constant speaking pace.

### 10.5

**Applies when:** Callers may speak softly or the microphone receives low-volume speech.

**May be out of scope when:** The step uses no spoken input. Controlled microphone levels can reduce exposure but do not guarantee the caller will speak at a fixed volume.

### 10.6

**Applies when:** Loud speech or environmental noise can clip the captured audio.

**May be out of scope when:** The step uses no audio capture. Device control must cover actual capture levels and caller behavior before treating clipping as excluded.

### 10.7

**Applies when:** People with repetitions, prolongations, or speech blocks may use the service.

**May be out of scope when:** The particular task is completed without speech. Do not assume a narrow task or fixed device removes this accessibility requirement.

### 10.8

**Applies when:** The supported population includes people with reduced articulation clarity.

**May be out of scope when:** The step does not require speech and has a fully usable supported alternative. A small recognition test set does not establish that this need is absent.

### 10.9

**Applies when:** Older adults may use the application or the flow relies on fixed speech timing.

**May be out of scope when:** The relevant audience genuinely excludes this group by service definition, or no speech is recognized; other slow or variable speech remains relevant.

### 10.10

**Applies when:** Children can access the voice channel or the product serves younger callers.

**May be out of scope when:** Access is reliably restricted to the defined adult population. Voice pitch alone must not be treated as proof of age or authorization.

### 11.1

**Applies when:** The bot delivers prompts or explanations before inviting an answer.

**May be out of scope when:** The bot produces no spoken prompts, or the specific long-prompt pattern does not exist. Concise prompts reduce exposure but still need interruption handling.

### 11.2

**Applies when:** The user waits while the bot processes input or calls tools.

**May be out of scope when:** There is no interactive response expectation, such as a one-way recording. Fast nominal response times are not a full exclusion.

### 11.3

**Applies when:** Question wording constrains what the user thinks is a valid answer.

**May be out of scope when:** The bot asks no questions and interprets no responses. A rigid script does not by itself prevent unexpected answers.

### 11.4

**Applies when:** Users can correct the bot’s values or task interpretation.

**May be out of scope when:** No spoken input can affect state or actions. Not storing user information after the call does not remove correction failures during it.

### 11.5

**Applies when:** The bot asks for repeated confirmations or could treat several approvals as separate actions.

**May be out of scope when:** The flow has no confirmation step and repeated approval cannot trigger another action.

### 11.6

**Applies when:** Unconfirmed values can drive a consequential action or system update.

**May be out of scope when:** The bot is read-only, cannot change anything, and no downstream consumer treats its unconfirmed output as authoritative.

### 11.7

**Applies when:** The person hears bot speech and its delivery affects engagement or trust.

**May be out of scope when:** There is no user-facing spoken output. Outbound campaigns and controlled devices still have voice-delivery concerns.

### 11.8

**Applies when:** The interface uses spoken menus or expects narrow response phrasing.

**May be out of scope when:** The app has no menu-style question or restricted grammar. Natural-language support should be verified rather than assumed.

### 12.1

**Applies when:** The approved flow requires a notice or disclosure that may be interrupted.

**May be out of scope when:** No disclosure is required for the specific service and context, as established by the product’s approved requirements. Device or call-direction settings do not decide this alone.

### 12.2

**Applies when:** The caller can limit permission for recording, processing, or an action.

**May be out of scope when:** No permission-dependent action is performed. A general service flow still needs a way to respect restrictions it encounters.

### 12.3

**Applies when:** The flow requests sensitive information or identity verification that a user may refuse.

**May be out of scope when:** The application has no such request or verification dependency. The caller can still refuse participation in the broader conversation.

### 12.4

**Applies when:** An open speech channel lets the caller volunteer sensitive information, even if it is never requested.

**May be out of scope when:** Do not exclude this merely because the task does not need sensitive data. Excluding a specific storage or routing impact requires verified controls across the entire audio, transcript, logging, and tool path.

### 12.5

**Applies when:** The user must authenticate or transfer through flows with verification state.

**May be out of scope when:** No identity verification is performed or relied on anywhere in the application and its handoffs.

### 12.6

**Applies when:** A sensitive workflow can need a human handoff or receive a request for one.

**May be out of scope when:** The application has no sensitive workflow or such handoff path. Any support request that can arise still needs a clear supported response.
