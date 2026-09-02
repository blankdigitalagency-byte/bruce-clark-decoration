## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Outstanding client confirmations

These are marked `TODO(client):` in `src/data/business.ts` and must be resolved before launch:

- PDA membership / Dulux Select Decorator / Farrow & Ball approved decorator status.
- Current Facebook page URL (old site's link not assumed correct).
- Web3Forms access key (client signs up free at web3forms.com with their own email).
- Real project photos (The Grange, Blackford, Braids, Mortonhall, Scotland Street, West Castle Road, van/team photos) — confirm past clients are comfortable with address-identifiable photos before publishing any location-tagged image.

Public liability insurance is confirmed (Direct Line) — the site states "fully insured" but does not name the insurer.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
