# Scheduled IONOS deploy for the Berlin opening

`deploy-ionos.yml` in this folder is the intended new version of
`.github/workflows/deploy-ionos.yml`. It adds:

- three scheduled runs on 26 October (09:00, 09:20 and 10:00 UTC; 10:00 CET
  is 09:00 UTC) that rebuild the site and upload it to IONOS, so the Berlin
  page loses its noindex right after the opening. A gate step skips any
  scheduled run that is not on 2026-10-26.
- a check that refuses to deploy if anything from private/berlin ended up in dist.
- a concurrency group so two deploys never upload at the same time.

It lives here only because the token that prepared this change could not
write to `.github/workflows/` (GitHub requires the `workflow` scope for
that). To activate it, copy it over the real workflow:

    cp docs/ionos/deploy-ionos.yml .github/workflows/deploy-ionos.yml

Scheduled runs only fire from the default branch, so this must be on
`main` before 26 October.
