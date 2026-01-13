import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

export default function TabComponent({ product }) {
  return (
    <TabGroup className="mt-8">
      <TabList className="flex gap-4 border-b items-center justify-center">
        <Tab
          className={({ selected }) =>
            `px-4 py-2 text-sm font-medium ${
              selected ? "font-bold" : "font-noormal"
            }`
          }
        >
          <p>Description</p>
        </Tab>

        <Tab
          className={({ selected }) =>
            `px-4 py-2 text-sm font-medium ${
              selected ? "font-bold" : "font-noormal"
            }`
          }
        >
          <p>Additional Information</p>
        </Tab>

        <Tab
          className={({ selected }) =>
            `px-4 py-2 text-sm font-medium ${
              selected ? "font-bold" : "font-noormal"
            }`
          }
        >
          <p>
            Reviews <span className="text-dark-teal">({product.reviews})</span>
          </p>
        </Tab>
      </TabList>

      <TabPanels className="my-8">
        <TabPanel>
          <p>{product.description}</p>
        </TabPanel>

        <TabPanel>
          <p>Additional Information</p>
        </TabPanel>

        <TabPanel>
          <p>Reviews Content</p>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
}
