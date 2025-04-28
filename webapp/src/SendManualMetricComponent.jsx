import React from "react";
import { useAppInsightsContext } from "@microsoft/applicationinsights-react-js";

const SendManualMetricComponent = () => {
    const appInsights = useAppInsightsContext();

    function sendCustomMetric() {
        const metricData = {
            average: 1,
            name: "Custom message seconds",
            sampleCount: 1
        };
        const additionalProperties = { "Component Name": 'SendManualMetricComponent' };
        appInsights.trackMetric(metricData, additionalProperties);
    }

    return (
        <div>
            <button onClick={sendCustomMetric}>Send Manual Metric</button>
        </div>
    );
}
export default SendManualMetricComponent;