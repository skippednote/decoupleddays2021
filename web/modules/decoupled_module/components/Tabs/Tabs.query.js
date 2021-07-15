import React, { lazy, Suspense } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
const Characters = lazy(() =>
  import(
    /* webpackChunkName: "CharactersQuery" */ "../Characters/Characters.query"
  )
);
const Episodes = lazy(() =>
  import(/* webpackChunkName: "EpisodesQuery" */ "../Episodes/Episodes.query")
);

const queryClient = new QueryClient();

export const RMTabs = () => (
  <QueryClientProvider client={queryClient}>
    <Tabs>
      <TabList>
        <Tab>Characters</Tab>
        <Tab>Episodes</Tab>
      </TabList>

      <TabPanel>
        <Suspense fallback="loading...">
          <Characters />
        </Suspense>
      </TabPanel>
      <TabPanel>
        <Suspense fallback="loading...">
          <Episodes />
        </Suspense>
      </TabPanel>
    </Tabs>
    {process.env.NODE_ENV === "development" && (
      <ReactQueryDevtools initialIsOpen={false} />
    )}
  </QueryClientProvider>
);
