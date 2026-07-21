# Presenter notes - Practitioner session 4: GPAI / foundation models

**Session goal (one line).** Practitioners can name the baseline GPAI obligations (Article 53), the systemic-risk tier (Articles 51/55), and which hat they wear when they use, fine-tune, or ship a general-purpose model.

## Run of show (45 min)
- **0-3 - Welcome.** Why GPAI gets its own rulebook: general-purpose models sit upstream of many uses, so the Act regulates the model itself.
- **3-22 - Baseline duties (Part 1).** The Article 53 baseline: technical documentation (Annex XI), downstream-provider documentation (Annex XII), a copyright policy, and a public sufficiently-detailed summary of training content.
- **22-40 - Systemic-risk tier (Part 2 + build-along).** The presumption of systemic risk above 10^25 FLOP (Art 51) and the added Article 55 duties; then the build-along "Which hat are you wearing?" - deployer, GPAI provider, or out of scope.
- **40-45 - Q&A.** Bridge to NIST method in b5.

## Preflight
- Open b4, "Expand all", confirm the baseline-vs-systemic SVG renders.
- Have a concrete example of each hat ready: calling an API as-is, fine-tuning materially, shipping your own model.
- Be precise that the training-content summary is the public one; the Annex XI/XII docs are not.

## Never-cut beats
- **The public duty is the training-content summary.** Published following the AI Office template. Annex XI docs go to authorities on request, Annex XII to downstream providers - neither is public.
- **Systemic risk is a compute presumption.** Above 10^25 FLOP of cumulative training compute (or Commission designation), not user counts or open/closed source.
- **Which hat you wear decides your duties.** Calling a model as-is makes you a deployer; you only inherit provider duties by materially fine-tuning or rebranding.

## Cuts if running long
- Keep the four baseline duties as a list and spend the time on the hat exercise.
- Skip the detailed Article 55 systemic duties; land only the 10^25 FLOP trigger.

## Quiz answers
1. **C** - The sufficiently detailed summary of training content is public; Annex XI and Annex XII docs are not.
2. **B** - Presumed systemic risk when cumulative training compute exceeds 10^25 FLOP, or the Commission designates the model (Art 51).
3. **A** - Calling a commercial LLM as-is via API makes you a downstream deployer; the vendor is the GPAI provider.

## Common questions + crisp answers
- "We call OpenAI/Anthropic via API - are we a GPAI provider?" No - you are a deployer; the vendor carries the GPAI provider duties.
- "When would we become the provider?" If you materially fine-tune the model or put it out under your own name.
- "Is a big user base what triggers systemic risk?" No - it is training compute (10^25 FLOP) or Commission designation.

## Teaching tips
- The hat question is the whole session. Most teams are deployers and are relieved to learn it; make sure they leave knowing which hat they wear.
- Separate "public" from "on request" deliberately - the training-content summary being public is the detail people get wrong.
- Keep systemic risk as a compute story, not a size story. "10^25 FLOP or the Commission says so" - not users, not open vs closed.
- Use a concrete stack the room knows (an API call vs a fine-tune vs a self-hosted model) to make the hats tangible.
- Flag that fine-tuning materially or rebranding can flip a deployer into a provider - that is the trap for teams doing more than a plain API call.

## Bridge to next session
b5 shifts from the law to method - the NIST AI RMF - the common language for reasoning about the risks these models carry.

## Compliance caution
Educational, not legal advice; GPAI rules and thresholds are new and under live amendment - verify against Articles 51, 53, and 55 and the AI Office templates, and get advice.
