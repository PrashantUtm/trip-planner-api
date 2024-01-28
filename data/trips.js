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
      ],
      checklistItems: [
        { title: "do something", checked: true },
        { title: "do something1", checked: false },
        { title: "do somethin2", checked: false },
        { title: "do somethin3", checked: true },
        { title: "do somethin4", checked: false },
      ]
    },
    ,
    {
      id: '3',
      title: 'Latino 2023',
      budget: 250000,
      startDestination: { name: 'Brazil', date: new Date(2023, 10, 17) },
      finalDestination: { name: 'Mauritius', date: new Date(2023, 11, 17) },
      travellers: [
        { userId: '33333', role: 'Organiser' }
      ],
      otherDestinations: [
        { name: 'Argentina', date: new Date(2023, 10, 23) },
        { name: 'Peru', date: new Date(2023, 10, 30) },
        { name: 'Puerto Rico', date: new Date(2023, 11, 10) }
      ],
      checklistItems: [
        { title: "do something", checked: true },
        { title: "do something1", checked: false },
        { title: "do somethin2", checked: false },
        { title: "do somethin3", checked: true },
        { title: "do somethin4", checked: false },
      ]
    },
  ];

module.exports = trips