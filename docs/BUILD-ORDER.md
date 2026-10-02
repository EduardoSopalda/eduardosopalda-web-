# Build order

Do these in sequence. Each one is checkable before the next begins.

1. **Scaffold.** Astro, content collection for articles, fonts self hosted with the optical
   size axis, tokens.css from DESIGN-SYSTEM.md. Nothing visual yet.

2. **Reader.** `/writing/[slug]` rendering the 25 real articles: spine, beads from subheads,
   callout detection, the question block, people rail, per article lang. Must work with
   JavaScript off. This is the part with real content in it, so it is the part that can be
   judged.

3. **Archive.** `/archive`, plain, reverse chronological. Twenty minutes, and it makes the
   whole corpus reachable while the rest is being built.

4. **Field, static.** Specimens and fragments at depth, drift horizontal and vertical, the
   nerve, the seven stops. Port from the prototype.

5. **Decay.** The proximity rule and the letters falling to the nerve. Keep it isolated so it
   can be tuned without touching layout.

6. **The sort transition.** Field to room. The riskiest second in the design. Prototype it
   alone, at 60fps, before wiring it to real rooms.

7. **Rooms.** Writing first, since it has content. Then First Dates and Who, which are
   queries over the same articles. Context, Lexicon, Out Loud and Contact are empty until
   Eduardo writes them: build the shells with visible TODOs, invent nothing.

8. **Threads.** `/thread/[name]` and thread hold in the field, including the rule that a held
   thread keeps its fragments alive.

9. **People.** `/with/[person]` built from front matter, no curated list.

10. **404 and empty states.** Funny, and still part of the field. Suggested 404: *Nothing
    here. Somebody moved it, nobody announced it, and now the dashboard doesn't match.*

## Definition of done for v1

Someone can land, drift, follow a fragment into an article, read it, follow the thread to
another, and leave. Nothing asks them to buy, book or subscribe.
