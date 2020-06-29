const questions = {
  question: "Hi, How can I help you?",
  variants: [
    {
      question: "I have a question",
      variants: [
        {
          question: "How to register",
          info:
            "Go to host://site and click SignUp button!\nThen follow instructions."
        },
        {
          question: "How to delete my account",
          info:
            "Please login, then go to your personal account and click the delete account button"
        }
      ]
    },
    {
      question: "I have a bug report",
      variants: [
        {
          question: "Site bug report",
          variants: [
            {
              question: "You found a typo?",
              info: "Please, email at some@email.me"
            },
            {
              question: "You found a broken link?",
              info: "Please, email at some@email.me"
            }
          ]
        },
        {
          question: "Widget bug report",
          variants: [
            {
              question: "Widget not working!",
              variants: [
                {
                  question: "Widget does not appear on page!",
                  info: "Please, check api token in personal cabinet"
                },
                {
                  question: "Color scheme not applicable!",
                  info: "Please, read setup documentation!"
                }
              ]
            },
            {
              question: "No settings applied!",
              info: "Please, read setup documentation!"
            }
          ]
        }
      ]
    }
  ]
};

module.exports = questions;
