import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

function MyTabs() {
  return (
    <Tabs>
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
      </TabList>

      <TabPanel>
        <p>Content for tab 1</p>
      </TabPanel>
      <TabPanel>
        <p>Content for tab 2</p>
      </TabPanel>
    </Tabs>
  );
}
