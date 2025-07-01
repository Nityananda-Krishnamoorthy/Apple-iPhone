import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import * as Sentry from "@sentry/react";


Sentry.init({
  dsn: "https://0ad3d33828ab006cc9de0f55b0055023@o4509588682768384.ingest.us.sentry.io/4509588699086848",
  sendDefaultPii: true,
  integrations: [
    Sentry.browserTracingIntegration(),
    //Sentry.metrics.metricsAggregatorIntegration(),
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect: React.useEffect,
    }),
    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],
  tracesSampleRate: 1.0, 
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  replaysSessionSampleRate: 0.1, 
  replaysOnErrorSampleRate: 1.0,
});



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


