// eslint-disable-next-line import/prefer-default-export
export const getUserName = () => fetch('https://randomuser.me/api/?inc=name&nat=us')
  .then(async (response) => {
    const { results } = await response.json();
    const { name } = results[0];

    return `${name.first} ${name.last[0]}.`;
  })
  .catch(() => 'Anonymous');
