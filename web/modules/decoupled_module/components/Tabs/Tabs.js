import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Characters } from "../Characters/Characters";
import { Episodes } from "../Episodes/Episodes";
import "react-tabs/style/react-tabs.css";

export const RMTabs = () => (
  <Tabs>
    <TabList>
      <Tab>Characters</Tab>
      <Tab>Episodes</Tab>
    </TabList>

    <TabPanel>
      <Characters />
    </TabPanel>
    <TabPanel>
      <Episodes />
    </TabPanel>
  </Tabs>
);
