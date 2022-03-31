const { Comment } = require("../models");

const commentData = [
  {
    user_id: 1,
    post_id: 5,
    comment_text: "This is great!",
  },
  {
    user_id: 4,
    post_id: 4,
    comment_text: "amazing job!",
  },
  {
    user_id: 1,
    post_id: 4,
    comment_text: "Bravo to all",
  },
  {
    user_id: 3,
    post_id: 5,
    comment_text: "We just reached a million subscribers!",
  },
  {
    user_id: 3,
    post_id: 2,
    comment_text: "Splendid news!",
  },
  {
    user_id: 3,
    post_id: 4,
    comment_text:
      "This feature will be huge!",
  },
  {
    user_id: 5,
    post_id: 3,
    comment_text: "Super useful!",
  },
  {
    user_id: 2,
    post_id: 1,
    comment_text: "Great addition!",
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
