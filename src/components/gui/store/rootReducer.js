import componentsReducer from './components/reducer';

export default (state, action) => ({
  components: componentsReducer(state.components, action),
});
