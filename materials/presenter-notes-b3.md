# Presenter notes - Practitioner session 3: Transparency obligations

**Session goal (one line).** Practitioners can apply the four Article 50 transparency duties and audit a chatbot or GenAI feature against them, including the machine-readable marking of generated content.

## Run of show (45 min)
- **0-3 - Welcome.** The duty that is easy to owe and easy to miss: transparency attaches to systems most teams do not think of as regulated.
- **3-18 - Concepts (Part 1 + Part 2).**
  - Part 1 (approx 8 min): the four Article 50 duties - disclose AI interaction (50.1), mark generated content machine-readably (50.2), disclose emotion/biometric categorisation, label deepfakes.
  - Part 2 (approx 7 min): doing it in practice - timing, form, and how it stacks on top of other tiers.
- **18-40 - Build-along "Audit a chatbot / GenAI feature against Art 50" (approx 22 min).** Learners run a real feature past each of the four duties and note gaps.
- **40-45 - Q&A.** Bridge to GPAI in b4.

## Preflight
- Open b3, "Expand all", confirm the four-duties SVG renders.
- Pick a real chatbot or GenAI feature (or Vantage's candidate chatbot) for the audit so it is concrete.
- Be clear on the "at the latest at first interaction" timing before presenting.

## Never-cut beats
- **Transparency stacks, it does not replace.** A high-risk system can also owe Article 50 - the chatbot must disclose it is AI on top of the full high-risk programme.
- **Machine-readable marking.** Article 50.2 requires generated audio, image, video, and text to be marked as artificially generated in a machine-readable format - effective, interoperable, robust, and reliable as far as feasible. Not just a visible caption.
- **Timing is first contact.** Disclosures come clearly and distinguishably, at the latest at the first interaction or exposure.

## Cuts if running long
- Audit against duties 50.1 and 50.2 only; mention emotion/deepfake labelling briefly.
- Have learners note gaps rather than draft the full disclosure wording in the room.

## Quiz answers
1. **B** - A machine-readable format - effective, interoperable, robust, and reliable as far as feasible (Art 50.2).
2. **C** - Clearly and distinguishably, at the latest at the first interaction or exposure (Art 50.5).
3. **A** - Article 50 applies too: the chatbot must disclose it is AI, on top of the high-risk programme.

## Common questions + crisp answers
- "A visible 'AI-generated' caption - is that enough?" Not for 50.2; you need machine-readable marking, not only a caption.
- "Our system is high-risk - are we exempt from Article 50?" No - transparency is a distinct duty that stacks on top.
- "When do we have to tell the user?" At the latest at the first interaction or exposure, clearly and distinguishably.

## Teaching tips
- Pick a feature the room actually ships and audit it live. Abstract Article 50 is forgettable; "our chatbot fails duty two" is not.
- The machine-readable point trips up designers who think a visible label is enough. Show the difference between a caption and a watermark/provenance signal.
- Emphasise stacking early - practitioners assume high-risk work exempts them from transparency, and it does not.
- Keep the four duties on screen throughout the audit so learners check each one deliberately rather than eyeballing.
- End with the timing rule: first interaction or exposure. It is the easiest duty to satisfy and the easiest to forget to build in.

## Bridge to next session
b4 moves upstream to the models themselves - GPAI and foundation models - and the separate rulebook they carry.

## Compliance caution
Educational, not legal advice; Article 50 obligations and their timeline are under live amendment (the proposed Digital Omnibus) - verify against the Regulation and get advice on your specific features.
