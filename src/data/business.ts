export const business = {
  name: "Bruce Clark Decoration",
  shortName: "Bruce Clark",
  tagline: "Painters & Decorators in Edinburgh",
  phoneDisplay: "07591 141732",
  phoneHref: "tel:07591141732",
  // TODO(client): confirm a public enquiries email address, or remove email contact method if he prefers phone/form only.
  email: "info@bcdecoration.com",
  city: "Edinburgh",
  region: "Scotland",
  country: "GB",
  yearsExperience: "26+",
  rating: "5.0",
  reviewCount: "28",
  hoursDisplay: "Mon–Fri, 8:00am–4:30pm",
  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "16:30" },
  ],
  instagram: "https://www.instagram.com/bruceclarkdecoration",
  // TODO(client): confirm the current active Facebook page URL before publishing — do not assume the old site's link is correct. Leave blank until confirmed.
  facebook: "",
  // TODO(client): confirm this holds today, and provide policy/certificate details if so — do not publish "insured" as fact until confirmed.
  insuranceConfirmed: false,
  // TODO(client): confirm PDA (Painting and Decorating Association) membership, Dulux Select Decorator, or Farrow & Ball approved decorator status. If any apply, add here and surface on About page + footer.
  certifications: [] as { name: string; description: string }[],
  siteUrl: "https://www.bcdecoration.com",
  // TODO(client): confirm a full trading address if one should appear (many sole-trader decorators operate without a public premises address — Google Business Profile service-area listings don't require one). Left blank pending confirmation.
  addressLine1: "",
  postcode: "",
  latitude: 55.9533,
  longitude: -3.1883,
} as const;

// TODO(client): supply 3-6 real quotes from actual Google reviews (with the reviewer's first
// name) to power the testimonials section and Review schema. Do not fabricate reviews — leave
// this empty until real quotes are provided; the aggregate 5.0/28 rating is shown regardless.
export const reviews: { author: string; rating: number; text: string }[] = [];

export type ServiceDef = {
  slug: string;
  name: string;
  shortName: string;
  navLabel: string;
  summary: string;
  metaDescription: string;
  icon: "brush" | "roller" | "wallpaper" | "building";
  bullets: string[];
  faqs: { q: string; a: string }[];
};

