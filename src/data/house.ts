let houseArray = [
  {
    id: 1,
    name: 'Sunnydale',
    imageUrl:
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80',
    location: 'Aurora',
    type: 'Villa',
    rent: 2000,
    bedrooms: 3,
    bathrooms: 2,
  },
  {
    id: 2,
    name: 'Rosewood',
    imageUrl:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    location: 'Bridgetown',
    type: 'Villa',
    rent: 2500,
    bedrooms: 4,
    bathrooms: 3,
  },
  {
    id: 3,
    name: 'Willowbrook',
    imageUrl:
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    location: 'Cedarville',
    type: 'Villa',
    rent: 3000,
    bedrooms: 5,
    bathrooms: 4,
  },
  {
    id: 4,
    name: 'Hillcrest',
    imageUrl:
      'https://images.unsplash.com/photo-1601760562234-9814eea6663a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbGVzdGF0ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    location: 'Dunmore',
    type: 'Villa',
    rent: 3500,
    bedrooms: 6,
    bathrooms: 5,
  },
  {
    id: 5,
    name: 'Maplewood',
    imageUrl:
      'https://images.unsplash.com/photo-1601760562234-9814eea6663a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbGVzdGF0ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    location: 'Elmwood',
    type: 'Villa',
    rent: 4000,
    bedrooms: 7,
    bathrooms: 6,
  },
  {
    id: 6,
    name: 'Oakwood',
    imageUrl:
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1680&q=80',

    location: 'Fairview',
    type: 'Apartment',
    rent: 2300,
    bedrooms: 3,
    bathrooms: 2,
  },
  {
    id: 7,
    name: 'Riverdale',
    imageUrl:
      'https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    location: 'Glenwood',
    type: 'Apartment',
    rent: 2800,
    bedrooms: 4,
    bathrooms: 3,
  },
  {
    id: 8,
    name: 'Meadowview',
    imageUrl:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    location: 'Hazelwood',
    type: 'Apartment',
    rent: 3200,
    bedrooms: 5,
    bathrooms: 4,
  },
  {
    id: 9,
    name: 'Pinehurst',
    imageUrl:
      'https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    location: 'Cherrywood',
    type: 'Apartment',
    rent: 3600,
    bedrooms: 6,
    bathrooms: 5,
  },
  {
    id: 10,
    name: 'Woodland',
    imageUrl:
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    location: 'Ashwood',
    type: 'Apartment',
    rent: 4000,
    bedrooms: 7,
    bathrooms: 6,
  },
  {
    id: 11,
    name: 'Greenwood',
    imageUrl:
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    location: 'Birchwood',
    type: 'House',
    rent: 2500,
    bedrooms: 3,
    bathrooms: 2,
  },
  {
    id: 12,
    name: 'Fairview',
    imageUrl:
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
    location: 'Elmwood',
    type: 'House',
    rent: 2800,
    bedrooms: 4,
    bathrooms: 3,
  },
  {
    id: 13,
    name: 'Lakeside',
    imageUrl:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',

    location: 'Glenwood',
    type: 'House',
    rent: 3200,
    bedrooms: 5,
    bathrooms: 4,
  },
  {
    id: 14,
    name: 'Cedarwood',
    imageUrl:
      'https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',

    location: 'Hazelwood',
    type: 'House',
    rent: 3600,
    bedrooms: 6,
    bathrooms: 5,
  },
  {
    id: 15,
    name: 'Birchwood',
    imageUrl:
      'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',

    location: 'Cherrywood',
    type: 'House',
    rent: 4000,
    bedrooms: 7,
    bathrooms: 6,
  },
];

let shuffledHouseArray = houseArray
  .map((value) => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value);

export { houseArray, shuffledHouseArray };
