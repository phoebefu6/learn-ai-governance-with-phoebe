# learn-ai-governance-with-phoebe - official course map

**What this is:** the coverage contract. Maps each session to its sources, marks coverage (✓/◐/-),
lists the verified facts pages may state. Built 2026-07-21.

**Hard honesty banner (every page):** *Educational, not legal advice. The EU AI Act (Regulation
(EU) 2024/1689) is new and its high-risk timeline is under live amendment; NIST AI RMF and ISO/IEC
42001 are voluntary frameworks. Verify against the primary texts and get proper advice before acting.*

**Course shape:** two tracks, 14 sessions, gov bucket, tier 3. Graphite + emerald, editorial-bold.
- **Leader track** (a1-a6): why AI governance + the Act's global reach, the risk tiers, roles + timeline, penalties, the frameworks (NIST/ISO/SG), building a program.
- **Practitioner track** (b1-b8): classify a system, high-risk obligations, transparency, GPAI, NIST AI RMF, ISO 42001, risk assessment + conformity, the operating model.

**Angle:** the EU AI Act as the binding spine; NIST AI RMF + ISO/IEC 42001 as the operating
frameworks; Singapore's Model AI Governance Framework as the local contrast. When does the EU AI
Act reach a Singapore company (Art 2: output used in the Union). **Running case:** Vantage, a
Singapore company deploying an AI hiring/credit tool into the EU (high-risk under Annex III).

**Interactive:** `aiact-live.js` - a risk-tier classifier. Pick what an AI system does -> tier
(prohibited / high-risk / limited / minimal / GPAI) + obligations + basis (article/annex).
12 scenarios, validated. Reusable for rules-based compliance courses (like dnc-live, gdpr-live).

---

## Coverage

### Leader track
| Session | Teaches | Sources | Cover |
|---|---|---|---|
| a1 · Why governance + reach | The risk, the regulators, Art 2 territorial reach (output-in-EU) | Art 2; framework overview | ✓ |
| a2 · Risk tiers | Prohibited/high/limited/minimal + GPAI, the whole structure | Art 5, 6, 50, 51-55; Annex III | ✓ |
| a3 · Roles + timeline | Provider vs deployer vs importer; the application dates | Art 3, 16, 26; timeline | ✓ |
| a4 · Penalties + enforcement | The three fine tiers; the AI Office + market surveillance | Art 99, 64, 74 | ✓ |
| a5 · The frameworks | NIST AI RMF, ISO/IEC 42001, SG Model Framework - how they fit | NIST AI 100-1, ISO 42001, IMDA MGF | ◐ (ISO/SG via secondary) |
| a6 · The program | Roadmap, roles, ties to data governance + evals | synthesis | ◐ (framing ours) |

### Practitioner track
| Session | Teaches | Sources | Cover |
|---|---|---|---|
| b1 · Classify a system | The risk-tier decision logic, the checker | Art 5/6/50/51; Annex III | ✓ |
| b2 · High-risk obligations | Risk mgmt, data governance, docs, logging, human oversight, accuracy | Art 9-15, 16-19 | ✓ |
| b3 · Transparency | Chatbot disclosure, synthetic-content marking, deepfake labelling | Art 50 | ✓ |
| b4 · GPAI | Baseline GPAI docs + copyright + training summary; systemic-risk tier | Art 51, 53, 55 | ✓ |
| b5 · NIST AI RMF | Govern / Map / Measure / Manage + 7 trustworthy-AI traits | NIST AI 100-1, 600-1 | ✓ |
| b6 · ISO/IEC 42001 | The AI management system (AIMS), Annex A controls, certification | ISO 42001 (secondary) | ◐ (control count secondary) |
| b7 · Risk assessment + conformity | Conformity assessment -> CE -> registration; FRIA; impact assessment | Art 27, 43, 47-49 | ✓ |
| b8 · Operating model | Registry, roles, evals as evidence, GDPR/PDPA harmony | synthesis | ◐ (framing ours) |

---

## Verified facts the pages may state (with articles)

**Risk tiers**
- **Prohibited (Art 5(1)(a)-(h)):** subliminal/manipulative-harm (a); exploiting vulnerability - age/disability/socio-economic (b); social scoring (c); crime-risk by profiling ALONE (d); untargeted facial scraping (e); emotion recognition in workplace/education (f, exc. medical/safety); sensitive biometric categorisation (g); real-time public remote biometric ID by law enforcement (h, narrow exceptions).
- **High-risk (Art 6 + Annex III 1-8):** biometrics (1); critical infrastructure (2); education (3); employment/recruitment (4); essential services incl. credit scoring + insurance (5); law enforcement (6); migration/asylum/border (7); justice + elections (8). Art 6(3) can downgrade a narrow procedural/preparatory system - BUT profiling of a person is ALWAYS high-risk.
- **Limited-risk (Art 50):** disclosure + labelling only - chatbots disclose AI (50.1), synthetic content machine-readably marked (50.2), deepfakes disclosed (50.4), emotion/biometric subjects informed (50.3).
- **Minimal:** default, no mandatory obligations (voluntary codes, Art 95).
- **GPAI (Ch V):** baseline (Art 53) - technical docs (Annex XI), downstream docs (Annex XII), copyright policy, public training-content summary. Systemic-risk (Art 51/55): presumed when training compute > 10^25 FLOP -> adversarial testing, risk mitigation, incident reporting, cybersecurity. Open-source relaxation on the first two docs, NOT for systemic-risk models.

