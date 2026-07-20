<!-- learn-with-phoebe hub banner -->
> ### 📚 Part of [**Learn with Phoebe**](https://phoebefu6.github.io/learn-with-phoebe/)
> The shelf of free, hands-on courses on AI, data, and the craft around them. **[Browse every course ↗](https://phoebefu6.github.io/learn-with-phoebe/)**
<!-- /learn-with-phoebe hub banner -->

# learn AI governance with phoebe

A two-track, hands-on course on **AI governance - the EU AI Act, NIST AI RMF, and ISO/IEC 42001** - by Phoebe Fu.

> 🛡️ **Educational, not legal advice.** The EU AI Act is new and its high-risk timeline is under live amendment; NIST AI RMF and ISO/IEC 42001 are voluntary. Verify against the primary texts and get proper advice before acting.

AI governance became a compliance obligation the day the EU AI Act became law - and it reaches any company whose AI output is used in the EU, Singapore firms included. This course teaches both how to *lead* AI governance and how to *build* the program that proves it.

## Two tracks, 14 sessions

- **🤝 Leader track (6 x 45 min, no jargon):** why AI governance now + the Act's reach, the risk tiers, roles + timeline, penalties, the frameworks (NIST / ISO / Singapore), and building a program.
- **🛠️ Practitioner track (8 x 45 min):** classify a system, high-risk obligations, transparency, GPAI, NIST AI RMF, ISO/IEC 42001, risk assessment + conformity, and the operating model.

## The running case

The practitioner track follows **Vantage**, a fictional Singapore firm shipping an AI hiring tool into the EU - a textbook high-risk system under Annex III(4).

## Live risk-tier classifier

`assets/aiact-live.js` renders an in-browser classifier: pick what an AI system does and it returns the EU AI Act tier (prohibited / high-risk / limited / minimal / GPAI), the obligations that attach, and the article or annex behind it. It encodes the Article 5 / 6 / 50 / Chapter V logic - a teaching model, not a legal determination.

## The three-layer framing

The EU AI Act is binding law (what you must do); the NIST AI RMF is a voluntary risk method (how to think about risk); ISO/IEC 42001 is a certifiable management system (how to run and prove governance). Singapore's Model AI Governance Framework is the APAC voluntary reference. Coverage contract: [`materials/official-course-map.md`](materials/official-course-map.md).

## Run it locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

Static HTML/CSS/JS - no build step. Sits in the **Data & AI Governance** shelf, alongside the data-governance, PDPA+DNC, and GDPR courses; pairs with the RAG and evals courses when AI is in your roadmap.
