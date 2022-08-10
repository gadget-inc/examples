import { useAction, useFindMany } from "@gadgetinc/react";
import { useGadget } from "@gadgetinc/react-shopify-app-bridge";
import { Button, Redirect, TitleBar } from "@shopify/app-bridge/actions";
import { api } from "../api";

export function ProductManager() {
  // the useGadget hook allows us to use Shopify's App Bridge actions and components
  const { loading, appBridge } = useGadget();
  const [_, deleteProduct] = useAction(api.shopifyProduct.delete);
  const [{ data, fetching, error }, refresh] = useFindMany(api.shopifyProduct);

  if (error) return <>Error: {error.toString()}</>;
  if (fetching) return <>Fetching...</>;
  if (!data) return <>No widgets found</>;

  // Set up a title bar for the embedded app
  const breadcrumb = Button.create(appBridge, { label: "My breadcrumb" });
  breadcrumb.subscribe(Button.Action.CLICK, () => {
    appBridge.dispatch(Redirect.toApp({ path: "/breadcrumb-link" }));
  });

  const titleBarOptions = {
    title: "My page title",
    breadcrumbs: breadcrumb,
  };
  TitleBar.create(appBridge, titleBarOptions);

  return (
    <>
      {loading && <span>Loading...</span>}
      {!loading &&
        data.map((widget, i) => (
          <button
            key={i}
            onClick={(event) => {
              event.preventDefault();
              void deleteProduct({ id: widget.id }).then(() => refresh());
            }}
          >
            Delete {widget.title}
          </button>
        ))}
    </>
  );
}
