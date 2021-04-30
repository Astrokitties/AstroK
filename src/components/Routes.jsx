import React from 'react'
import {
  Switch,
  Route,
} from 'react-router-dom';
import { Dashboard } from './Dashboard'
import { Releases } from './Releases';
import { ArticlePage } from './ArticlePage';
import { ComingSoonPage } from './ComingSoonPage';

export function Routes() {
  return (
    <>
      <Switch>
        <Route path="/eclipse-token-contract-initiated/">
          <ArticlePage
            title="PRESALE LIVE ON DXSALES"
            date="Posted on april 30, 2021"
            paragraph={[
              "The presale of ECLIPSE (ECP) token just went live on dxsales with a hardcap of 400 BNB and a softcap of 100 BNB. LP",
              "Locked and we (the devs) only hold 1% and 4% locked for 6 months. Check it out –",
              "https://dxsale.app/app/pages/defipresale?saleID=947&chain=BSC",
            ]}
          />
        </Route>
        <Route path="/soon/">
          <ArticlePage
              title="Astrokitties is coming soon..."
              date="Posted on February 27, 2021"
              paragraph={[
                "Today we initiated the development of the unique Astrokitties Token Contract. A carefully planned out process of an experienced team of Crypto-developers.",
              ]}
            />
        </Route>
        <Route path="/press-releases/">
          <Releases />
        </Route>
        <Route path="/contests/">
          <ComingSoonPage />
        </Route>
        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
      </>
  )
}
