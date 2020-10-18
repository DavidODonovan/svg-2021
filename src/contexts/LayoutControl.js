import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const MediaQuery = React.createContext(null);

export const LayoutProvider = (props)=>{
  const domNode = useRef(null);
  const [dimensions, setDimensions] = useState({});
  const [timeoutID, newTimeoutID] = useState(null);
  const [wideFormat, setWideFormat] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false)
  const [layoutObj, setLayoutObj] = useState({});

  useEffect(()=>{
    setDimensions(domNode.current.getBoundingClientRect());
  },[]);

  useEffect(()=>{
    window.addEventListener('resize', getNodeDimensions);
    return ()=>{ window.removeEventListener('resize', getNodeDimensions)};
  }, []);

  const getNodeDimensions = ()=>{
    clearTimeout(timeoutID);
    newTimeoutID(setTimeout(()=>{
        setDimensions(domNode.current.getBoundingClientRect());
      }, props.debounce)
    );
  };

  useEffect(()=>{
    if(dimensions.width!==undefined && dimensions.width>780){
      setWideFormat(true);
    } else {
      setWideFormat(false);
    };
  }, [dimensions.width]);

  useEffect(()=>{
    if(wideFormat && menuOpen)
      return;
    if(wideFormat && !menuOpen)
      setMenuOpen(true);
    if(!wideFormat && menuOpen)
      setMenuOpen(false);
  }, [wideFormat]);

  const toggleMenu=()=>{
    if(!wideFormat)
      setMenuOpen(false);
  };

  useEffect(()=>{
    setLayoutObj({
      dimensions: dimensions,
      menuOpen: menuOpen,
      setMenuOpen: setMenuOpen,
      toggleMenu: toggleMenu,
      wideFormat: wideFormat
    });
  },[dimensions, wideFormat, menuOpen])

  return (
    <div ref={domNode} style={{height: '100%'}}>
      <MediaQuery.Provider value={layoutObj}>
        {props.children}
      </MediaQuery.Provider>
    </div>
  )
};

LayoutProvider.propTypes = {
  debounce: PropTypes.number
}

LayoutProvider.defaultProps = {
  debounce: 100
}

export const withLayoutContext=(ChildComponent)=>{
  return (props)=>(
        <MediaQuery.Consumer>
          {(incomingLayoutObj)=>(<ChildComponent {...props} layoutContext={incomingLayoutObj} />)}
        </MediaQuery.Consumer>
  )
};
