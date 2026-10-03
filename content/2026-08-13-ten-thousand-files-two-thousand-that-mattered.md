---
title:    Ten Thousand Files, Two Thousand That Mattered
date:     2026-08-13
kind:     article
threads:  [MEMORY, MEANING]
dek:      An agent goes live. Adoption is immediate, which is what everyone wanted. Within weeks the team has uploaded ten thousand documents into it.
image:    /illustrations/tenthousand.jpg
family:   void
people:   []
question:
---

Roughly two thousand of them are relevant.

The rest are duplicates, superseded drafts, exports of exports, and the same slide deck under four filenames. All of it gets chunked. All of it gets embedded. All of it gets paid for. And every query now competes against eight thousand pieces of noise for space in the context window.

This is the failure mode nobody puts in the business case. Not the pilot that flops, but the pilot that works, and then drowns.

I spent eight years working with unstructured data with certain social media platform that shall not be named, there unstructured data was a problem that arrived early and loudly. What follows is what I learned about why the basement of your organization suddenly became the most valuable room in the building, and what it takes to make it usable.

The dilemma: from dark data to strategic asset

For decades the Chief Data Office found comfort in the rigid safety of structured databases. Rows, columns, primary keys. Everything tidy, predictable, and SQL friendly.

The commonly cited figure is that around 80 percent of enterprise data is unstructured. It comes from Gartner and IDC estimates that have been circulating since roughly 2017, and it has been repeated so often that it has stopped meaning much. Treat it as a direction, not a measurement.

The number that actually changed my thinking was the one above: eight thousand of ten thousand. That is a ratio you can measure in your own environment this quarter, and it will tell you more than any analyst slide.

What has genuinely shifted is the incentive. To ignore unstructured data now is to ignore the primary repository of corporate intelligence. It is like guarding the vault while the library burns down. The content that sat unused for years, because nobody could query a PDF, is the exact fuel that generative systems need.

The basement door opened. What was inside turned out to be the point.

Semantic search stopped being a luxury

Large Language Models turned unstructured content into contextual fuel. Unlocking it requires moving past legacy retrieval.

Think of it as two librarians:

Keyword search is the librarian who only understands exact titles. Ask for "policy" and they will miss guidelines, standards, and the thing your director wrote at 2 a.m. before a flight.

Semantic search is the librarian who has actually read the collection. It understands that policy and requirement are contextually adjacent. That is the precision enterprise queries require.

The technical shift mirrors a cultural one. The European Commission data strategy pushes organizations from a Need to Know posture toward Need to Share, or share by default. The architecture has to support that. Refined unstructured assets should be discoverable, not merely retained.

What breaks without governance

Autonomous agents are only as reliable as the data grounding them. Three failure modes recur:

Accuracy. Outdated or low quality source material produces confident wrong answers. It is a GPS working from a map printed in 2003.

Safety. In a manual world, loose permissions were protected by obscurity. Nobody was going to read that folder. An agent will read everything. Without automated confidentiality labels, a well behaved system can surface salary bands or merger documents to exactly the wrong persona, and it will do so helpfully.

Relevance. Missing metadata creates retrieval gaps. The critical context exists and stays invisible.

Underneath all three sits knowledge decay. Data is perishable. An agent citing an HR policy superseded six months ago is not malfunctioning, it is doing precisely what you asked. An assessment layer that scores freshness and integrity before content enters the reasoning loop is not a refinement. It is the difference between a system people trust and one they quietly stop using.

The pipeline, and one argument worth having

The Retrieval Augmented Generation pattern in practice:

1. Capture from source systems directly.

2. Tag author, date, confidentiality, automatically.

3. Standardize into clean Markdown.

4. Chunk into semantically coherent blocks.

5. Embed into vectors.

6. Index for similarity retrieval.

The step I would argue hardest for is ensemble retrieval. Enterprise questions rarely live in one repository. The answer sits partly in a document library, partly in an object store, partly in a CRM record. A retriever that reaches across all three and assembles one coherent context is the difference between a demo and a tool.

The economics moved

Infrastructure cost used to be a storage conversation. Capacity, hardware refresh, tiering. It is now a token conversation. Query efficiency and compute.

Which brings us back to the ten thousand files. Two levers matter more than the rest:

Filter before you embed. Block duplicates and stale content at the door, not after they have been through the expensive part of the pipeline.

Cache close to inference. For sites with poor connectivity, pulling the working corpus closer to where the question gets asked is often the cheapest performance win available.

The roles this created

The Context Engineer owns content quality. Metadata enrichment, freshness, the unglamorous work of making a document into a knowledge asset rather than a file.

The Value Engineer owns the bridge to the business, translating model output into outcomes somebody actually asked for.

Both point toward the same destination: a unified catalog. Structured and unstructured data cannot keep living in separate governance regimes. A term like "active contract" needs the same definition and the same security posture whether it sits in a SQL row or a scanned PDF.

That is the whole job, really. Not building smarter agents. Making sure that when they reach into the library, what they find is worth reading.

---

Curious how others are handling the irrelevance ratio. If you have measured yours, I would like to hear the number.
