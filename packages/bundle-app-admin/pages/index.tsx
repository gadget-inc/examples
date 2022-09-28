import { useFindMany } from "@gadgetinc/react";
import { Button, Card, Select } from "@shopify/polaris";
import type { NextPage } from "next";
import { useCallback, useState } from "react";
import { api } from "../api/gadget";

const Home: NextPage = () => {
  const [bundleResult] = useFindMany(api.bundle);
  const bundleData = bundleResult.data;

  // add bundles to Select component state
  const options = bundleData?.map((bundle) => ({
    label: bundle.title,
    value: bundle.id,
  }));

  // handle Select component state
  const [selected, setSelected] = useState("");
  const handleSelectChange = useCallback((value: string) => setSelected(value), []);

  const [editPressed, setEditPressed] = useState(false);

  return (
    <Card sectioned>
      <Card.Header title="Manage bundles" />
      <Card.Section>
        <Select label="Bundle" options={options} onChange={handleSelectChange} value={selected} placeholder="Select bundle" />
        {/* Bundle info preview */}
        <div style={{ marginTop: "var(--p-space-5)" }}>
          <Button monochrome onClick={() => setEditPressed(true)} disabled={options?.length === 0 || !selected}>
            {!editPressed ? "Edit bundle" : "Edit is not yet implemented!"}
          </Button>
        </div>
      </Card.Section>
      <Card.Section>
        <Button primary url="/bundle/create">
          Create a new bundle
        </Button>
      </Card.Section>
    </Card>
  );
};

export default Home;
