export default (
  functionName = 'handleAction',
  paramList = [],
  functionBody = `console.log('Executing handleAction');`,
) => {
  console.log({ paramList });

  return `
    function ${functionName} (${paramList.map((name, index) => `${name}`)}) {
      ${functionBody}
    }
    `;
};
