import React from 'react';
import {MoreVert} from '@material-ui/icon';
import {Menu, MenuItem} from '@material-ui/core'

const ActionOptions = (props) => {
  const [ actionPoint, setActionPoint] = React.useState(null);

  const handleClick = (event) => {
    setActionPoint(event.currentTarget)
  }

  const handleClose = () => {
    setActionPoint(null);
  }

  const handleDelete = () => {
    handleClose();
    props.deleteMake(props.index);
  }

  return (
    <div>
      <MoreVert>
        <Menu id="actionPointMenu" actionPoint={actionPoint} keepMounted open={Boolean(actionPoint)} onClose={handleClose}>
          <MenuItem onClick={handleDelete}>Delete</MenuItem>
        </Menu>
      </MoreVert>    
    </div>
  )

}

export default ActionOptions