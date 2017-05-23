var React = require('react');

//Stateless Functional Component
var About = (props) => {
    return (
        <div>
            <h1 className="text-center">About</h1>
            <p>My litte React Weather app that I made during studying ReactJS</p>
            <p>References</p>
            <ol>
                <li>
                    <a href="https://facebook.github.io/react/" target="blank">
                        React JS - A javascript library for building user interface
                    </a>
                </li>
                <li>
                    <a href="http://openweathermap.org/" target="blank">
                        OpenWeatherMap - Current weather and forecasts in your city
                    </a>
                </li>
            </ol>
        </div>
    );
};

module.exports = About
