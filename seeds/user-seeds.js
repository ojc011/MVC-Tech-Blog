const { User } = require("../models");

const userData = [
  {
    username: "George_Clooney",
    twitter: "georgec",
    github: "georgec",
    email: "georce_c@gmail.com",
    password: "p@ssword1",
  },
  {
    username: "Oliver_C",
    twitter: "oliverc",
    github: "oliverc",
    email: "oliver_c@gmail.com",
    password: "p@ssword2",
  },
  {
    username: "chris_r",
    twitter: "chris",
    github: "chris",
    email: "chris_r@gmail.com",
    password: "p@ssword3",
  },
  {
    username: "will_s",
    twitter: "wills",
    github: "wills",
    email: "will_s@gmail.com",
    password: "p@ssword4",
  },
  {
    username: "derek_j",
    twitter: "derekj",
    github: "derekj",
    email: "derek_j@gmail.com",
    password: "p@ssword5",
  },
  {
    username: "patricke",
    twitter: "patrick_e",
    github: "patrick",
    email: "patrick@gmail.com",
    password: "p@ssword6",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
