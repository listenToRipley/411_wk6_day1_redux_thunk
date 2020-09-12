import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert'

const ActionOptions = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const options = ['Delete']

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  const handleDelete = () => {
    handleClose();
    props.deleteMake(props.index);
  }

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
      >
      <MoreVertIcon onClick={handleClick}/>
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
          <MenuItem key={options} selected={options === 'Delete'} onClick={handleDelete}>Delete</MenuItem>
        </Menu>
    
    </div>
  )

}

export default ActionOptions