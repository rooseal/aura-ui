import initialComponentList from './components/initialState';

export default name => ({
  components: {
    ...initialComponentList({ name }),
  },
});
