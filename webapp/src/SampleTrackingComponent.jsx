import React from "react";
import { SeverityLevel } from '@microsoft/applicationinsights-web';
import { useAppInsightsContext } from "@microsoft/applicationinsights-react-js";

const SampleTrackingComponent = () => {
    const appInsights = useAppInsightsContext();

    function trackException() {
        appInsights.trackException({ error: new Error('some error'), severityLevel: SeverityLevel.Error });
    }

    function trackTrace() {
        appInsights.trackTrace({ message: 'some trace', severityLevel: SeverityLevel.Information });
    }

    return (
        <div>
            <h3>Tracking</h3>
            <button onClick={trackException}>Track exception</button>
            <button onClick={trackTrace}>Track custom trace</button>
        </div>
    );
}
export default SampleTrackingComponent;