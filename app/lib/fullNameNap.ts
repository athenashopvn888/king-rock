/**
 * KR01 exact full name + NAP. Name = the store's full name as used on its Google Business Profile.
 * Public GBP primary phone only. Map link = this store's own Google place ID.
 */
export const FULL_NAME_NAP = {
  "code": "KR01",
  "fullName": "King Rock Dispensary Weed Delivery",
  "street": "1220b King St W",
  "city": "Toronto",
  "region": "ON",
  "postal": "M6K 1G4",
  "phoneDisplay": "(437) 780-9691",
  "phoneTel": "tel:+14377809691",
  "hours": "Open 24 hours, 7 days a week",
  "mapsUrl": "https://www.google.com/maps/place/?q=place_id:ChIJS27Cvmo1K4gRemGsilWLHzk",
  "placeId": "ChIJS27Cvmo1K4gRemGsilWLHzk",
  "neighbourhood": "King West / Liberty Village",
  "intersection": "King Street West & Dufferin Street / Atlantic Avenue",
  "transit": "Served by the 504 King streetcar, 29/929 Dufferin buses, and the Atlantic Avenue walk from Liberty Village.",
  "visitPath": "/visit"
} as const;

export const FULL_NAME_NAP_ADDRESS = `${FULL_NAME_NAP.street}, ${FULL_NAME_NAP.city}, ${FULL_NAME_NAP.region} ${FULL_NAME_NAP.postal}`;
