import React from "react";
import { useAppInsightsContext, useTrackMetric } from "@microsoft/applicationinsights-react-js";

const SampleComponent = () => {
    const appInsights = useAppInsightsContext();
    const trackComponent = useTrackMetric(appInsights, "SampleComponent");

    return (
        <div>
            <button onClick={trackComponent}>Sample Component</button>
        </div>
    );
}
export default SampleComponent;