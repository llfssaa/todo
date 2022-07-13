import React from 'react';
import AddIcon from '@mui/icons-material/Add';

const Header = () => {
    return (
        <div style={{
            borderBottom:'1px solid grey',
            display:'flex',
            justifyContent:'end',
            alignItems:'center',

        }}>
            <div style={{
                margin:10,
            }}
            >Login</div>
            <div style={{
                margin:10,
            }}
            > New list</div>
        </div>
    );
};

export default Header;