export const services: ServiceDef[] = [
  {
    slug: "residential-decorating-edinburgh",
    name: "Residential Decorating",
    shortName: "Residential Decorating",
    navLabel: "Residential Decorating",
    summary:
      "Interior painting, preparation and wallpaper hanging for Edinburgh homes — from a single room refresh to a full property redecoration.",
    metaDescription:
      "Residential decorator in Edinburgh for interior painting, preparation and wallpaper hanging. 26+ years' experience, 5.0 rating. Get in touch for a free quote.",
    icon: "brush",
    bullets: [
      "Interior painting for every room, in any finish",
      "Thorough surface preparation — filling, sanding, sealing",
      "Wallpaper hanging (see our dedicated Specialist Finishes page for full detail)",
      "Ceiling, cornice and woodwork painting",
      "Colour consultation to help you choose the right scheme",
      "Dust sheets, protection and a clean, tidy finish every time",
    ],
    faqs: [
      {
        q: "Do you move furniture and cover flooring before starting?",
        a: "Yes. We protect flooring, furniture and fittings with dust sheets before any work begins, and move what we can to give a clear working area, restoring the room afterwards.",
      },
      {
        q: "How long does an average room take?",
        a: "A standard room typically takes one to two days including preparation, depending on wall condition and the finish chosen. We'll give you an accurate timescale after seeing the job.",
      },
      {
        q: "Can you match Edinburgh tenement and period property features?",
        a: "Yes, we regularly work in Edinburgh's tenements, New Town flats and Victorian villas, taking care around cornicing, ceiling roses and original woodwork.",
      },
    ],
  },
  {
    slug: "exterior-painting-decorating-edinburgh",
    name: "Exterior Painting & Decorating",
    shortName: "Exterior Painting",
    navLabel: "Exterior Painting & Decorating",
    summary:
      "Weatherproof exterior painting and decorating for Edinburgh's tenements, villas and render — prepared and finished to last through Scottish weather.",
    metaDescription:
      "Exterior painter and decorator in Edinburgh. Harling, render, sandstone and woodwork painted to a weatherproof finish. 26+ years' experience. Free quotes.",
    icon: "building",
    bullets: [
      "Render, harling and sandstone painting",
      "Exterior woodwork — doors, windows, fascias and soffits",
      "Weather-appropriate preparation, including washing down and repairs",
      "Gutters, downpipes and railings",
      "Stone and masonry paint suited to Edinburgh's climate",
      "Scaffold and access coordination for tenement and villa work",
    ],
    faqs: [
      {
        q: "What time of year is best for exterior painting in Edinburgh?",
        a: "Spring through early autumn gives the most reliable drying conditions, though we monitor the forecast closely and plan around it — exterior paint needs the surface to be properly dry before application.",
      },
      {
        q: "Do you work on tenement common stairs and shared exteriors?",
        a: "Yes, we regularly coordinate with factors and other owners on shared tenement exteriors and common stair painting across Edinburgh.",
      },
      {
        q: "How long does exterior paint last in Edinburgh's weather?",
        a: "With correct preparation and a quality weatherproof system, a well-executed exterior repaint typically lasts 8–10 years before it needs attention again, depending on aspect and exposure.",
      },
    ],
  },
  {
    slug: "wallpaper-hanging-ames-taping-edinburgh",
    name: "Specialist Finishes — Wallpaper Hanging & Ames Taping",
    shortName: "Specialist Finishes",
    navLabel: "Specialist Finishes",
    summary:
      "Professional wallpaper hanging and Ames taping (drywall taping and jointing) across Edinburgh — precise, seamless finishes for demanding interiors.",
    metaDescription:
      "Wallpaper hanging and Ames taping in Edinburgh. Precise pattern-matched wallpaper installation and seamless drywall taping and jointing. 26+ years' experience.",
    icon: "wallpaper",
    bullets: [
      "Wallpaper hanging — pattern matching, feature walls, full rooms",
      "Lining paper preparation for a smooth, long-lasting finish",
      "Ames taping — mechanical drywall taping and jointing for a seamless, professional wall and ceiling finish",
      "Textured, heavyweight and delicate wallcoverings handled with care",
      "Coordination with plasterers and joiners on new-build and renovation jobs",
      "Repairs and re-hangs where previous paperwork has failed",
    ],
    faqs: [
      {
        q: "What is Ames taping?",
        a: "Ames taping uses mechanical taping tools to apply joint tape and compound to drywall seams in a single, consistent pass — giving a smoother, more even finish than hand-taping, especially over large wall and ceiling areas.",
      },
      {
        q: "Can you hang patterned or textured wallpaper?",
        a: "Yes, pattern matching on repeat designs and handling delicate or heavyweight wallcoverings is a core part of what we do — we take the time to get seams and pattern alignment right.",
      },
      {
        q: "Do you supply the wallpaper or do I need to buy it myself?",
        a: "Most customers choose and supply their own wallpaper, and we're happy to advise on quantities and suitability before you order. We supply all adhesives, lining paper and preparation materials.",
      },
    ],
  },
  {
    slug: "commercial-decorating-edinburgh",
    name: "Commercial Decorating",
    shortName: "Commercial Decorating",
    navLabel: "Commercial Decorating",
    summary:
      "Painting and decorating for Edinburgh offices, shops, stairwells and rental properties — scheduled around your business to minimise disruption.",
    metaDescription:
      "Commercial decorator in Edinburgh for offices, retail, stairwells and rental properties. Flexible scheduling, minimal disruption. 26+ years' experience.",
    icon: "building",
    bullets: [
      "Offices, retail units and reception areas",
      "Communal stairwells and tenement common areas",
      "Rental and let property redecoration between tenancies",
      "Out-of-hours and weekend scheduling to avoid disrupting trading",
      "Durable, high-traffic-suited paint systems",
      "Working alongside factors, landlords and letting agents",
    ],
    faqs: [
      {
        q: "Can you work outside business hours?",
        a: "Yes, we regularly schedule commercial and let-property work in the evenings or over weekends so it doesn't interrupt trading or tenancy.",
      },
      {
        q: "Do you work with letting agents and factors directly?",
        a: "Yes, we're used to coordinating directly with letting agents, factors and property managers on turnaround jobs between tenancies.",
      },
      {
        q: "Can you quote for a multi-unit or repeat contract?",
        a: "Yes, get in touch with the details and we'll put together a quote for ongoing or multi-property work.",
      },
    ],
  },
];

