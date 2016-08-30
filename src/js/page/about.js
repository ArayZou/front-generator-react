//为了支持html热更新必须引入这段，生产环境不会引入
if (process.env.NODE_ENV !== 'prod') {
  	require('../../html/about.html');
}
//引入css
import '../../less/common/reset.less';
import '../../less/common/preset.less';
import '../../less/page/about.less';

import React from 'react';
import ReactDOM from 'react-dom';

var Timer = React.createClass({
	getInitialState: function() {
		return {secondsElapsed: 0};
	},
	tick: function() {
		this.setState({secondsElapsed: this.state.secondsElapsed + 1});
	},
	componentDidMount: function() {
		this.interval = setInterval(this.tick, 1000);
	},
	componentWillUnmount: function() {
		clearInterval(this.interval);
	},
	render: function() {
		return (
			<div>Seconds Elapsed about: {this.state.secondsElapsed}</div>
		);
	}
});

ReactDOM.render(<Timer />, document.getElementById('app'));