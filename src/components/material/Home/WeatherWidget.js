import React, { useEffect, Component, PureComponent } from 'react';


// export default function WeatherWidget(props) {
//     return (
//         <div className={props.className || ""}>
//             <a className="weatherwidget-io" href="https://forecast7.com/es/n26d81n65d22/san-miguel-de-tucuman/" data-label_1="SAN MIGUEL DE TUCUMÁN" data-label_2="CLIMA" data-theme="original" >SAN MIGUEL DE TUCUMÁN</a>
//             <script>
//                 {!function (d, s, id) {
//                     var js, fjs = d.getElementsByTagName(s)[0];
//                     // if (!d.getElementById(id)) {
//                     js = d.createElement(s);
//                     js.id = id;
//                     js.src = 'https://weatherwidget.io/js/widget.min.js';
//                     fjs.parentNode.insertBefore(js, fjs);
//                     // }
//                 }(document, 'script', 'weatherwidget-io-js')}
//             </script>
//         </div>
//     )
// }


export default class WeatherWidget extends PureComponent {

    render() {
        return (
            <div className={this.props.className || ""}>
            <a className="weatherwidget-io" href="https://forecast7.com/es/n26d81n65d22/san-miguel-de-tucuman/" data-label_1="SAN MIGUEL DE TUCUMÁN" data-label_2="CLIMA" data-theme="original" >SAN MIGUEL DE TUCUMÁN</a>
            <script>
                {!function (d, s, id) {
                    var js, fjs = d.getElementsByTagName(s)[0];
                    // if (!d.getElementById(id)) {
                    js = d.createElement(s);
                    js.id = id;
                    js.src = 'https://weatherwidget.io/js/widget.min.js';
                    fjs.parentNode.insertBefore(js, fjs);
                    // }
                }(document, 'script', 'weatherwidget-io-js')}
            </script>
        </div>
        )
    }
};




// export function WeatherWidgetSalta(props) {

//     return (
//         <div className={props.className || ""}>
//             <a className="weatherwidget-io" href="https://forecast7.com/es/n24d78n65d42/salta/" data-label_1="SALTA" data-label_2="CAPITAL" data-theme="original" >SALTA CAPITAL</a>
//             {/* <script> */}
//             {!function (d, s, id) {
//                 var js, fjs = d.getElementsByTagName(s)[0];
//                 // if (!d.getElementById(id)) {
//                     js = d.createElement(s);
//                     js.id = id;
//                     js.src = 'https://weatherwidget.io/js/widget.min.js';
//                     fjs.parentNode.insertBefore(js, fjs);
//                 // }
//             }
//                 (document, 'script', 'weatherwidget-io-js')
//             }
//             {/* </script> */}
//         </div>
//     )
// }

export class WeatherWidgetSalta extends PureComponent {

    render() {
        return (
            <div className={this.props.className || ""}>
                <a className="weatherwidget-io" href="https:forecast7.com/es/n24d78n65d42/salta/" data-label_1="SALTA" data-label_2="CAPITAL" data-theme="original" >SALTA CAPITAL</a>

                {!function (d, s, id) {
                    var js, fjs = d.getElementsByTagName(s)[0];
                    // if (!d.getElementById(id)) {
                        js = d.createElement(s);
                        js.id = id;
                        js.src = 'https:weatherwidget.io/js/widget.min.js';
                        fjs.parentNode.insertBefore(js, fjs);
                    // }
                }
                    (document, 'script', 'weatherwidget-io-js')
                }

            </div>
        )
    }
};