**Territorial reach (Art 2)** - market-access + output-in-the-Union model:
- Applies to providers placing systems/GPAI on the EU market, irrespective of where established (2(1)(a)); deployers in the EU (2(1)(b)); and providers/deployers in a third country where the OUTPUT is used in the Union (2(1)(c)). A Singapore firm is caught if it places on the EU market OR its system's output is used in the EU (e.g. CV-screening decisions used on EU candidates). Purely SG-internal output = out of scope.

**Roles (Art 3):** provider (develops + places under own name, heaviest duties, Art 16); deployer (uses under own authority, Art 26); importer (EU-established, imports non-EU provider's system, Art 23); distributor (Art 24); authorised representative (EU point for a non-EU provider, Art 22/25). Provider of a high-risk system carries the most.

**High-risk provider obligations (Art 9-19):** risk management system (9); data + data governance incl. bias mitigation (10); technical documentation, Annex IV (11); logging (12); transparency + instructions for use (13); human oversight (14); accuracy/robustness/cybersecurity (15); quality management system (17); keep docs (18) + logs (19). Then conformity assessment (43), EU declaration of conformity (47), CE marking (48), EU database registration (49).

**Deployer obligations for high-risk (Art 26):** use per instructions; assign trained human oversight; control input data; monitor + suspend on risk + inform provider; keep logs at least 6 months; inform workers before workplace deployment; report serious incidents (Art 73); check EU-database registration; support any GDPR DPIA. FRIA (Art 27): required of public bodies + deployers of certain Annex III systems (credit scoring, insurance), before first use.

**Conformity flow:** conformity assessment (Art 43 - self-assessment/Annex VI default for Annex III points 2-8; third-party/notified body for biometrics point 1 where standards absent) -> EU declaration of conformity (47) -> CE marking (48) -> EU database registration (49). Substantial modification re-triggers.

**Penalties (Art 99):** prohibited-practice breach up to EUR 35M or 7% of global turnover; other obligations up to EUR 15M or 3%; incorrect info to authorities up to EUR 7.5M or 1% - whichever is HIGHER (for SMEs/startups, whichever is LOWER). GPAI-provider fines under Art 101 (up to EUR 15M / 3%).

**Timeline:** in force 1 Aug 2024; prohibitions + AI-literacy 2 Feb 2025; GPAI + governance + penalties 2 Aug 2025; most of the Act incl. Annex III high-risk + Art 50 transparency 2 Aug 2026; Annex I embedded high-risk 2 Aug 2027. LIVE AMENDMENT (Digital Omnibus, late 2025-mid 2026) proposes delaying the high-risk dates (Annex III -> ~2 Dec 2027, Annex I -> 2 Aug 2028) and adding a 9th prohibition (non-consensual intimate imagery/CSAM). Teach original dates as baseline + note the delay.

**Governance bodies:** European AI Office (Art 64, oversees GPAI); national market surveillance authorities (Art 74, national enforcement + single point of contact).

**NIST AI RMF (voluntary, US; NIST AI 100-1, Jan 2023):** four functions - GOVERN (culture/accountability), MAP (context + risk framing), MEASURE (assess/benchmark/monitor), MANAGE (prioritise + act). Seven trustworthy-AI traits: valid & reliable; safe; secure & resilient; accountable & transparent; explainable & interpretable; privacy-enhanced; fair with harmful bias managed. GenAI Profile (NIST AI 600-1, 26 Jul 2024).

**ISO/IEC 42001:2023:** first CERTIFIABLE AI management-system (AIMS) standard; ISO 27001-style Plan-Do-Check-Act; implement an AI policy, roles, AI risk + impact assessment, Annex A controls (reported 38 controls / 9 objectives - verify against the standard), continual improvement; independently auditable.

**Singapore Model AI Governance Framework (IMDA/PDPC, 2019/2020) + GenAI (2024, IMDA/AI Verify):** voluntary, principles-based. GenAI framework's nine dimensions: accountability, data, trusted development/deployment, incident reporting, testing & assurance, security, content provenance, safety & alignment R&D, AI for public good.

**How they fit:** EU AI Act = binding law (what you must do); NIST AI RMF = voluntary risk method (how to think about risk); ISO 42001 = certifiable management system (how to run + prove governance); SG MGF = voluntary principles for APAC.

---

## Not covered by design (say so)

- Legal advice / a specific system's real classification - out of scope; get advice.
- The full Annex IV technical-documentation contents and the complete Annex III sub-points - summarised.
- Member-State national implementing measures and sector overlays.
- The paid ISO 42001 control text (taught at concept level from secondary sources).

## Re-verify before delivery

1. **High-risk timeline** - the Digital Omnibus amendment may move Annex III to ~2 Dec 2027 and Annex I to 2 Aug 2028. Re-check the Official Journal; show original + proposed dates.
2. **ISO 42001 "38 controls / 9 objectives"** - from secondary sources; confirm against the standard.
3. **SG GenAI framework nine dimension names** - confirm against the official IMDA/AI Verify PDF.
4. **NIST GenAI Profile risk count** (12 vs 13) - confirm against NIST.AI.600-1 if quoted.

## Sources (verified 2026-07-21)

EU AI Act Regulation (EU) 2024/1689 via artificialintelligenceact.eu + EC AI Act Service Desk + EUR-Lex: Art 2, 3, 5, 6, 9-19, 26, 27, 43, 47-50, 51, 53, 55, 64, 74, 99, 101; Annex III. NIST AI RMF (AI 100-1, AI 600-1) via nist.gov/airc.nist.gov. ISO/IEC 42001:2023 (iso.org + reputable secondary). Singapore Model AI Governance Framework + GenAI 2024 (imda.gov.sg, aiverifyfoundation.sg). Digital Omnibus amendment via Gibson Dunn + EP Legislative Train (flagged as developing).
