// fetch the metafield for a specific customer
export async function getCustomerVipProgram(customerId) {
  // This example uses metafields to store the data. For more information, refer to https://shopify.dev/docs/apps/custom-data/metafields.
  return await makeGraphQLQuery(
    `query Customer($id: ID!) {
      customer(id: $id) {
        metafield(namespace: "vip-program", key:"customer-program") {
          value
        }
      }
    }
  `,
    { id: customerId }
  );
}

export async function removeVipProgram(id) {
  // empty the VIP program metafield associated with this customer
  return await makeGraphQLQuery(
    `mutation SetMetafield($namespace: String!, $ownerId: ID!, $key: String!, $type: String!, $value: String!) {
    metafieldDefinitionCreate(
      definition: {namespace: $namespace, key: $key, name: "Vip Program", ownerType: CUSTOMER, type: $type, access: {admin: MERCHANT_READ_WRITE}}
    ) {
      createdDefinition {
        id
      }
    }
    metafieldsSet(metafields: [{ownerId:$ownerId, namespace:$namespace, key:$key, type:$type, value:$value}]) {
      userErrors {
        field
        message
        code
      }
    }
  }
  `,
    {
      ownerId: id,
      namespace: "vip-program",
      key: "customer-program",
      type: "string",
      value: "null",
    }
  );
}

// generic graphQL helper
async function makeGraphQLQuery(query, variables) {
  const graphQLQuery = {
    query,
    variables,
  };

  const res = await fetch("shopify:admin/api/graphql.json", {
    method: "POST",
    body: JSON.stringify(graphQLQuery),
  });

  if (!res.ok) {
    console.error("Network error");
  }

  return await res.json();
}