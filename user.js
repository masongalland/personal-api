var user = {
  name: 'Mason',
  location: 'Provo, UT',
  occupations: ['Project Manager', 'Student'],
  hobbies: [
    {
      name: 'Skiing',
      type: 'Extreme Sports'
    },
    {
      name: 'Mountain Biking',
      type: 'Extreme Sports'
    },
    {
      name: 'Reading',
      type: 'Chill'
    }
  ],
  family: [
    {
      name: 'Aly',
      relation: 'Wife',
      gender: 'Female'
    },
    {
      name: 'Briar',
      relation: 'Daughter',
      gender: 'Female'
    },{
      name: 'Braydon',
      relation: 'Brother',
      gender: 'Male'
    }
  ],
  restaurants: [
    {
      name: "Cubby's",
      type: "American",
      rating: 5
    },
    {
      name: "Marley's",
      type: "American",
      rating: 4
    },
    {
      name: "Happy Sumo",
      type: "Sushi",
      rating: 5
    }
  ]
};
module.exports = user;