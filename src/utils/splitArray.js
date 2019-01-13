const splitCollection = (condition, collection) =>
  collection.reduce(
    (acc, current) => {
      const isPositive = condition(current);

      if (isPositive) {
        return [[...acc[0], current], acc[1]];
      }

      return [acc[0], [...acc[1], current]];
    },
    [[], []],
  );

export default splitCollection;
