import styled from 'styled-components';
import { Button, AnchorButton } from './buttons';
import { Anchor, ButtonAnchor } from './anchors';
import { Menu } from './menu';
import { Select } from './select';
import Text from './Text';
import Panel from './gui/panel/Panel';

const panel = '';
const setPanel = () => {};
// Sample comps for gui

const introtext =
  'Borealis is a visual tool for building React applications with minimal knowledge of javascript. It heavily uses drag-and-drop (at least in the future ;)) for inituitive interactions. You can add custom functionality and state right in the GUI.';

const column1 = `Sed suscipit elit id augue rhoncus, quis sagittis mi mattis. Etiam ultricies metus ac felis elementum, sit amet porta nisl luctus. Praesent accumsan, neque quis vestibulum sodales, orci quam consequat metus, et ullamcorper augue neque at dui. Integer nec elementum sapien, iaculis eleifend arcu. Sed tempor, justo nec condimentum tempus, quam magna facilisis ligula, a tristique arcu ipsum in magna. Vestibulum sed metus aliquam, mattis ante pulvinar, pretium odio. Praesent sit amet odio nec augue iaculis auctor. Nulla eget viverra leo. Sed porttitor viverra arcu.

Nunc a risus eget tellus tristique pharetra. Nam at suscipit erat, quis interdum est. Phasellus varius rhoncus dolor, quis maximus lectus posuere ut. Praesent efficitur ipsum mi, varius bibendum quam tempus ac. Quisque nulla elit, sodales finibus tincidunt non, varius in mi. Curabitur sed nibh posuere, accumsan nibh eu, varius magna. Aenean non vehicula ante. Proin non massa vitae nisi porttitor suscipit. Sed sed molestie lacus, gravida elementum lacus. Aenean purus est, bibendum a elementum at, pretium sit amet urna. Duis tempus ac mauris non accumsan. Mauris in odio sed velit fermentum gravida sit amet vitae nulla. Sed in arcu vitae magna semper hendrerit a quis lacus. Nulla nunc leo, luctus vitae eleifend ac, malesuada sed dolor. In sit amet ex vitae nisl volutpat tincidunt id eget dui.

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras vitae eros eu ante tincidunt lobortis. Sed vel nisl at sem bibendum iaculis ac at tortor. Cras dolor dolor, sagittis eget lectus vel, aliquet tincidunt sem. Suspendisse nibh quam, varius et tristique quis, imperdiet non nisi. Quisque purus tellus, dapibus in diam nec, tempor pulvinar lorem. Curabitur commodo sapien sed semper dapibus. Sed vel nulla a leo convallis maximus. Sed nisl nibh, posuere sit amet quam at, vulputate sollicitudin sapien. Mauris commodo dui vel magna consectetur malesuada. Morbi eget nisl libero. Donec pretium a tellus sit amet ornare. Integer lobortis semper enim.`;

const column2 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum purus ac sapien accumsan malesuada. Aliquam semper quam eu vestibulum pretium. Vestibulum consectetur nunc augue, et porta quam lobortis quis. Vestibulum nunc erat, sollicitudin at tellus ullamcorper, semper pretium leo. Sed non mauris id dui luctus porta. Cras ultricies mi et risus tempus, et semper nulla bibendum. Nulla facilisi. Nulla facilisi. Etiam quis porta libero, sed volutpat enim. In sed pretium elit. Cras iaculis enim ut tortor volutpat, nec dapibus sem pretium. Sed in elit ligula. Proin vel feugiat orci. Phasellus mollis quam nec consectetur tempor.`;

const Page = styled.div`
  background-color: white;
  padding: 20px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6);
  max-width: 900px;
  margin: 10px auto;
`;

const Title = styled(x => <h1 {...x}>Borealis Demo</h1>)`
  color: dodgerblue;
  font-size: 3em;
  text-align: center;
  margin: 40px;
`;

const TitleSecond = styled(x => <h1 {...x}>Aurora unleashed</h1>)`
  color: dodgerblue;
  font-size: 3em;
  margin-top: 40px;
`;

const Subtitle = styled(x => <h2 {...x}>Build flows even faster</h2>)`
  color: #aaa;
  font-size: 1.5em;
`;

const Intro = styled(x => <p {...x}>{introtext}</p>)`
  color: #333;
  margin: 20px 50px;
  font-style: italic;
`;

const Column1 = styled(x => (
  <div>
    <p {...x}>{column1}</p>
  </div>
))`
  color: #333;
  margin: 20px 50px;
`;

const Column2 = styled(x => (
  <div>
    <p {...x}>{column2}</p>
  </div>
))`
  color: #333;
  margin: 20px 50px;
`;

const PanelSelector = props => <Select {...props} />;
PanelSelector.preview = {
  value: 'panel',
  onChange: 'setPanel',
  list: [1, 2, 3],
};

const PanelDisplay = props => <p>{'{panel}'}</p>;

const Header = props => (
  <div
    style={{
      backgroundImage:
        'url(http://www.enriquepacheco.com/wp-content/uploads/2012/01/Aurora-10.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      height: '300px',
      margin: '-20px',
    }}
  />
);

const ColumnList = styled(x => (
  <div style={{ margin: '80px 0' }}>
    <ul>
      <li>Fusce non augue in enim egestas sollicitudin non ac augue.</li>
      <li>Curabitur a felis at augue semper consequat.</li>
      <li>Cras eget elit ac quam varius porttitor.</li>
      <li>Curabitur commodo nisi eu maximus rutrum.</li>
      <li>Sed euismod dolor eleifend dignissim sodales.</li>
      <li>Quisque maximus elit non ligula accumsan suscipit.</li>
      <li>Mauris fermentum libero tempus neque porta pellentesque.</li>
      <li>Nulla molestie risus nec turpis pellentesque iaculis.</li>
    </ul>
  </div>
))`
  color: #333;
`;

const GradientDiv = styled.div`
  background-image: linear-gradient(to bottom, #ce9ffc, #7367f0);
  margin: -20px -20px -20px 0;
  flex: 0.5 !important;
`;

const Flex = styled.div`
  display: flex;
  min-height: 100px;

  border: ${({ children }) => {
    console.log({ childrenInFlex: children });
    return children === null || children === undefined || children.length === 0
      ? '1px dashed pink'
      : '0';
  }};

  & > div {
    flex: 1;
    padding: 20px;
  }
`;

// Sample comps for gui

export {
  Button,
  AnchorButton,
  Anchor,
  ButtonAnchor,
  Menu,
  Select,
  Page,
  Title,
  Intro,
  Flex,
  ColumnList,
  Column1,
  Column2,
  Header,
  Text,
  GradientDiv,
  TitleSecond,
  Subtitle,
  PanelSelector,
  PanelDisplay,
};
