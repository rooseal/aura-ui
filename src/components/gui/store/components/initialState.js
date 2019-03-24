import { tree } from '../../tree/tree';
import * as actions from './actions';

console.log({ actions });

export default ({ name = 'RootComponent' } = {}) => ({
  componentList: [tree(actions.createComponent(name))],
});
