import React from "react";

const styles = {
    mapMargin: {
      marginTop: '100px',
      marginLeft: '2%',
      position: 'relative',
      height: '200px',
      width: '350px'
    },
    mapInside: {
      overflow: 'hidden',
      background: 'none !important',
      height: '200px',
      width: '350px'
    }
}

const MyMap = () => {
  return (
    <div style={styles.mapMargin}>
      <div style={styles.mapInside}>
        <iframe
          width='350'
          height='200'
          id='mapInside'
          src='https://maps.google.com/maps?q=The%20Princess%20of%20Arena%20Cam%20Ranh&t=&z=13&ie=UTF8&iwloc=&output=embed'
          frameborder='0'
          scrolling='no'
          marginheight='0'
          marginwidth='0'
        />
      </div>
    </div>
  );
};

export default MyMap;