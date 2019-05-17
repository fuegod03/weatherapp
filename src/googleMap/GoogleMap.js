import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div ><img style={{height:"40px"}}  src="https://image.flaticon.com/icons/svg/1465/1465405.svg" alt="Pointer"/></div>;
const handleApiLoaded = (map, maps) => {
  // use map and maps objects
};
class SimpleMap extends Component {

  static defaultProps = {
    center: {
      lat: 40.6462668,
      lng: -74.2586487
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:"AIzaSyACJaD84u2ynHqmHBGN3zrqaj1jbTicNRg"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
          layerTypes={['FusionTablesLayer', 'TransitLayer']}

  heatmapLibrary={true}
        >
          <AnyReactComponent
            lat={40.6462668}
            lng={-74.2586487}
            text
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
