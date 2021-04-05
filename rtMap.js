import React from "react";
import {
  AzureMap,
  AzureMapDataSourceProvider,
  AzureMapFeature,
  AzureMapLayerProvider,
  AzureMapsProvider,
  IAzureMapOptions,
} from "react-azure-maps";
import { AuthenticationType } from "azure-maps-control";

import Typography from "@material-ui/core/Typography";

function mouseOverLineString(e: any) {
  console.log("lineString moved", e);
}

const points = [
  [0.190346, 51.3893],
  [0.19504, 51.39097],
  [0.197504, 51.3938],
  [0.236388, 51.4238],
  [0.245648, 51.42725],
  [0.263754, 51.42828],
  [0.263754, 51.42828],
  [0.433861, 51.39994],
  [0.469631, 51.38283],
  [0.427002, 51.30861],
];

const option: IAzureMapOptions = {
  authOptions: {
    authType: AuthenticationType.subscriptionKey,
    subscriptionKey: "5B6mPn0UukGyweTuShFj6tunbxcQ6CBJfBvvPbpKXXs",
  },
  center: [0.190501, 51.38441],
  zoom: 10,
  view: "Auto",
};

const RouteExample: React.FC = () => {
  return (
    <div style={wrapperStyles.map}>
      <AzureMapsProvider>
        <div style={wrapperStyles.map}>
          <AzureMap options={option}>
            <AzureMapDataSourceProvider
              events={{
                dataadded: (e: any) => {
                  console.log("Data on source added", e);
                },
              }}
              id={"routeExample AzureMapDataSourceProvider"}
              options={{
                // This sample shows how to apply a stroke gradient to a line on the map.\
                // In order to apply this feature to a line, the data source must have the lineMetrics option set to true.
                lineMetrics: true,
              }}
            >
              <AzureMapLayerProvider
                id={"routeExample AzureMapLayerProvider"}
                options={{
                  strokeWidth: 5,
                  strokeGradient: [
                    "interpolate",
                    ["linear"],
                    ["line-progress"],
                    0,
                    "blue",
                  ],
                }}
                events={{
                  mouseenter: mouseOverLineString,
                }}
                lifecycleEvents={{
                  layeradded: (e: any) => {
                    console.log("LAYER ADDED TO MAP", e);
                  },
                }}
                type={"LineLayer"}
              />
              <AzureMapFeature
                key={"Line String Feature"}
                id={"Line Strign ID"}
                type={"LineString"}
                coordinates={points}
              />
            </AzureMapDataSourceProvider>
          </AzureMap>
        </div>
      </AzureMapsProvider>
    </div>
  );
};

export const wrapperStyles = {
  map: {
    height: "900px",
    width: "900px",
    margin: "200px",
  },
};

function rtMap() {
  return <RouteExample></RouteExample>;
}

export default rtMap;
