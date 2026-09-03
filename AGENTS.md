## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Outstanding client confirmations

- **Web3Forms access key — most urgent.** Both contact forms (`ContactForm.astro`, `HeroEnquiryForm.astro`) still ship with the literal placeholder `WEB3FORMS_ACCESS_KEY`, so enquiries submitted on the live site currently go nowhere. Client needs to sign up free at web3forms.com with their own email and send over the key.
- Public enquiries email address — `business.email` in `src/data/business.ts` is still a placeholder (`info@bcdecoration.com`); confirm a real address or drop email as a contact method.
- Current Facebook page URL (old site's link not assumed correct).
- PDA membership / Dulux Select Decorator / Farrow & Ball approved decorator status, if any apply.
- Full trading address, if one should appear (not required for a service-area Google Business Profile listing).
- Real project photos (The Grange, Blackford, Braids, Mortonhall, Scotland Street, West Castle Road, van/team photos) — confirm past clients are comfortable with address-identifiable photos before publishing any location-tagged image.

Resolved: public liability insurance is confirmed (Direct Line) — the site states "fully insured" but does not name the insurer. Reviews are populated (Claire, Elaine, Emma).

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