export const extraAreas = ["Balerno", "Linlithgow", "and surrounding Lothians"] as const;

export type LocationDef = {
  slug: string;
  name: string;
  metaDescription: string;
  intro: string;
  landmarks: string[];
  propertyNote: string;
  faqs: { q: string; a: string }[];
};

export const locations: LocationDef[] = [
  {
    slug: "the-grange",
    name: "The Grange",
    metaDescription:
      "Decorator covering The Grange, Edinburgh. Interior and exterior painting for Victorian villas and townhouses. 26+ years' experience, 5.0 rating.",
    intro:
      "The Grange is one of Edinburgh's most distinctive conservation areas, its large Victorian villas set behind stone walls and mature gardens. Decorating work here tends to involve generously proportioned rooms, high ceilings and original period detailing that rewards careful, patient preparation.",
    landmarks: ["Grange Road", "Blackford Hill", "The Meadows", "St Giles' Cathedral (nearby city views)"],
    propertyNote:
      "Grange villas often retain original cornicing, ceiling roses and panelled woodwork, so interior work here is usually about respecting those features rather than overworking them — careful masking, appropriate paint sheens on period woodwork, and colour schemes that suit the proportions of Victorian rooms.",
    faqs: [
      {
        q: "Do you work carefully around original period features in The Grange?",
        a: "Yes, Grange villas commonly have cornicing, ceiling roses and panelled doors we take particular care to protect and paint appropriately rather than over-fill or obscure.",
      },
      {
        q: "Can you help with exterior sandstone and render in The Grange?",
        a: "Yes, we carry out exterior painting and decoration on the sandstone, render and woodwork typical of Grange properties, prepared to suit conservation-area standards.",
      },
    ],
  },
  {
    slug: "new-town",
    name: "New Town",
    metaDescription:
      "Decorator covering Edinburgh's New Town. Interior and exterior painting for Georgian flats and townhouses. 26+ years' experience, 5.0 rating.",
    intro:
      "Edinburgh's New Town is a UNESCO World Heritage site of Georgian terraces and elegant flats, and decorating within it means working to a standard that respects the architecture — tall ceilings, deep cornicing, and often shared common stairs.",
    landmarks: ["Princes Street Gardens", "Charlotte Square", "George Street", "Scotland Street"],
    propertyNote:
      "New Town flats typically have high ceilings, ornate cornicing and original shutters or sash windows, which means more time on preparation and a careful approach to woodwork finishes that suit a Georgian interior rather than a modern one.",
    faqs: [
      {
        q: "Do you need factor or common stair permission for New Town common areas?",
        a: "Where work involves a shared common stair, we're happy to coordinate with your factor on timing and access — just let us know when you get in touch.",
      },
      {
        q: "Can you paint New Town cornicing and ceiling roses without damaging them?",
        a: "Yes, we take particular care around plaster cornicing and ceiling roses, using appropriate brushes and masking to keep detail crisp rather than clogged with paint.",
      },
    ],
  },
  {
    slug: "merchiston",
    name: "Merchiston",
    metaDescription:
      "Decorator covering Merchiston, Edinburgh. Interior and exterior painting for Victorian terraces and family homes. 26+ years' experience, 5.0 rating.",
    intro:
      "Merchiston's leafy streets of Victorian terraces and villas, close to Napier University and Bruntsfield, see a steady mix of family home refreshes and larger period property projects.",
    landmarks: ["Merchiston Avenue", "Colinton Road", "Napier University", "Harrison Park"],
    propertyNote:
      "Merchiston properties range from compact terraced flats to larger detached villas, so we scope each job individually — smaller flats often need efficient, minimal-disruption scheduling, while villas allow more scope for full redecoration projects.",
    faqs: [
      {
        q: "Do you decorate both flats and larger villas in Merchiston?",
        a: "Yes, we take on jobs of every size in Merchiston, from a single room in a terraced flat to a full villa redecoration.",
      },
      {
        q: "Can you work around family schedules and school runs?",
        a: "Yes, we're happy to agree working hours that fit around your household — just let us know what works when you get in touch.",
      },
    ],
  },
  {
    slug: "morningside",
    name: "Morningside",
    metaDescription:
      "Decorator covering Morningside, Edinburgh. Interior and exterior painting for Victorian villas and tenement flats. 26+ years' experience, 5.0 rating.",
    intro:
      "Morningside's mix of Victorian villas, tenement flats and traditional shopfronts along Morningside Road means our work here spans everything from period interior redecoration to exterior refreshes on well-loved family homes.",
    landmarks: ["Morningside Road", "Braid Hills", "Comiston", "Church Hill"],
    propertyNote:
      "Morningside's older villas and semi-detached homes tend to have generous room sizes and original woodwork, so preparation and a period-appropriate finish are usually the priority, alongside efficient scheduling for busy family households.",
    faqs: [
      {
        q: "Do you cover exterior work on Morningside villas?",
        a: "Yes, exterior painting and decorating on the render, sandstone and woodwork typical of Morningside's villas and semi-detached homes is work we take on regularly.",
      },
      {
        q: "Can you match existing colour schemes in older Morningside homes?",
        a: "Yes, we can colour match existing schemes or help you choose a fresh palette that suits a period Morningside interior.",
      },
    ],
  },
  {
    slug: "colinton",
    name: "Colinton",
    metaDescription:
      "Decorator covering Colinton, Edinburgh. Interior and exterior painting for village homes and cottages. 26+ years' experience, 5.0 rating.",
    intro:
      "Colinton's village character, with its stone cottages, converted mill buildings and family homes near the Water of Leith, calls for decorating work that's sympathetic to older, characterful properties as much as it is efficient for busy households.",
    landmarks: ["Colinton Village", "Water of Leith Walkway", "Bonaly", "Redford Road"],
    propertyNote:
      "Colinton's stone cottages and converted properties often have thicker walls, smaller window openings and individual character worth preserving, so we adapt our preparation and finish choices property by property rather than applying a one-size approach.",
    faqs: [
      {
        q: "Do you work on older stone cottages in Colinton village?",
        a: "Yes, we regularly decorate the stone cottages and converted properties around Colinton village, working sympathetically with their individual character.",
      },
      {
        q: "Can you help with exterior woodwork on older Colinton homes?",
        a: "Yes, exterior woodwork — doors, windows, fascias — on older Colinton properties is work we take on regularly, prepared to withstand Scottish weather.",
      },
    ],
  },
  {
    slug: "stockbridge",
    name: "Stockbridge",
    metaDescription:
      "Decorator covering Stockbridge, Edinburgh. Interior and exterior painting for tenement flats near the Water of Leith. 26+ years' experience, 5.0 rating.",
    intro:
      "Stockbridge's tenement flats around Raeburn Place and St Stephen Street are some of the most characterful properties we work on — full of original detail, and often recently renovated by owners wanting a considered, well-finished interior.",
    landmarks: ["Raeburn Place", "St Stephen Street", "Water of Leith", "Deanhaugh Street"],
    propertyNote:
      "Stockbridge is dominated by tenement flats, many recently purchased and renovated, so we see a steady mix of full interior redecoration, wallpaper hanging in period rooms, and careful work around original cornicing and shared stair supplies.",
    faqs: [
      {
        q: "Do you hang wallpaper in Stockbridge tenement flats?",
        a: "Yes, wallpaper hanging in period Stockbridge flats — including pattern-matched feature walls — is work we take on regularly.",
      },
      {
        q: "Can you work around a tenement's shared common stair?",
        a: "Yes, we're experienced with the shared stair arrangements common in Stockbridge tenements and will confirm access with you and your factor before starting.",
      },
    ],
  },
];
