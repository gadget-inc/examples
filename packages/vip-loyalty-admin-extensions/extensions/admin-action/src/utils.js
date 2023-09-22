export async function updateVipProgram(id, vipProgram) {
  // updates the VIP program metafield for the customer
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
      value: vipProgram,
    }
  );
}

// get all available VIP programs for shop
export async function getVipPrograms() {
  const response = await makeGraphQLQuery(
    `query {
      shop {
        metafield(namespace: "$app:vip", key:"programs") {
          value
        }
      }
    }
  `
  );

  const vipPrograms = JSON.parse(response.data.shop.metafield.value);
  return vipPrograms.map((vipProgram) => ({
    label: vipProgram.name,
    value: vipProgram.name,
  }));
}

export async function getCustomerQuery(id) {
  return await makeGraphQLQuery(
    `query Customer($id: ID!) {
    customer(id: $id) {
      email
    }
  }`,
    { id }
  );
}

// generic graphQL query helper
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