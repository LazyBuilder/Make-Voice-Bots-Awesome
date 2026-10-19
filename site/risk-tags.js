const RISK_GUIDE={
  "types": {
    "experience": {
      "label": "Experience risk",
      "meaning": "Degrades the flow, pace, or ease of the conversation."
    },
    "trust": {
      "label": "Trust risk",
      "meaning": "Makes the caller doubt that the bot listens, understands, or will act reliably."
    },
    "data": {
      "label": "Data risk",
      "meaning": "Captures incomplete, wrong, stale, or misattributed data, complicating downstream processing and potentially producing wrong results."
    },
    "operational": {
      "label": "Operational risk",
      "meaning": "Disrupts task completion, causes loops or duplicate actions, or makes handoffs fail."
    },
    "financial": {
      "label": "Financial risk",
      "meaning": "Can lead to an incorrect payment, refund, charge, or other transaction when used in a financial workflow."
    },
    "privacy": {
      "label": "Privacy & security risk",
      "meaning": "Can expose sensitive information, use the wrong identity, or mishandle access to an account."
    },
    "consent": {
      "label": "Consent & boundary risk",
      "meaning": "Can ignore a refusal, restriction, cancellation, or required permission before an action."
    },
    "accessibility": {
      "label": "Accessibility risk",
      "meaning": "Can prevent callers with different speech, language, or input needs from completing the task."
    }
  },
  "behaviors": {
    "1.1": {
      "risks": [
        "experience",
        "trust",
        "data",
        "operational"
      ],
      "primary": "live",
      "after": "Review interruption and response timing in permitted call diagnostics, then adjust turn handling and retest before the next release.",
      "live": "Keep the conversation state intact, acknowledge the caller’s current intent, and clarify any answer lost to interruption or delay."
    },
    "1.2": {
      "risks": [
        "experience"
      ],
      "primary": "live",
      "after": "Review interruption and response timing in permitted call diagnostics, then adjust turn handling and retest before the next release.",
      "live": "Keep the conversation state intact, acknowledge the caller’s current intent, and clarify any answer lost to interruption or delay."
    },
    "1.3": {
      "risks": [
        "experience"
      ],
      "primary": "live",
      "after": "Review interruption and response timing in permitted call diagnostics, then adjust turn handling and retest before the next release.",
      "live": "Keep the conversation state intact, acknowledge the caller’s current intent, and clarify any answer lost to interruption or delay."
    },
    "1.4": {
      "risks": [
        "experience",
        "trust",
        "data"
      ],
      "primary": "live",
      "after": "Review interruption and response timing in permitted call diagnostics, then adjust turn handling and retest before the next release.",
      "live": "Keep the conversation state intact, acknowledge the caller’s current intent, and clarify any answer lost to interruption or delay."
    },
    "1.5": {
      "risks": [
        "experience",
        "trust",
        "data"
      ],
      "primary": "live",
      "after": "Review interruption and response timing in permitted call diagnostics, then adjust turn handling and retest before the next release.",
      "live": "Keep the conversation state intact, acknowledge the caller’s current intent, and clarify any answer lost to interruption or delay."
    },
    "1.6": {
      "risks": [
        "experience",
        "trust",
        "data",
        "operational"
      ],
      "primary": "live",
      "after": "Review interruption and response timing in permitted call diagnostics, then adjust turn handling and retest before the next release.",
      "live": "Keep the conversation state intact, acknowledge the caller’s current intent, and clarify any answer lost to interruption or delay."
    },
    "1.7": {
      "risks": [
        "experience"
      ],
      "primary": "live",
      "after": "Review interruption and response timing in permitted call diagnostics, then adjust turn handling and retest before the next release.",
      "live": "Keep the conversation state intact, acknowledge the caller’s current intent, and clarify any answer lost to interruption or delay."
    },
    "1.8": {
      "risks": [
        "experience",
        "trust",
        "operational"
      ],
      "primary": "live",
      "after": "Review interruption and response timing in permitted call diagnostics, then adjust turn handling and retest before the next release.",
      "live": "Keep the conversation state intact, acknowledge the caller’s current intent, and clarify any answer lost to interruption or delay."
    },
    "1.9": {
      "risks": [
        "experience",
        "trust",
        "data",
        "operational"
      ],
      "primary": "live",
      "after": "Review interruption and response timing in permitted call diagnostics, then adjust turn handling and retest before the next release.",
      "live": "Keep the conversation state intact, acknowledge the caller’s current intent, and clarify any answer lost to interruption or delay."
    },
    "1.10": {
      "risks": [
        "experience",
        "trust",
        "data",
        "operational"
      ],
      "primary": "live",
      "after": "Review interruption and response timing in permitted call diagnostics, then adjust turn handling and retest before the next release.",
      "live": "Keep the conversation state intact, acknowledge the caller’s current intent, and clarify any answer lost to interruption or delay."
    },
    "1.11": {
      "risks": [
        "experience",
        "trust",
        "operational"
      ],
      "primary": "after",
      "after": "Review interruption and response timing in permitted call diagnostics, then adjust turn handling and retest before the next release.",
      "live": "Keep the conversation state intact, acknowledge the caller’s current intent, and clarify any answer lost to interruption or delay."
    },
    "2.1": {
      "risks": [
        "experience",
        "data"
      ],
      "primary": "live",
      "after": "Review pause-related failures and tune waiting behavior for the affected task; test both continuing speech and genuine abandonment.",
      "live": "Allow the caller to continue, use a helpful check-in when needed, and do not act on an incomplete answer."
    },
    "2.2": {
      "risks": [
        "experience",
        "trust",
        "data",
        "accessibility"
      ],
      "primary": "live",
      "after": "Review pause-related failures and tune waiting behavior for the affected task; test both continuing speech and genuine abandonment.",
      "live": "Allow the caller to continue, use a helpful check-in when needed, and do not act on an incomplete answer."
    },
    "2.3": {
      "risks": [
        "experience",
        "trust",
        "operational",
        "accessibility"
      ],
      "primary": "live",
      "after": "Review pause-related failures and tune waiting behavior for the affected task; test both continuing speech and genuine abandonment.",
      "live": "Allow the caller to continue, use a helpful check-in when needed, and do not act on an incomplete answer."
    },
    "2.4": {
      "risks": [
        "experience",
        "data"
      ],
      "primary": "live",
      "after": "Review pause-related failures and tune waiting behavior for the affected task; test both continuing speech and genuine abandonment.",
      "live": "Allow the caller to continue, use a helpful check-in when needed, and do not act on an incomplete answer."
    },
    "2.5": {
      "risks": [
        "experience",
        "trust",
        "data",
        "operational",
        "accessibility"
      ],
      "primary": "live",
      "after": "Review pause-related failures and tune waiting behavior for the affected task; test both continuing speech and genuine abandonment.",
      "live": "Allow the caller to continue, use a helpful check-in when needed, and do not act on an incomplete answer."
    },
    "2.6": {
      "risks": [
        "experience",
        "accessibility"
      ],
      "primary": "live",
      "after": "Review pause-related failures and tune waiting behavior for the affected task; test both continuing speech and genuine abandonment.",
      "live": "Allow the caller to continue, use a helpful check-in when needed, and do not act on an incomplete answer."
    },
    "2.7": {
      "risks": [
        "experience",
        "trust",
        "data",
        "accessibility"
      ],
      "primary": "live",
      "after": "Review pause-related failures and tune waiting behavior for the affected task; test both continuing speech and genuine abandonment.",
      "live": "Allow the caller to continue, use a helpful check-in when needed, and do not act on an incomplete answer."
    },
    "2.8": {
      "risks": [
        "experience",
        "operational"
      ],
      "primary": "live",
      "after": "Review pause-related failures and tune waiting behavior for the affected task; test both continuing speech and genuine abandonment.",
      "live": "Allow the caller to continue, use a helpful check-in when needed, and do not act on an incomplete answer."
    },
    "3.1": {
      "risks": [
        "experience",
        "trust",
        "data",
        "operational"
      ],
      "primary": "live",
      "after": "Check that corrected values reached downstream systems and resolve stale or duplicate state before retrying any action.",
      "live": "Clarify the final intended value or task and prevent a pending action from using the abandoned version."
    },
    "3.2": {
      "risks": [
        "experience",
        "trust",
        "data",
        "operational"
      ],
      "primary": "live",
      "after": "Check that corrected values reached downstream systems and resolve stale or duplicate state before retrying any action.",
      "live": "Clarify the final intended value or task and prevent a pending action from using the abandoned version."
    },
    "3.3": {
      "risks": [
        "experience",
        "data"
      ],
      "primary": "live",
      "after": "Check that corrected values reached downstream systems and resolve stale or duplicate state before retrying any action.",
      "live": "Clarify the final intended value or task and prevent a pending action from using the abandoned version."
    },
    "3.4": {
      "risks": [
        "experience",
        "data"
      ],
      "primary": "live",
      "after": "Check that corrected values reached downstream systems and resolve stale or duplicate state before retrying any action.",
      "live": "Clarify the final intended value or task and prevent a pending action from using the abandoned version."
    },
    "3.5": {
      "risks": [
        "experience",
        "trust",
        "data",
        "operational"
      ],
      "primary": "live",
      "after": "Check that corrected values reached downstream systems and resolve stale or duplicate state before retrying any action.",
      "live": "Clarify the final intended value or task and prevent a pending action from using the abandoned version."
    },
    "3.6": {
      "risks": [
        "experience",
        "trust",
        "data"
      ],
      "primary": "live",
      "after": "Check that corrected values reached downstream systems and resolve stale or duplicate state before retrying any action.",
      "live": "Clarify the final intended value or task and prevent a pending action from using the abandoned version."
    },
    "3.7": {
      "risks": [
        "experience",
        "data",
        "accessibility"
      ],
      "primary": "live",
      "after": "Check that corrected values reached downstream systems and resolve stale or duplicate state before retrying any action.",
      "live": "Clarify the final intended value or task and prevent a pending action from using the abandoned version."
    },
    "3.8": {
      "risks": [
        "experience",
        "trust",
        "data",
        "operational"
      ],
      "primary": "live",
      "after": "Check that corrected values reached downstream systems and resolve stale or duplicate state before retrying any action.",
      "live": "Clarify the final intended value or task and prevent a pending action from using the abandoned version."
    },
    "4.1": {
      "risks": [
        "experience"
      ],
      "primary": "live",
      "after": "Reproduce the noise condition with approved test audio, tune detection or filtering, and verify that quiet and short answers still work.",
      "live": "Avoid interpreting non-speech as instructions; clarify affected words and offer another input route if audio stays unreliable."
    },
    "4.2": {
      "risks": [
        "experience"
      ],
      "primary": "live",
      "after": "Reproduce the noise condition with approved test audio, tune detection or filtering, and verify that quiet and short answers still work.",
      "live": "Avoid interpreting non-speech as instructions; clarify affected words and offer another input route if audio stays unreliable."
    },
    "4.3": {
      "risks": [
        "experience",
        "data"
      ],
      "primary": "live",
      "after": "Reproduce the noise condition with approved test audio, tune detection or filtering, and verify that quiet and short answers still work.",
      "live": "Avoid interpreting non-speech as instructions; clarify affected words and offer another input route if audio stays unreliable."
    },
    "4.4": {
      "risks": [
        "experience"
      ],
      "primary": "after",
      "after": "Reproduce the noise condition with approved test audio, tune detection or filtering, and verify that quiet and short answers still work.",
      "live": "Avoid interpreting non-speech as instructions; clarify affected words and offer another input route if audio stays unreliable."
    },
    "4.5": {
      "risks": [
        "experience"
      ],
      "primary": "after",
      "after": "Reproduce the noise condition with approved test audio, tune detection or filtering, and verify that quiet and short answers still work.",
      "live": "Avoid interpreting non-speech as instructions; clarify affected words and offer another input route if audio stays unreliable."
    },
    "4.6": {
      "risks": [
        "experience"
      ],
      "primary": "live",
      "after": "Reproduce the noise condition with approved test audio, tune detection or filtering, and verify that quiet and short answers still work.",
      "live": "Avoid interpreting non-speech as instructions; clarify affected words and offer another input route if audio stays unreliable."
    },
    "4.7": {
      "risks": [
        "experience",
        "data",
        "operational"
      ],
      "primary": "live",
      "after": "Reproduce the noise condition with approved test audio, tune detection or filtering, and verify that quiet and short answers still work.",
      "live": "Avoid interpreting non-speech as instructions; clarify affected words and offer another input route if audio stays unreliable."
    },
    "4.8": {
      "risks": [
        "experience",
        "data",
        "operational"
      ],
      "primary": "live",
      "after": "Reproduce the noise condition with approved test audio, tune detection or filtering, and verify that quiet and short answers still work.",
      "live": "Avoid interpreting non-speech as instructions; clarify affected words and offer another input route if audio stays unreliable."
    },
    "5.1": {
      "risks": [
        "experience",
        "trust",
        "data",
        "operational"
      ],
      "primary": "live",
      "after": "Investigate whether background speech was accepted as caller input and review speaker attribution and confirmation safeguards.",
      "live": "Ask the authorized caller to confirm the directed instruction before a consequential action."
    },
    "5.2": {
      "risks": [
        "experience",
        "trust",
        "data",
        "operational",
        "financial",
        "privacy",
        "consent"
      ],
      "primary": "live",
      "after": "Investigate whether background speech was accepted as caller input and review speaker attribution and confirmation safeguards.",
      "live": "Ask the authorized caller to confirm the directed instruction before a consequential action."
    },
    "5.3": {
      "risks": [
        "experience",
        "trust",
        "data",
        "operational",
        "financial",
        "privacy",
        "consent"
      ],
      "primary": "live",
      "after": "Investigate whether background speech was accepted as caller input and review speaker attribution and confirmation safeguards.",
      "live": "Ask the authorized caller to confirm the directed instruction before a consequential action."
    },
    "5.4": {
      "risks": [
        "experience"
      ],
      "primary": "live",
      "after": "Investigate whether background speech was accepted as caller input and review speaker attribution and confirmation safeguards.",
      "live": "Ask the authorized caller to confirm the directed instruction before a consequential action."
    },
    "5.5": {
      "risks": [
        "experience",
        "trust",
        "data"
      ],
      "primary": "live",
      "after": "Investigate whether background speech was accepted as caller input and review speaker attribution and confirmation safeguards.",
      "live": "Ask the authorized caller to confirm the directed instruction before a consequential action."
    },
    "5.6": {
      "risks": [
        "experience",
        "trust",
        "data",
        "operational",
        "privacy"
      ],
      "primary": "after",
      "after": "Investigate whether background speech was accepted as caller input and review speaker attribution and confirmation safeguards.",
      "live": "Ask the authorized caller to confirm the directed instruction before a consequential action."
    },
    "5.7": {
      "risks": [
        "experience",
        "data"
      ],
      "primary": "live",
      "after": "Investigate whether background speech was accepted as caller input and review speaker attribution and confirmation safeguards.",
      "live": "Ask the authorized caller to confirm the directed instruction before a consequential action."
    },
    "5.8": {
      "risks": [
        "experience",
        "data"
      ],
      "primary": "live",
      "after": "Investigate whether background speech was accepted as caller input and review speaker attribution and confirmation safeguards.",
      "live": "Ask the authorized caller to confirm the directed instruction before a consequential action."
    },
    "6.1": {
      "risks": [
        "experience",
        "data",
        "operational"
      ],
      "primary": "after",
      "after": "Investigate channel and device failures, reconcile any interrupted or duplicate action, and retest the affected call-state branch.",
      "live": "Pause uncertain actions, recheck affected input, and use the supported alternate channel or handoff if the call cannot continue reliably."
    },
    "6.2": {
      "risks": [
        "experience",
        "data",
        "operational"
      ],
      "primary": "after",
      "after": "Investigate channel and device failures, reconcile any interrupted or duplicate action, and retest the affected call-state branch.",
      "live": "Pause uncertain actions, recheck affected input, and use the supported alternate channel or handoff if the call cannot continue reliably."
    },
    "6.3": {
      "risks": [
        "experience",
        "data",
        "operational"
      ],
      "primary": "live",
      "after": "Investigate channel and device failures, reconcile any interrupted or duplicate action, and retest the affected call-state branch.",
      "live": "Pause uncertain actions, recheck affected input, and use the supported alternate channel or handoff if the call cannot continue reliably."
    },
    "6.4": {
      "risks": [
        "experience",
        "trust",
        "operational"
      ],
      "primary": "live",
      "after": "Investigate channel and device failures, reconcile any interrupted or duplicate action, and retest the affected call-state branch.",
      "live": "Pause uncertain actions, recheck affected input, and use the supported alternate channel or handoff if the call cannot continue reliably."
    },
    "6.5": {
      "risks": [
        "experience",
        "data",
        "operational"
      ],
      "primary": "live",
      "after": "Investigate channel and device failures, reconcile any interrupted or duplicate action, and retest the affected call-state branch.",
      "live": "Pause uncertain actions, recheck affected input, and use the supported alternate channel or handoff if the call cannot continue reliably."
    },
    "6.6": {
      "risks": [
        "experience",
        "operational"
      ],
      "primary": "live",
      "after": "Investigate channel and device failures, reconcile any interrupted or duplicate action, and retest the affected call-state branch.",
      "live": "Pause uncertain actions, recheck affected input, and use the supported alternate channel or handoff if the call cannot continue reliably."
    },
    "6.7": {
      "risks": [
        "experience"
      ],
      "primary": "live",
      "after": "Investigate channel and device failures, reconcile any interrupted or duplicate action, and retest the affected call-state branch.",
      "live": "Pause uncertain actions, recheck affected input, and use the supported alternate channel or handoff if the call cannot continue reliably."
    },
    "6.8": {
      "risks": [
        "experience",
        "data",
        "operational",
        "financial",
        "accessibility"
      ],
      "primary": "live",
      "after": "Investigate channel and device failures, reconcile any interrupted or duplicate action, and retest the affected call-state branch.",
      "live": "Pause uncertain actions, recheck affected input, and use the supported alternate channel or handoff if the call cannot continue reliably."
    },
    "6.9": {
      "risks": [
        "experience",
        "trust",
        "data",
        "operational"
      ],
      "primary": "after",
      "after": "Investigate channel and device failures, reconcile any interrupted or duplicate action, and retest the affected call-state branch.",
      "live": "Pause uncertain actions, recheck affected input, and use the supported alternate channel or handoff if the call cannot continue reliably."
    },
    "6.10": {
      "risks": [
        "experience",
        "data",
        "operational",
        "financial"
      ],
      "primary": "after",
      "after": "Investigate channel and device failures, reconcile any interrupted or duplicate action, and retest the affected call-state branch.",
      "live": "Pause uncertain actions, recheck affected input, and use the supported alternate channel or handoff if the call cannot continue reliably."
    },
    "7.1": {
      "risks": [
        "experience",
        "trust",
        "data",
        "operational",
        "privacy"
      ],
      "primary": "live",
      "after": "Validate affected downstream fields against an authorized source, reconcile incorrect records, and improve capture and confirmation tests.",
      "live": "Clarify and confirm the final value before using it in a consequential downstream action."
    },
    "7.2": {
      "risks": [
        "experience",
        "trust",
        "data",
        "operational",
        "privacy"
      ],
      "primary": "live",
      "after": "Validate affected downstream fields against an authorized source, reconcile incorrect records, and improve capture and confirmation tests.",
      "live": "Clarify and confirm the final value before using it in a consequential downstream action."
    },
    "7.3": {
      "risks": [
        "experience",
        "trust",
        "data",
        "operational",
        "financial",
        "privacy"
      ],
      "primary": "live",
      "after": "Validate affected downstream fields against an authorized source, reconcile incorrect records, and improve capture and confirmation tests.",
      "live": "Clarify and confirm the final value before using it in a consequential downstream action."
    },
    "7.4": {
      "risks": [
        "experience",
        "trust",
        "data"
      ],
      "primary": "live",
      "after": "Validate affected downstream fields against an authorized source, reconcile incorrect records, and improve capture and confirmation tests.",
      "live": "Clarify and confirm the final value before using it in a consequential downstream action."
    },
    "7.5": {
      "risks": [
        "experience",
        "data"
      ],
      "primary": "live",
      "after": "Validate affected downstream fields against an authorized source, reconcile incorrect records, and improve capture and confirmation tests.",
      "live": "Clarify and confirm the final value before using it in a consequential downstream action."
    },
    "7.6": {
      "risks": [
        "experience",
        "trust",
        "data",
        "operational",
        "privacy"
      ],
      "primary": "live",
      "after": "Validate affected downstream fields against an authorized source, reconcile incorrect records, and improve capture and confirmation tests.",
      "live": "Clarify and confirm the final value before using it in a consequential downstream action."
    },
    "7.7": {
      "risks": [
        "experience",
        "trust",
        "data",
        "operational"
      ],
      "primary": "live",
      "after": "Validate affected downstream fields against an authorized source, reconcile incorrect records, and improve capture and confirmation tests.",
      "live": "Clarify and confirm the final value before using it in a consequential downstream action."
    },
    "7.8": {
      "risks": [
        "experience",
        "trust",
        "data",
        "operational"
      ],
      "primary": "live",
      "after": "Validate affected downstream fields against an authorized source, reconcile incorrect records, and improve capture and confirmation tests.",
      "live": "Clarify and confirm the final value before using it in a consequential downstream action."
    },
    "7.9": {
      "risks": [
        "experience",
        "trust",
        "data",
        "operational",
        "financial"
      ],
      "primary": "live",
      "after": "Validate affected downstream fields against an authorized source, reconcile incorrect records, and improve capture and confirmation tests.",
      "live": "Clarify and confirm the final value before using it in a consequential downstream action."
    },
    "8.1": {
      "risks": [
        "experience",
        "trust",
        "data",
        "operational"
      ],
      "primary": "live",
      "after": "Review the final requested task, pending actions, and escalation result; reconcile unwanted changes and strengthen conversation-state tests.",
      "live": "Pause the old task, resolve the caller’s correction or boundary, and make the next permitted step clear."
    },
    "8.2": {
      "risks": [
        "experience",
        "trust",
        "data"
      ],
      "primary": "live",
      "after": "Review the final requested task, pending actions, and escalation result; reconcile unwanted changes and strengthen conversation-state tests.",
      "live": "Pause the old task, resolve the caller’s correction or boundary, and make the next permitted step clear."
    },
    "8.3": {
      "risks": [
        "experience",
        "trust",
        "data",
        "consent"
      ],
      "primary": "live",
      "after": "Review the final requested task, pending actions, and escalation result; reconcile unwanted changes and strengthen conversation-state tests.",
      "live": "Pause the old task, resolve the caller’s correction or boundary, and make the next permitted step clear."
    },
    "8.4": {
      "risks": [
        "experience",
        "trust",
        "data",
        "operational",
        "consent"
      ],
      "primary": "live",
      "after": "Review the final requested task, pending actions, and escalation result; reconcile unwanted changes and strengthen conversation-state tests.",
      "live": "Pause the old task, resolve the caller’s correction or boundary, and make the next permitted step clear."
    },
    "8.5": {
      "risks": [
        "experience",
        "trust",
        "data",
        "operational",
        "financial",
        "consent"
      ],
      "primary": "live",
      "after": "Review the final requested task, pending actions, and escalation result; reconcile unwanted changes and strengthen conversation-state tests.",
      "live": "Pause the old task, resolve the caller’s correction or boundary, and make the next permitted step clear."
    },
    "8.6": {
      "risks": [
        "experience"
      ],
      "primary": "live",
      "after": "Review the final requested task, pending actions, and escalation result; reconcile unwanted changes and strengthen conversation-state tests.",
      "live": "Pause the old task, resolve the caller’s correction or boundary, and make the next permitted step clear."
    },
    "8.7": {
      "risks": [
        "experience",
        "trust",
        "data",
        "operational"
      ],
      "primary": "live",
      "after": "Review the final requested task, pending actions, and escalation result; reconcile unwanted changes and strengthen conversation-state tests.",
      "live": "Pause the old task, resolve the caller’s correction or boundary, and make the next permitted step clear."
    },
    "8.8": {
      "risks": [
        "experience",
        "trust",
        "data",
        "operational"
      ],
      "primary": "live",
      "after": "Review the final requested task, pending actions, and escalation result; reconcile unwanted changes and strengthen conversation-state tests.",
      "live": "Pause the old task, resolve the caller’s correction or boundary, and make the next permitted step clear."
    },
    "8.9": {
      "risks": [
        "experience",
        "trust",
        "data",
        "operational",
        "financial",
        "consent"
      ],
      "primary": "live",
      "after": "Review the final requested task, pending actions, and escalation result; reconcile unwanted changes and strengthen conversation-state tests.",
      "live": "Pause the old task, resolve the caller’s correction or boundary, and make the next permitted step clear."
    },
    "8.10": {
      "risks": [
        "experience",
        "trust",
        "operational",
        "consent"
      ],
      "primary": "live",
      "after": "Review the final requested task, pending actions, and escalation result; reconcile unwanted changes and strengthen conversation-state tests.",
      "live": "Pause the old task, resolve the caller’s correction or boundary, and make the next permitted step clear."
    },
    "9.1": {
      "risks": [
        "experience",
        "trust",
        "operational"
      ],
      "primary": "live",
      "after": "Review the service friction and recovery path, then update wording or escalation design and test the same scenario again.",
      "live": "Acknowledge the concern, offer a practical next step, and provide the appropriate human or alternate support route."
    },
    "9.2": {
      "risks": [
        "experience",
        "trust",
        "operational"
      ],
      "primary": "live",
      "after": "Review the service friction and recovery path, then update wording or escalation design and test the same scenario again.",
      "live": "Acknowledge the concern, offer a practical next step, and provide the appropriate human or alternate support route."
    },
    "9.3": {
      "risks": [
        "experience",
        "trust",
        "data"
      ],
      "primary": "live",
      "after": "Review the service friction and recovery path, then update wording or escalation design and test the same scenario again.",
      "live": "Acknowledge the concern, offer a practical next step, and provide the appropriate human or alternate support route."
    },
    "9.4": {
      "risks": [
        "experience",
        "trust",
        "operational",
        "privacy",
        "consent",
        "accessibility"
      ],
      "primary": "live",
      "after": "Review the service friction and recovery path, then update wording or escalation design and test the same scenario again.",
      "live": "Acknowledge the concern, offer a practical next step, and provide the appropriate human or alternate support route."
    },
    "9.5": {
      "risks": [
        "experience",
        "trust",
        "operational",
        "privacy"
      ],
      "primary": "live",
      "after": "Review the service friction and recovery path, then update wording or escalation design and test the same scenario again.",
      "live": "Acknowledge the concern, offer a practical next step, and provide the appropriate human or alternate support route."
    },
    "9.6": {
      "risks": [
        "experience",
        "trust",
        "data",
        "consent"
      ],
      "primary": "live",
      "after": "Review the service friction and recovery path, then update wording or escalation design and test the same scenario again.",
      "live": "Acknowledge the concern, offer a practical next step, and provide the appropriate human or alternate support route."
    },
    "9.7": {
      "risks": [
        "experience",
        "data"
      ],
      "primary": "live",
      "after": "Review the service friction and recovery path, then update wording or escalation design and test the same scenario again.",
      "live": "Acknowledge the concern, offer a practical next step, and provide the appropriate human or alternate support route."
    },
    "9.8": {
      "risks": [
        "experience",
        "trust",
        "data",
        "operational",
        "accessibility"
      ],
      "primary": "live",
      "after": "Review the service friction and recovery path, then update wording or escalation design and test the same scenario again.",
      "live": "Acknowledge the concern, offer a practical next step, and provide the appropriate human or alternate support route."
    },
    "10.1": {
      "risks": [
        "experience",
        "trust",
        "data",
        "operational",
        "accessibility"
      ],
      "primary": "after",
      "after": "Evaluate the recognition or timing failure with representative test speakers and improve the accessible fallback before redeployment.",
      "live": "Allow enough time, clarify only what is necessary, and offer an accessible alternative rather than repeating failed recognition."
    },
    "10.2": {
      "risks": [
        "experience",
        "trust",
        "data",
        "operational",
        "accessibility"
      ],
      "primary": "live",
      "after": "Evaluate the recognition or timing failure with representative test speakers and improve the accessible fallback before redeployment.",
      "live": "Allow enough time, clarify only what is necessary, and offer an accessible alternative rather than repeating failed recognition."
    },
    "10.3": {
      "risks": [
        "experience",
        "data",
        "accessibility"
      ],
      "primary": "live",
      "after": "Evaluate the recognition or timing failure with representative test speakers and improve the accessible fallback before redeployment.",
      "live": "Allow enough time, clarify only what is necessary, and offer an accessible alternative rather than repeating failed recognition."
    },
    "10.4": {
      "risks": [
        "experience",
        "trust",
        "data",
        "accessibility"
      ],
      "primary": "live",
      "after": "Evaluate the recognition or timing failure with representative test speakers and improve the accessible fallback before redeployment.",
      "live": "Allow enough time, clarify only what is necessary, and offer an accessible alternative rather than repeating failed recognition."
    },
    "10.5": {
      "risks": [
        "experience",
        "trust",
        "data",
        "accessibility"
      ],
      "primary": "after",
      "after": "Evaluate the recognition or timing failure with representative test speakers and improve the accessible fallback before redeployment.",
      "live": "Allow enough time, clarify only what is necessary, and offer an accessible alternative rather than repeating failed recognition."
    },
    "10.6": {
      "risks": [
        "experience",
        "data",
        "accessibility"
      ],
      "primary": "live",
      "after": "Evaluate the recognition or timing failure with representative test speakers and improve the accessible fallback before redeployment.",
      "live": "Allow enough time, clarify only what is necessary, and offer an accessible alternative rather than repeating failed recognition."
    },
    "10.7": {
      "risks": [
        "experience",
        "trust",
        "data",
        "operational",
        "accessibility"
      ],
      "primary": "live",
      "after": "Evaluate the recognition or timing failure with representative test speakers and improve the accessible fallback before redeployment.",
      "live": "Allow enough time, clarify only what is necessary, and offer an accessible alternative rather than repeating failed recognition."
    },
    "10.8": {
      "risks": [
        "experience",
        "trust",
        "data",
        "operational",
        "accessibility"
      ],
      "primary": "after",
      "after": "Evaluate the recognition or timing failure with representative test speakers and improve the accessible fallback before redeployment.",
      "live": "Allow enough time, clarify only what is necessary, and offer an accessible alternative rather than repeating failed recognition."
    },
    "10.9": {
      "risks": [
        "experience",
        "trust",
        "data",
        "accessibility"
      ],
      "primary": "live",
      "after": "Evaluate the recognition or timing failure with representative test speakers and improve the accessible fallback before redeployment.",
      "live": "Allow enough time, clarify only what is necessary, and offer an accessible alternative rather than repeating failed recognition."
    },
    "10.10": {
      "risks": [
        "experience",
        "trust",
        "data",
        "privacy",
        "consent",
        "accessibility"
      ],
      "primary": "live",
      "after": "Evaluate the recognition or timing failure with representative test speakers and improve the accessible fallback before redeployment.",
      "live": "Allow enough time, clarify only what is necessary, and offer an accessible alternative rather than repeating failed recognition."
    },
    "11.1": {
      "risks": [
        "experience",
        "trust"
      ],
      "primary": "after",
      "after": "Revise the prompt, timing, or conversation design responsible for the reaction and compare the revised flow in repeatable test calls.",
      "live": "Keep the next prompt short, acknowledge the caller’s intent, and offer clarification or human help when the interaction fails."
    },
    "11.2": {
      "risks": [
        "experience",
        "trust",
        "data",
        "operational"
      ],
      "primary": "after",
      "after": "Revise the prompt, timing, or conversation design responsible for the reaction and compare the revised flow in repeatable test calls.",
      "live": "Keep the next prompt short, acknowledge the caller’s intent, and offer clarification or human help when the interaction fails."
    },
    "11.3": {
      "risks": [
        "experience",
        "trust",
        "data"
      ],
      "primary": "after",
      "after": "Revise the prompt, timing, or conversation design responsible for the reaction and compare the revised flow in repeatable test calls.",
      "live": "Keep the next prompt short, acknowledge the caller’s intent, and offer clarification or human help when the interaction fails."
    },
    "11.4": {
      "risks": [
        "experience",
        "trust",
        "data",
        "operational"
      ],
      "primary": "live",
      "after": "Revise the prompt, timing, or conversation design responsible for the reaction and compare the revised flow in repeatable test calls.",
      "live": "Keep the next prompt short, acknowledge the caller’s intent, and offer clarification or human help when the interaction fails."
    },
    "11.5": {
      "risks": [
        "experience",
        "trust",
        "data"
      ],
      "primary": "live",
      "after": "Revise the prompt, timing, or conversation design responsible for the reaction and compare the revised flow in repeatable test calls.",
      "live": "Keep the next prompt short, acknowledge the caller’s intent, and offer clarification or human help when the interaction fails."
    },
    "11.6": {
      "risks": [
        "experience",
        "trust",
        "data",
        "operational",
        "financial"
      ],
      "primary": "live",
      "after": "Revise the prompt, timing, or conversation design responsible for the reaction and compare the revised flow in repeatable test calls.",
      "live": "Keep the next prompt short, acknowledge the caller’s intent, and offer clarification or human help when the interaction fails."
    },
    "11.7": {
      "risks": [
        "experience",
        "trust"
      ],
      "primary": "after",
      "after": "Revise the prompt, timing, or conversation design responsible for the reaction and compare the revised flow in repeatable test calls.",
      "live": "Keep the next prompt short, acknowledge the caller’s intent, and offer clarification or human help when the interaction fails."
    },
    "11.8": {
      "risks": [
        "experience",
        "trust",
        "data",
        "operational"
      ],
      "primary": "after",
      "after": "Revise the prompt, timing, or conversation design responsible for the reaction and compare the revised flow in repeatable test calls.",
      "live": "Keep the next prompt short, acknowledge the caller’s intent, and offer clarification or human help when the interaction fails."
    },
    "12.1": {
      "risks": [
        "experience",
        "trust",
        "operational",
        "consent"
      ],
      "primary": "live",
      "after": "Use the approved incident or quality-review process to investigate missed boundaries and correct workflow controls before repeating the affected flow.",
      "live": "Respect the stated restriction, stop any disallowed pending action, and follow the approved alternate or human route."
    },
    "12.2": {
      "risks": [
        "experience",
        "trust",
        "data",
        "operational",
        "financial",
        "privacy",
        "consent"
      ],
      "primary": "live",
      "after": "Use the approved incident or quality-review process to investigate missed boundaries and correct workflow controls before repeating the affected flow.",
      "live": "Respect the stated restriction, stop any disallowed pending action, and follow the approved alternate or human route."
    },
    "12.3": {
      "risks": [
        "experience",
        "trust",
        "operational",
        "privacy",
        "consent"
      ],
      "primary": "live",
      "after": "Use the approved incident or quality-review process to investigate missed boundaries and correct workflow controls before repeating the affected flow.",
      "live": "Respect the stated restriction, stop any disallowed pending action, and follow the approved alternate or human route."
    },
    "12.4": {
      "risks": [
        "experience",
        "trust",
        "data",
        "operational",
        "privacy",
        "consent"
      ],
      "primary": "live",
      "after": "Use the approved incident or quality-review process to investigate missed boundaries and correct workflow controls before repeating the affected flow.",
      "live": "Respect the stated restriction, stop any disallowed pending action, and follow the approved alternate or human route."
    },
    "12.5": {
      "risks": [
        "experience",
        "trust",
        "data",
        "operational",
        "privacy"
      ],
      "primary": "live",
      "after": "Use the approved incident or quality-review process to investigate missed boundaries and correct workflow controls before repeating the affected flow.",
      "live": "Respect the stated restriction, stop any disallowed pending action, and follow the approved alternate or human route."
    },
    "12.6": {
      "risks": [
        "experience",
        "trust",
        "operational",
        "privacy",
        "consent"
      ],
      "primary": "live",
      "after": "Use the approved incident or quality-review process to investigate missed boundaries and correct workflow controls before repeating the affected flow.",
      "live": "Respect the stated restriction, stop any disallowed pending action, and follow the approved alternate or human route."
    }
  }
};