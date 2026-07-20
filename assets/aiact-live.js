/* aiact-live.js - the in-browser EU AI Act risk-tier classifier for learn-ai-governance-with-phoebe.
 *
 * Pick an AI system by what it does; the classifier returns its EU AI Act tier
 * (prohibited / high-risk / limited-risk / minimal / GPAI), the obligations that attach, and the
 * legal basis (article / annex). It encodes the verified Article 5 / Article 6 + Annex III /
 * Article 50 / Chapter V decision logic - a teaching model, not a legal determination.
 *
 * EDUCATIONAL, NOT LEGAL ADVICE. Real classification depends on specific facts; read the
 * Regulation (EU) 2024/1689 and get proper advice.
 *
 * Usage:  <div class="aiactbox" data-caption="..."></div>
 * No dependencies.
 */
(function () {
  "use strict";
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }

  /* scenario -> classification. tier drives the colour class (ai-prohibited/high/limited/minimal/gpai). */
  var SCENARIOS = [
    { label: "Screen, rank, or shortlist job applicants (recruitment)", tier: "high", name: "High-risk",
      rule: "Annex III(4)", obl: ["Full high-risk programme: risk management (Art 9), data governance + bias checks (Art 10), technical documentation (Art 11), logging (Art 12), human oversight (Art 14), accuracy/robustness/security (Art 15)", "Conformity assessment + CE marking + EU database registration before market (Art 43, 48, 49)", "Deployer: human oversight, monitoring, keep logs 6 months, inform workers (Art 26)"] },
    { label: "Score creditworthiness / decide loan eligibility", tier: "high", name: "High-risk",
      rule: "Annex III(5)", obl: ["Full high-risk provider obligations (Art 9-15) + conformity + CE + registration", "Deployer of credit scoring must run a Fundamental Rights Impact Assessment (Art 27)"] },
    { label: "Grade students or decide school/university admission", tier: "high", name: "High-risk",
      rule: "Annex III(3)", obl: ["Full high-risk obligations (Art 9-15), conformity assessment, CE marking, EU registration"] },
    { label: "Biometric identification of people", tier: "high", name: "High-risk",
      rule: "Annex III(1)", obl: ["Full high-risk obligations; biometrics often need THIRD-PARTY (notified body) conformity assessment, not self-assessment (Art 43)"] },
    { label: "Social scoring of citizens by their behaviour", tier: "prohibited", name: "Prohibited",
      rule: "Art 5(1)(c)", obl: ["Banned outright - cannot be placed on the market, put into service, or used", "Breach penalty: up to EUR 35M or 7% of global turnover (Art 99)"] },
    { label: "Emotion recognition of employees in the workplace", tier: "prohibited", name: "Prohibited",
      rule: "Art 5(1)(f)", obl: ["Banned (workplace + education), except medical or safety reasons", "Breach penalty: up to EUR 35M or 7% of global turnover"] },
    { label: "Build a face database by scraping the internet/CCTV", tier: "prohibited", name: "Prohibited",
      rule: "Art 5(1)(e)", obl: ["Banned: untargeted scraping of facial images to create/expand recognition databases"] },
    { label: "Customer-facing chatbot / virtual assistant", tier: "limited", name: "Limited-risk (transparency)",
      rule: "Art 50(1)", obl: ["Tell people they are interacting with an AI system (unless obvious)", "No high-risk programme - disclosure only"] },
    { label: "Generate synthetic images, audio, or video (incl. deepfakes)", tier: "limited", name: "Limited-risk (transparency)",
      rule: "Art 50(2) + 50(4)", obl: ["Mark outputs as artificially generated in a machine-readable way (provider)", "Deployer must disclose deepfake content is AI-generated/manipulated"] },
    { label: "Spam filter, inventory optimisation, or game AI", tier: "minimal", name: "Minimal risk",
      rule: "default", obl: ["No mandatory obligations", "Voluntary codes of conduct encouraged (Art 95)"] },
    { label: "A general-purpose foundation model (e.g. an LLM you train)", tier: "gpai", name: "GPAI model",
      rule: "Art 53", obl: ["Technical documentation (Annex XI) + downstream docs (Annex XII)", "A copyright policy + a public summary of training content", "If trained with > 10^25 FLOP -> presumed SYSTEMIC RISK: adversarial testing, risk mitigation, incident reporting, cybersecurity (Art 55)"] },
    { label: "AI that only does a narrow prep step behind a human decision", tier: "minimal", name: "Likely not high-risk",
      rule: "Art 6(3)", obl: ["The Art 6(3) filter can downgrade an Annex III system that only does a narrow procedural/preparatory task and does NOT profile people", "BUT any system that profiles natural persons is ALWAYS high-risk - no downgrade"] }
  ];

  function wire(box) {
    var caption = box.getAttribute("data-caption") || "";
    box.innerHTML = "";
    var bar = document.createElement("div"); bar.className = "ai-bar";
    bar.innerHTML = '<span class="ai-dot"></span><span class="ai-title">EU AI Act risk-tier classifier</span>' +
      '<span class="ai-tag">Reg (EU) 2024/1689</span>';
    box.appendChild(bar);

    var grid = document.createElement("div"); grid.className = "ai-grid";
    var wrap = document.createElement("label"); wrap.className = "ai-field";
    wrap.innerHTML = '<span class="ai-flabel">What does the AI system do? (output used in the EU)</span>';
    var sel = document.createElement("select"); sel.className = "ai-select";
    SCENARIOS.forEach(function (s, i) { var o = document.createElement("option"); o.value = i; o.textContent = s.label; sel.appendChild(o); });
    sel.addEventListener("change", function () { render(parseInt(sel.value, 10)); });
    wrap.appendChild(sel); grid.appendChild(wrap);
    box.appendChild(grid);

    var out = document.createElement("div"); out.className = "ai-out"; box.appendChild(out);
    var note = document.createElement("div"); note.className = "ai-note";
    note.textContent = "Educational model of the risk-tier logic - not legal advice. Read Regulation (EU) 2024/1689 and get advice for real cases.";
    box.appendChild(note);
    if (caption) { var c = document.createElement("div"); c.className = "ai-cap"; c.textContent = caption; box.appendChild(c); }

    function render(i) {
      var s = SCENARIOS[i];
      out.innerHTML = '<div class="ai-verdict ai-' + s.tier + '">' +
        '<span class="ai-badge">' + esc(s.name) + '</span>' +
        '<div><b>Basis:</b> <span class="ai-rule">' + esc(s.rule) + '</span>' +
        '<ul>' + s.obl.map(function (o) { return "<li>" + esc(o) + "</li>"; }).join("") + "</ul></div></div>";
    }
    render(0);
  }

  function init() { Array.prototype.slice.call(document.querySelectorAll(".aiactbox")).forEach(wire); }
  if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded", init); } else { init(); }
})();
