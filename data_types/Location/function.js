function(ellipsis) {
  const ssf = `
**Concentra South San Francisco**
3 S Linden Avenue
South San Francisco, CA 94080
(650) 238-1500

**Kaiser Occupational Health**
Bayhill medical Offices
801 Traeger Avenue Suite 212
San Bruno, CA 94066
(650) 742-7110
`;

const lar = `
**Stitches**
3810 Grand Ave
Laramie, WY 82070
(307) 721-1794
`;

ellipsis.success(
  [
    { id: "SSF", label: "SSF", urgentCare: ssf },
    { id: "LAR", label: "LAR", urgentCare: lar }
  ]
);
}
