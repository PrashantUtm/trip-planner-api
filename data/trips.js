const trips = [
    {
      id: '1',
      title: 'Trip to Europe',
      budget: 100000,
      startDestination: { name: 'Paris', date: new Date(2023, 11, 17) },
      finalDestination: { name: 'London', date: new Date(2023, 11, 30) },
      travellers: [
        { userId: '11111', role: 'Organiser' },
        { userId: '22222', role: 'First Aider' },
        { userId: '33333', role: 'Guide' },
      ]
    },
    {
      id: '2',
      title: 'Summer Vacation 2022',
      budget: 100000,
      startDestination: { name: 'South Africa', date: new Date(2022, 10, 17) },
      finalDestination: { name: 'Mauritius', date: new Date(2022, 10, 25) },
      travellers: [
        { userId: '11111', role: 'Organiser' }
      ],
      otherDestinations: [
        { name: 'Uganda', date: new Date(2022, 10, 21) }
      ]
    },
  ];

module.exports = trips