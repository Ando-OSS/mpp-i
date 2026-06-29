# MPP-I: Machine Payments Protocol for Inference

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.21017440.svg)](https://doi.org/10.5281/zenodo.21017440)
[![Release](https://img.shields.io/github/v/release/Ando-OSS/mpp-i?label=release)](https://github.com/Ando-OSS/mpp-i/releases)
[![License: CC BY 4.0](https://img.shields.io/badge/license-CC%20BY%204.0-blue.svg)](LICENSE)
[![Pages](https://github.com/Ando-OSS/mpp-i/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/Ando-OSS/mpp-i/actions/workflows/deploy-pages.yml)
[![Status](https://img.shields.io/badge/status-proposed%20protocol-blue)](https://github.com/Ando-OSS/mpp-i)
[![Paper](https://img.shields.io/badge/paper-v1.0-2b6cb0)](paper/mpp-i-paper-v1.0.pdf)
[![PDF](https://img.shields.io/badge/PDF-read%20paper-red)](https://ando-oss.github.io/mpp-i/mpp-i-paper-v1.0.pdf)
[![TeX](https://img.shields.io/badge/TeX-source-008080)](paper/mpp-i-paper-v1.0.tex)
[![Citation](https://img.shields.io/badge/citation-CFF-blueviolet)](CITATION.cff)
[![Zenodo](https://img.shields.io/badge/archived-Zenodo-1682D4)](https://zenodo.org/records/21017440)
[![Discussions](https://img.shields.io/badge/discussions-open-brightgreen)](https://github.com/Ando-OSS/mpp-i/discussions)
[![Issues](https://img.shields.io/github/issues/Ando-OSS/mpp-i)](https://github.com/Ando-OSS/mpp-i/issues)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen)](CONTRIBUTING.md)

MPP-I is a proposed MPP-compatible, inference-native payment profile for metered inference.

MPP and related Payment HTTP work make it possible for agents and applications to pay for API requests, tool calls, and content through an HTTP payment flow. MPP-I applies that model to inference, where the final metered amount due is not known when the request is admitted and where payment state must remain ahead of admitted execution.

## Current Status

- Status: protocol paper and early public specification repository.
- Current paper: `Paper v1.0`.
- Publication date: 2026-06-28.
- Publisher: Alethieum.
- Author: Jamie.
- Contact: jamie@alethieum.com.
- DOI: [10.5281/zenodo.21017440](https://doi.org/10.5281/zenodo.21017440).

The repository starts with the approved MPP-I paper. Future work will add draft protocol specifications, schemas, examples, and libraries.

## Read The Paper

- PDF: [`paper/mpp-i-paper-v1.0.pdf`](paper/mpp-i-paper-v1.0.pdf)
- LaTeX source: [`paper/mpp-i-paper-v1.0.tex`](paper/mpp-i-paper-v1.0.tex)
- GitHub Pages PDF: <https://ando-oss.github.io/mpp-i/mpp-i-paper-v1.0.pdf>

## Repository Structure

- `paper/`: approved publication artifacts.
- `spec/`: future normative and draft protocol specifications.
- `pages/`: minimal GitHub Pages metadata page, robots file, and sitemap for public indexing.
- `examples/`: future examples.
- `packages/`: future libraries and SDK packages.

## Feedback

Use Issues for actionable corrections and Discussions for open-ended protocol feedback.

- Errata, missing citations, broken links, and concrete text changes should be opened as Issues.
- Protocol design questions, integration questions, and ecosystem proposals should be opened as Discussions.
- Pull requests are welcome for scoped changes that follow `CONTRIBUTING.md`.

## Citation

Use the repository citation metadata in `CITATION.cff`.

DOI: [10.5281/zenodo.21017440](https://doi.org/10.5281/zenodo.21017440)

## License

Paper, specification, and documentation text are licensed under CC-BY-4.0. Future executable code, examples, and libraries are intended to be licensed under Apache-2.0 unless a file states otherwise. See `LICENSE-POLICY.md`.
