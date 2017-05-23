var React = require('react');
var {Link} = require('react-router');

var Example = (props) => {
    return (
        <div>
            <h1 className="text-center">Example</h1>
            <p>Here are some examples that you can follow up with</p>
            <ol>
                <li>
                    <Link to="/?location=HoChiMinh">Ho Chi Minh, Vietnam</Link>
                </li>
                <li>
                    <Link to="/?location=HaNoi">Ha Noi, Vietnam</Link>
                </li>
            </ol>
        </div>
    );
};

module.exports = Example
