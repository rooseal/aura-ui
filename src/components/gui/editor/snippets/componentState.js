export default (stateName = 'state', initialValue) =>
  // console.log({ stateName, initialValue });

  // console.log(`
  // const [${stateName.toLowerCase()}, set${stateName[0].toUpperCase() +
  //   stateName.slice(1).toLowerCase()}] = useState(${initialValue});
  // `);

  `
  const [${stateName.toLowerCase()}, set${stateName[0].toUpperCase() +
    stateName.slice(1).toLowerCase()}] = React.useState(${initialValue});
  `;
