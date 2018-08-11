// Base style for the animated label
const label = {
  color: '#666',
  position: 'absolute',
  transition: 'font-size 0.5s, top 0.5s, left 0.5s'
}

// Base style for the animated top bar
const animBar = {
  backgroundColor: 'teal',
  height: '5px',
  position: 'absolute',
  transition: 'width 0.5s',
  zIndex: '2'
}

export default {
  container: {
    position: 'relative'
  },
  input: {
    boxSizing: 'border-box',
    display: 'block',
    lineHeight: '1',
    marginBottom: '0.7em',
    padding: '0.35em 0.7em',
    width: '100%',
    border: '1px solid teal',
    outline: '0',
    '&:focus': {
      boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
    }
  },
  labelBlurred: {
    ...label,
    left: '0.7em',
    top: '0.35em'
  },
  labelFocused: {
    ...label,
    fontSize: '0',
    left: '0',
    top: '0'
  },
  animBarBlurred: {
    ...animBar,
    width: '0'
  },
  animBarFocused: {
    ...animBar,
    width: '100%'
  }
}
