import React from 'react';
import AddIcon from '@mui/icons-material/Add';

const Header = () => {
    return (
        <div style={{
            height:'40px',
            display:'flex',
            justifyContent:'end',
            alignItems:'center',
            padding:15,
            paddingBottom:5,
            backgroundColor:'#1976D9',
            boxShadow:'15px 0 15px grey',
            color:'whitesmoke'

        }}>
          My first ToDo...
        </div>
    );
};

export default Header;