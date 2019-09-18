import React from 'react';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import BarChart from 'recharts/lib/chart/BarChart';
import Bar from 'recharts/lib/cartesian/Bar';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';
import Legend from 'recharts/lib/component/Legend';

const datos = [
    {
      "NOMBRE": "Cargando",
      "tratados": 0,
      "cerrados": 0
    }
  ];

class EventosxOpBarChart extends React.Component {
  
  render(){
    return (
        // 99% per https://github.com/recharts/recharts/issues/172
        <ResponsiveContainer width="99%" height={320}>
            <BarChart data={this.props.data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="NOMBRE" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="tratamientos" fill="#388E3C" />
                <Bar dataKey="cierres" fill="#8E24AA" />
            </BarChart>
        </ResponsiveContainer>
      );
  }

}

export default EventosxOpBarChart;

    
                              