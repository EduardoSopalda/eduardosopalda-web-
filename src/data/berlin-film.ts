// The narrated film's sections and what is said in each, taken from the
// colleague preview Eduardo approved (eduardosopalda.com/automa-2026-film/).
// Only rendered by the Berlin page in an OPEN build -- see
// src/pages/out-loud/automa-chem-2026.astro. Nothing here reaches the
// closed HTML.

// The film lives on the server only (uploaded by hand via FileZilla, never
// in git or dist). Keep the file at this path.
// FILM_LENGTH is a placeholder -- update to the real runtime once known;
// it also appears as a hardcoded "7 minutes 47" aria-label on the <video>
// in automa-chem-2026.astro, which needs the same fix.
export const FILM_SRC = '/automa-2026-film/EduardoSopalda_automachem2026.mp4';
export const FILM_POSTER = '/out-loud/berlin/poster.jpg';
export const FILM_LENGTH = '10:00';

export interface Section {
  at: number; // seconds
  time: string; // m:ss as shown
  label: string; // 'Opening' or 'Act 01'
  title: string;
  thumb: string;
  quiet?: boolean; // no narration, described instead
  paras: string[];
}

export const SECTIONS: Section[] = [
  {
    at: 0.0,
    time: "0:00",
    label: "Opening",
    title: "Title and drawing",
    thumb: "/out-loud/berlin/t000.jpg",
    quiet: true,
    paras: [
      "No narration. The title, then the drawing begins: the plan of Brasília, and the two spheres.",
    ],
  },
  {
    at: 52.2,
    time: "0:52",
    label: "Act 01",
    title: "The Architect",
    thumb: "/out-loud/berlin/t060.jpg",
    paras: [
      "I am an architect. Not as a metaphor. I studied architecture. I drew buildings. And then I spent the last twenty years designing something less visible. Data and AI governance.",
      "I work inside a chemical company, as many of you do. And I've got plenty of these things wrong myself. But I keep seeing the same problem. We design from above. Not always for the person who has to live with the result. I first shared these reflections at AUTOMA Chem 2026.",
    ],
  },
  {
    at: 110.8,
    time: "1:50",
    label: "Act 02",
    title: "Brasília",
    thumb: "/out-loud/berlin/t150.jpg",
    paras: [
      "So let's go on a little journey.",
      "Let me take you to Brasília. From the air it is extraordinary. Monumental, precise, unforgettable. But at street level it can feel very different. The scale is vast, the distances are large. A city can make perfect sense from a helicopter and feel completely different when you walk through it. We build governance in a similar way. We have policies, controls, committees, operating models and occasionally a beautiful RACI that makes everyone feel civilization has finally arrived. For about ten minutes. Then someone asks who is actually accountable. Then the framework reaches the plant. I have been the person with the beautiful drawing. I have presented the framework, watched people nod and then watched them carry on exactly as before. They were not being difficult. I had built them a plaza nobody wanted to stand in.",
    ],
  },
  {
    at: 179.9,
    time: "2:59",
    label: "Act 03",
    title: "When ambition becomes evidence",
    thumb: "/out-loud/berlin/t215.jpg",
    paras: [
      "That matters when we talk about sustainable digital transformation.",
      "We set ambitions, targets and roadmaps. We invest in systems, automation and AI.",
      "But eventually ambition has to become evidence.",
      "A carbon number looks like chemistry. It is a data product.",
      "Behind one apparently simple number, sits supplier declarations, energy data, production records, transport data, allocation rules and assumptions.",
      "Much of it comes from systems that were never designed to agree with one another.",
      "So the challenge is not simply calculating the number. The challenge is being able to explain it. Where did it come from? Who owns it? What definition sits behind it? And who is prepared to stand behind it when someone asks a difficult question?",
      "You cannot report what you cannot trace.",
    ],
  },
  {
    at: 253.4,
    time: "4:13",
    label: "Act 04",
    title: "AI scales what is there",
    thumb: "/out-loud/berlin/t290.jpg",
    paras: [
      "Then, inevitably, someone says, why do we not just use AI?",
      "I am optimistic about AI. But AI does not remove ambiguity. It can scale it.",
      "If five people use the word batch to mean five different things, putting an AI agent on top does not make the organization clearer. It just gives the confusion a faster processor.",
      "Sometimes AI is the answer. Sometimes the answer is better data. Sometimes it is a better process.",
      "And occasionally, it is simply agreeing on what a word means before we ask a machine to interpret it.",
    ],
  },
  {
    at: 308.4,
    time: "5:08",
    label: "Act 05",
    title: "AI digital twins and smarter decisions",
    thumb: "/out-loud/berlin/t395.jpg",
    paras: [
      "And yes, AI can be sustainable.",
      "Take an AI digital twin.",
      "It learns from the data of a real process. How equipment behaves. How materials respond.",
      "Where energy is used. And where defects or waste occur. Then it can help answer complex operational questions much faster.",
      "What if we change the temperature? The timing? Or the material mix?",
      "Which settings could maintain quality while using less energy or producing less scrap?",
      "Instead of relying on repeated physical trials, teams can use the AI digital twin to explore and compare possible outcomes before acting on the real process. That can mean fewer wasted materials, less rework, and faster decisions about how to improve production.",
      "This is one way AI can make sustainability practical. Helping people find better ways to run the systems they already have. The systems they already know. With less waste built in.",
    ],
  },
  {
    at: 407.6,
    time: "6:47",
    label: "Act 06",
    title: "Close",
    thumb: "/out-loud/berlin/t460.jpg",
    paras: [
      "So here is a question to take back to your organization.",
      "What is that one word that means something different depending on which floor you are standing on within your company? Ask the people you work with. The answer may tell you more about your governance than another hundred pages of framework. Agents do not own risk. They do not carry accountability. Humans do. Always.",
    ],
  },
];
