# MPP-I: Machine Payments Protocol for Inference

MPP-I is a proposed MPP-compatible, inference-native payment profile for metered inference.

MPP and related Payment HTTP work make it possible for agents and applications to pay for API requests, tool calls, and content through an HTTP payment flow. MPP-I applies that model to inference, where the final metered amount due is not known when the request is admitted and where payment state must remain ahead of admitted execution.

## Current Status

- Status: protocol paper and early public specification repository.
- Current paper: `Paper v1.0`.
- Publication date: 2026-06-28.
- Publisher: Alethieum.
- Author: Jamie.
- Contact: jamie@alethieum.com.

The repository starts with the approved MPP-I paper. Future work will add draft protocol specifications, schemas, examples, and libraries.

## Read The Paper

- PDF: [`paper/mpp-i-paper-v1.0.pdf`](paper/mpp-i-paper-v1.0.pdf)
- LaTeX source: [`paper/mpp-i-paper-v1.0.tex`](paper/mpp-i-paper-v1.0.tex)

## Repository Structure

- `paper/`: approved publication artifacts.
- `spec/`: future normative and draft protocol specifications.
- `site/`: public readable website built with Astro Starlight and deployed to GitHub Pages.
- `examples/`: future examples.
- `packages/`: future libraries and SDK packages.

## Feedback

Use Issues for actionable corrections and Discussions for open-ended protocol feedback.

- Errata, missing citations, broken links, and concrete text changes should be opened as Issues.
- Protocol design questions, integration questions, and ecosystem proposals should be opened as Discussions.
- Pull requests are welcome for scoped changes that follow `CONTRIBUTING.md`.

## Citation

Use the repository citation metadata in `CITATION.cff`. A DOI may be added later through Zenodo after the public repository and release process are stable.

## License

Paper, specification, and documentation text are licensed under CC-BY-4.0. Future executable code, examples, and libraries are intended to be licensed under Apache-2.0 unless a file states otherwise.

