import React from 'react';
import ReactMapGL from 'react-map-gl';
import { Marker, FullscreenControl, NavigationControl, Popup } from 'react-map-gl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icon from '@fortawesome/free-solid-svg-icons';
import { Button, Card, CardHeader, Avatar } from '@material-ui/core';

const card = {
  maxWidth: 200,
  maxHeight:200,
  padding:2
}

const popup={
  padding:0
}

const title={
  fontSize:14,
  padding:0
}

const fullscreenControlStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
};

const navStyle = {
  position: 'absolute',
  top: 36,
  left: 0,
  padding: '10px'
};



const PopupCard = (props) => {
  const { CLIENTE, EVENTO, LATITUD, LONGITUD } = props.data;


  return (
    <Card style={card}>
      <CardHeader avatar={
        <Avatar alt="Logo ALB" src={require('../../images/logoalb.png')}/>
      }
        title={CLIENTE}
        subheader={EVENTO}
        style={title}
      />
    </Card>
  );
}



class Map extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: '100%',
        height: '100%',
        latitude: -26.823288,
        longitude: -65.210976,
        zoom: 16,
        mapboxApiAccessToken: 'pk.eyJ1IjoiZ29kaWF6ODkiLCJhIjoiY2p0ZGtmbzMyMTgwdjQ0bzllZTR2bm9xcCJ9.gZhCt7u7BtIc7QmL0yPr1g',
      },
      mapStyle: 'mapbox://styles/godiaz89/cjwuz6a7c3knv1cpc2e4ckixf',
      //mapStyle: require('../../constants/mapstyleALB/style.json'),
      dataMarkers: [],
      openPopup: false,
      dataPopup: []
    };
  }

  
  openPopup = (n) => {
    console.log('Abriendo popup con: ', n.CLIENTE, n.EVENTO);
    this.setState({ dataPopup: n, openPopup: true });
  }

  render() {
    // console.log('MARCADORES EN RENDER:',this.props.data);
    // console.log(this.props.data.LATITUD,this.props.data.LATITUD);

    return (
      <ReactMapGL
        {...this.state.viewport}
        mapStyle={this.state.mapStyle}
        onViewportChange={(viewport) => this.setState({ viewport })}>
        <div className="fullscreen" style={fullscreenControlStyle}>
          <FullscreenControl />
        </div>
        <div className="nav" style={navStyle}>
          <NavigationControl />
        </div>
        {
          this.props.data !== undefined ?
            this.props.data.map((n, index) =>
              // <Button action={() => this.setState({ dataPopup: n, openPopup: true })}>
              <Marker latitude={n.LATITUD} longitude={n.LONGITUD}>
                <div className="icono">
                  <Button onClick={() => this.setState({ dataPopup: n, openPopup: true })}>
                    {n.EVENTO == 'F220' ? <FontAwesomeIcon icon={Icon.faMapMarkerAlt} color='red' size='lg'></FontAwesomeIcon>
                      :
                      <FontAwesomeIcon icon={Icon.faMapMarkerAlt} color='blue' size='lg' ></FontAwesomeIcon>
                    }
                  </Button>
                </div>
              </Marker>
              // </Button>

            ) :
            <div className="div"></div>
        }
        {this.state.openPopup === true && (
          <Popup
            tipSize={5}
            anchor="top"
            longitude={this.state.dataPopup.LONGITUD}
            latitude={this.state.dataPopup.LATITUD}
            onClose={() => this.setState({ dataPopup: null, openPopup: false })}
            style={popup}
            closeOnClick={true}
          >
            <PopupCard data={this.state.dataPopup} />
          </Popup>
        )}
      </ReactMapGL>
    );
  }
}

export default Map;