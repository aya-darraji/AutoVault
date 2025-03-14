import { graphql } from '@keystone-6/core';
import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { text, integer, select } from '@keystone-6/core/fields';
import { context } from '../keystone';

export const CarSearchFilter = list({
  access: allowAll,
  fields: {
    searchQuery: text(),
    model: select({
      options: [
        { label: 'Toyota', value: 'toyota' },
        { label: 'Honda', value: 'honda' },
        { label: 'Ford', value: 'ford' },
      ],
    }),
    year: integer(),
    priceMin: integer(),
    priceMax: integer(),
    color: select({
      options: [
        { label: 'Black', value: 'black' },
        { label: 'White', value: 'white' },
        { label: 'Red', value: 'red' },
      ],
    }),
  },
  hooks: {
    resolveInput: async ({ resolvedData }) => {
      return resolvedData;
    },
  },
});

export const extendGraphQLSchema = graphql.extend(base => ({
  query: {
    carSearchFilter: graphql.field({
      type: graphql.list(base.object('Car')),
      args: {
        model: graphql.arg({ type: graphql.String }),
        year: graphql.arg({ type: graphql.Int }),
        priceMin: graphql.arg({ type: graphql.Int }),
        priceMax: graphql.arg({ type: graphql.Int }),
        color: graphql.arg({ type: graphql.String }),
      },
      async resolve(_root, { model, year, priceMin, priceMax, color }, context) {
        return await context.query.Car.findMany({
          where: {
            AND: [
              model ? { model: { equals: model } } : {},
              year ? { year: { equals: year } } : {},
              priceMin ? { price: { gte: priceMin } } : {},
              priceMax ? { price: { lte: priceMax } } : {},
              color ? { color: { equals: color } } : {},
            ],
          },
        });
      },
    }),
  },
}));
