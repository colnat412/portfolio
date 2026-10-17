# Adding certificates

Edit the certificates array in src/constants/data.ts. The section appears between Projects and Contact. Existing entries use only the information supplied by the portfolio owner.

Fields:

- id: unique identifier
- title: certificate or exam name
- issuer: optional issuing organization
- issuedAt: optional display date
- credentialId: optional certification identifier
- score: optional score text, such as 680 / 990
- note: optional note shown until a file or image is supplied
- imageUrl: optional preview image URL
- fileUrl: optional certificate PDF/image URL
- credentialUrl: optional issuer verification URL

## Adding the TOEIC image later

1. Put the actual image in public/certificates, for example toeic-redacted.png.
2. Add imageUrl: "/certificates/toeic-redacted.png" to the toeic-listening-reading entry.
3. Optionally add fileUrl for a separate PDF.

Each certificate has its own image slot. Leave imageUrl empty when you do not want to add an image yet.

The preview appears automatically when a valid imageUrl is supplied. Images keep their original proportions and are not cropped. Click the preview to open the full image. A missing or unreadable image shows a neutral placeholder instead of a broken image. The image-pending note disappears when the preview is available. Public URLs start with /certificates, without /public. Issuer/date/verification links are omitted when not provided. No API or database is required.

The TOEIC preview and full-image link use toeic-redacted.png, with the identification number permanently covered in the image. Keep unredacted scans outside public.
