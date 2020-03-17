import React, { PureComponent } from "react";
import { GeolocatedProps, geolocated } from "react-geolocated";

class GeoTracer extends PureComponent<GeolocatedProps>{
    public render(): JSX.Element {
        const { coords } = this.props;
        return (
            <div>
                latitude: {coords && coords.latitude}<br/>
                longitude: {coords && coords.longitude}
            </div>
        );
    }
}

export default geolocated()(GeoTracer);