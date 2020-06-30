/**
 *  The tree consists of the following elements:
 *  {
 *     title: 'text of user menu item',
 *     childs: [ array of children elements with some structure ],
 *  }
 */
const questions = {
  title: 'Hi, How can I help you?',
  childs: [
    {
      title: 'I have a question',
      childs: [
        {
          title: 'How to register',
          childs: [
            { title: 'Go to host://site and click SignUp button!\nThen follow instructions.' },
          ],
        },
        {
          title: 'How to delete my account',
          childs: [
            { title: 'Please login, then go to your personal account and click the delete account button' },
          ],
        },
      ],
    },
    {
      title: 'I have a bug report',
      childs: [
        {
          title: 'Site bug report',
          childs: [
            {
              title: 'You found a typo?',
              childs: [
                { title: 'Please, email at some@email.me' },
              ],
            },
            {
              title: 'You found a broken link?',
              childs: [
                { title: 'Please, email at some@email.me' },
              ],
            },
          ],
        },
        {
          title: 'Widget bug report',
          childs: [
            {
              title: 'Widget not working!',
              childs: [
                {
                  title: 'Widget does not appear on page!',
                  childs: [
                    { title: 'Please, check api token in personal cabinet' },
                  ],
                },
                {
                  title: 'Color scheme not applicable!',
                  childs: [
                    { title: 'Please, read setup documentation!' },
                  ],
                },
              ],
            },
            {
              title: 'No settings applied!',
              childs: [
                { title: 'Please, read setup documentation!' },
              ],
            },
          ],
        },
      ],
    },
  ],
};

module.exports = questions;
