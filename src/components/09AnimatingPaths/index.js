import React, { useEffect, useState } from 'react';
import { Header } from 'StyledComponents';
import { PlayDiv, TableGrid, GridRow } from './style';
import { Provider } from 'contexts/ReactDims';
import Playground from './Playground';

const initialState=[
  { continent: "Asia", count: 3},
  { continent: "North America", count: 6},
  { continent: "Australia", count: 2},
  { continent: "Europe", count: 16},
  { continent: "South America", count: 1}
];

const BarCharts=()=>{

  const [data, setData] = useState(initialState);

  useEffect(()=>{
    let newArr = [...data];
    newArr.sort((a,b)=>{
      return a.count - b.count;
    });
    setData(newArr);
  }, []);

  const createTable=(arr)=>{
    return arr.map((d)=>{
      return (
        <GridRow key={d.continent}>
          <div>{d.continent}</div>
          <div>{d.count}</div>
        </GridRow>
      );
    });
  };

  return (
    <div>
      <Header>d3-interpolate</Header>
      <div style={{ height: "18em" }}>
        <Provider>
          <Playground data={data}/>
        </Provider>
      </div>

    </div>
  );
};

export default BarCharts;
