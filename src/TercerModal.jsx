import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material"

function TercerModal({open, handleCloseClick}) {
  return (
    <Dialog open={open} onClose={handleCloseClick}>
      <DialogTitle>Dialog Title Other</DialogTitle>
      <DialogContent>
        <Typography variant="body1">Dialog Content Other el tercerco</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseClick}>Close</Button>
      </DialogActions>
    </Dialog>
  )
}
export default TercerModal