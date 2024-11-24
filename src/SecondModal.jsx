import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material"
import TercerModal from "./TercerModal"

function SecondModal({open, handleCloseClickOther, handleOpenClickThird, handleCloseClickThird, openThird}) {
  return (
    <>
    
      <Dialog open={open} onClose={handleCloseClickOther}>
        <DialogTitle>Dialog Title Other</DialogTitle>
        <DialogContent>
          
          <Typography variant="body1">Dialog Content Other</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseClickOther}>Close</Button>
          <Button onClick={handleOpenClickThird}>crear</Button>

        </DialogActions>

      </Dialog>
      
      <TercerModal
        open={openThird}
        handleCloseClick={handleCloseClickThird}
      />
    </>
    
          
  )
}
export default SecondModal