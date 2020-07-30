export const dummyData = [
  {
    id: 1,
    name: "Mark",
    surname: "Hopper",
    image: require(`./assets/dummyDataImages/1.jpeg`),
    transaction_amount: 1300.5,
    transaction_date: new Date(),
    transaction_type: "Debt",
  },
  {
    id: 2,
    name: "Ada",
    surname: "Lovelace",
    image: require(`./assets/dummyDataImages/2.jpg`),
    transaction_amount: 720.25,
    transaction_date: new Date(2020, 5, 25),
    transaction_type: "Debt",
  },
  {
    id: 3,
    name: "Margaret",
    surname: "Lui",
    image: require(`./assets/dummyDataImages/3.jpg`),
    transaction_amount: 420.83,
    transaction_date: new Date(2020, 5, 23),
    transaction_type: "Debt",
  },
];
