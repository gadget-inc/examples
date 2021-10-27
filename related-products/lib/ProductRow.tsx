import { Td, Tr } from "@chakra-ui/react";
import { ShopifyProduct } from "@gadget-client/related-products-example";
import { Select } from "@gadgetinc/api-client-core";
import styles from "../styles/Home.module.css";
import { AddNewPairedProduct } from "./AddNewRelatedProduct";

export const ProductRow = (props: {
  product: Select<ShopifyProduct, { id: true; title: true; pairedProducts: { edges: { node: { id: true; title: true } } } }>;
  onChange?: () => void;
}) => {
  const pairedProducts = props.product.pairedProducts!.edges.map((edge) => edge!.node);

  return (
    <Tr>
      <Td>{props.product.title}</Td>
      <Td>
        {pairedProducts.length > 0 ? pairedProducts.map((product) => product.title) : <span className={styles.subdued}>none yet</span>}
      </Td>
      <Td>
        <AddNewPairedProduct product={props.product} onChange={props.onChange} />
      </Td>
    </Tr>
  );
};
