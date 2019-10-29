import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// class Store {
//     @observable devsList = [
//         { name: "Jack", sp: 12 },
//         { name: "Max", sp: 10 },
//         { name: "Leo", sp: 8 }
//     ];
//
//     @computed get totalSum() {
//         return 0;
//     };
//
//     @computed get topPerformer() {
//         return {
//             name: "Name"
//         }
//     }
//
//     @action clearList() {
//         this.devsList = [];
//     }
//
//     @action addDeveloper(dev) {
//         this.devsList.push(dev);
//     }
// }
//
// const store = new Store();
//
// const Row = ({ data: {name, sp}}) => {
//     return (
//         <tr>
//             <td>{name}</td>
//             <td>{sp}</td>
//         </tr>
//     )
// };
//
// @observer class Table extends Component {
//     render() {
//         const {store} = this.props;
//
//         return (
//             <table>
//                 <thead>
//                     <tr>
//                         <td>Name: </td>
//                         <td>SP: </td>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     { store.devsList.map((dev, i) => <Row key={i} data={dev} />)}
//                 </tbody>
//                 <tfoot>
//                     <tr>
//                         <td>Team SP:</td>
//                         <td>{store.totalSum}</td>
//                     </tr>
//                 <tr>
//                     <td>Top Performer: </td>
//                     <td>{store.topPerformer ? store.topPerformer.name: ''}</td>
//                 </tr>
//                 </tfoot>
//             </table>
//         )
//     }
// }
//
// class Controls extends Component {
//     addDeveloper = () => {
//         const name = prompt('The name:');
//         const sp = parseInt(prompt("The story points: "), 10);
//         this.props.store.addDeveloper({name, sp});
//     };
//
//     clearList = () => { this.props.store.clearList(); };
//
//     render() {
//         return (
//             <div className="controls">
//                 <button onClick={this.clearList}>Clear table</button>
//                 <button onClick={this.addDeveloper}>Add record</button>
//             </div>
//         )
//     }
// }
//
// class App extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Sprint Board: </h1>
//                 <Controls store={appStore} />
//                 <Table store={appStore} />
//             </div>
//         )
//     }
// }

const store = {};

const App = () => (
    <div>123</div>
);

ReactDOM.render(<App store={store}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
