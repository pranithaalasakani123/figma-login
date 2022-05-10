import React from 'react'
import './Industry.css';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



function Industry() {
    const [age, setAge] = React.useState('');
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };

    return (
        <div>
            <div className='group_Names'>
                <label><h4>Industry</h4></label>
            </div>
            <div className='form'>
            <FormControl sx={{ m: 1, minWidth: '400px' }}>
             <Select
               value={age}
               onChange={handleChange}
               displayEmpty
               inputProps={{ 'aria-label': 'Without label' }}
             >
               <MenuItem value="">
                 <em>Select</em>
               </MenuItem>
               <MenuItem value={10}>Ten</MenuItem>
               <MenuItem value={20}>Twenty</MenuItem>
               <MenuItem value={30}>Thirty</MenuItem>
             </Select>
            </FormControl>
         </div>
            
        </div>
    )
}

export default Industry