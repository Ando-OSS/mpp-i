# Zenodo Notes

Zenodo should be connected before the first formal release is created.

1. The repository is public.
2. The license policy is final.
3. `CITATION.cff` is checked.
4. The Zenodo GitHub integration is enabled for `Ando-OSS/mpp-i`.
5. The first GitHub Release is created from tag `v1.0.0`.
6. Zenodo archives the release and mints the version DOI.
7. The DOI is copied back into `CITATION.cff`, `CITATION.bib`, and the release notes.

Zenodo should archive tagged releases, not arbitrary branch state. Keep `CITATION.cff` as the source of release metadata unless Zenodo-specific metadata becomes necessary. If a `.zenodo.json` file is added later, Zenodo will ignore `CITATION.cff` for GitHub release archiving, so the JSON file must be complete.

## Integration Steps

1. Sign in to Zenodo with the GitHub account that can access `Ando-OSS/mpp-i`.
2. Open the Zenodo profile menu and choose `GitHub`.
3. Click `Sync now`.
4. Find `Ando-OSS/mpp-i` and enable the repository toggle.
5. Create the GitHub release `v1.0.0`.
6. Wait for Zenodo to process the release.
7. Open the Zenodo record and copy the DOI.
8. Update repository citation metadata with the DOI in a follow-up commit.
