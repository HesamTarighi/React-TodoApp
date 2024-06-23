import { Box, ThemeProvider, CssBaseline, Button } from '@mui/material'
import { appTheme } from './assets/material'
import './assets/css/app.css'

function App() {
  return (
    <ThemeProvider theme={ appTheme }>
      <CssBaseline enableColorScheme />
      <>
        <main style={{ background: appTheme.palette.background.main }}>
          <Box
            height={ 200 }
            width={ 500 }
            p={ 2 }
            sx={{ background: appTheme.palette.common.main, borderRadius: 3, color: appTheme.palette.text.primary }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span> Todo, 23 April </span>
              <Button color='primary' variant='contained' onClick={handleOpen}>
                New Task
              </Button>
            </div>
            <div style={{ color: appTheme.palette.text.secondary }}>
              Hello
            </div>
          </Box>
        </main>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </>
    </ThemeProvider>
  )
}

export default App
