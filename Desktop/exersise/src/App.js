import React, {Component} from 'react';
import './App.css';
// import Teacher from "./Teacher/Teacher";
import Person from './Person/Person';
//import BackgroundPhoto from './BackgroundPhoto/BackgroundPhoto';
import {Button, ButtonToolbar} from 'react-bootstrap'

class App extends Component {
    state = {
        persons:
            [
                {id: '1as3dasde3434', name: 'Max', age: 131},
                {id: '23sasasf43334', name: 'Ferry', age: 51},
                {id: '234sdasdasd34', name: 'Gholam Ali', age: 91}
            ],
        teacher: {title: "Dr."},
        showPersons: false
    };

    deletepersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
        console.log('sossis bandari were clicked');
    };

    nameChangedHandler = (event, id) => {

        const personindex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {...this.state.persons[personindex]};

        person.name = event.target.value;
        person.age = 31;
        const persons = [...this.state.persons];

        persons[personindex] = person;
        this.setState({persons: persons});
    };

    // ---------------------------// ostaad version //-------------------------------//
    //
    // nameChangedHandler = ( event, id ) => {
    //     const personIndex = this.state.persons.findIndex(p => {
    //         return p.id === id;
    //     });
    //
    //     const person = {
    //         ...this.state.persons[personIndex]
    //     };
    //     // const person = Object.assign({}, this.state.persons[personIndex]);
    //
    //     person.name = event.target.value;
    //
    //     const persons = [...this.state.persons];
    //     persons[personIndex] = person;
    //
    //     this.setState( {persons: persons} );
    // };
    // ---------------------------// ostaad version //-------------------------------//

    togglePersonsHandler = () => {
        console.log("fesharbede too!");
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    };

    render() {
        // let styles2 = {
        //     margin: '10px',
        //     backgroundColor: 'gray',
        //     display: 'inline-block',
        // };
        let persons = null;
        if (this.state.showPersons) {

            persons = (
                <div>
                    {
                        this.state.persons.map((person, index) => {
                            return (<Person
                                    // changed={this.nameChangedHandler()}
                                    click={() => this.deletepersonHandler(index)}
                                    name={person.name}
                                    age={person.age}
                                    key={person.id}
                                    changed={(event) => this.nameChangedHandler(event, person.id)}
                                    // click={this.onSwitchHandler.bind(this, 'hala mah shodam')}
                                />
                            )
                        })
                    }
                </div>

            );
        }
        return (

            <div className={"App"}>
                <div className={"bg"}>
                    <div className="bg">
                        <div className="person">{persons}</div>
                        <h3>My Udemy Exersice </h3>
                        <ButtonToolbar>
                            <Button bsStyle="primary" bsSize="large" active onClick={this.togglePersonsHandler}>
                                Toggle Persons
                            </Button>
                        </ButtonToolbar>
                        <p>Fusce ut placerat eros. Aliquam consequat in augue sed convallis. Donec orci urna, tincidunt
                            vel dui at, elementum semper dolor. Donec tincidunt risus sed magna dictum, quis luctus
                            metus volutpat. Donec accumsan et nunc vulputate accumsan. Vestibulum tempor, erat in mattis
                            fringilla, elit urna ornare nunc, vel pretium elit sem quis orci. Vivamus condimentum dictum
                            tempor. Nam at est ante. Sed lobortis et lorem in sagittis. In suscipit in est et
                            vehicula.</p>
                    </div>
                </div>
            </div>
        );
    };
}

export default App;
