import {ApplicationInsights} from '@microsoft/applicationinsights-web';
import {ReactPlugin} from '@microsoft/applicationinsights-react-js';
import { createBrowserHistory } from "history";

const browserHistory = createBrowserHistory({ basename: '' });

const reactPlugin = new ReactPlugin();
const appInsights = new ApplicationInsights({
  config: {
    // Pass the instrumentation key with your CI/CD pipeline when packaging the project
    connectionString: "instrumentationKey=<YOUR_INSTRUMENTATION_KEY_HERE>",
    extensions: [reactPlugin],
    enableAutoRouteTracking: true,
    disableAjaxTracking: false,
    autoTrackPageVisitTime: true,
    enableCorsCorrelation: true,
    enableRequestHeaderTracking: true,
    enableResponseHeaderTracking: true,
    extensionConfig: {
      [reactPlugin.identifier]: { history: browserHistory },
    }
  }
});
appInsights.loadAppInsights();

appInsights.addTelemetryInitializer((env) => {
    env.tags = env.tags || {};
    env.tags["ai.cloud.role"] = "local-ai.cloud.role";
    //custom props
    env.data = env.data || {};
    env.data["ms-appName"] = "local-appname";
    env.data["ms-user"] = "local-user";
    env.data["ms-userid"] = "local-userid";
});

export { reactPlugin, appInsights };