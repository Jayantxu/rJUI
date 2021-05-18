const enzyme = require('enzyme');
// # https://github.com/wojtekmaj/enzyme-adapter-react-17
// # and need to upgraded react-dom! https://github.com/wojtekmaj/enzyme-adapter-react-17/issues/19
const Adapter = require('@wojtekmaj/enzyme-adapter-react-17');

enzyme.configure({ adapter: new Adapter() });