import React from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { MdFormatAlignLeft } from "react-icons/md";
import { MdFormatAlignCenter } from "react-icons/md";
import { MdFormatAlignRight } from "react-icons/md";
import { MdFormatAlignJustify } from "react-icons/md";


const component2 = () => {

  const [alignment, setAlignment] = React.useState('left')

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div>
      <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="left" aria-label="left aligned">
        <MdFormatAlignLeft />
      </ToggleButton>
      <ToggleButton value="center" aria-label="centered">
        <MdFormatAlignCenter />
      </ToggleButton>
      <ToggleButton value="right" aria-label="right aligned">
        <MdFormatAlignRight />
      </ToggleButton>
      <ToggleButton value="justify" aria-label="justified">
        <MdFormatAlignJustify />
      </ToggleButton>
    </ToggleButtonGroup>
    </div>
  )
}

export default component2