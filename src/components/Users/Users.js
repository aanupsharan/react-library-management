import React, {Component} from 'react';
import {Table, Button} from 'react-bootstrap';
import {actionCreators} from '../../actions/index';
import { connect } from 'react-redux';

class Users extends Component {
    constructor(props) {
        super(props);
    }

    removeRecord(id) {
        this.props.deleteUser(id);
    }

    addRecord() {
        let name = document.getElementById("name");
        this.props.addUser(name.value);
        name.value="";
    }

    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        return (
            <div>
                <Table striped bordered condensed hover>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {

                        this.props.user.data.map((res, key) =>
                            <tr key={key}>
                                <td>{res.id}</td>
                                <td id="name_input">{res.name}</td>
                                <td><Button bsStyle="danger" onClick={() => this.removeRecord(res.id)}>Delete
                                    row</Button></td>
                            </tr>
                        )
                        }
                    </tbody>
                </Table>
                <input type="text" id="name"/>
                <Button onClick={() => this.addRecord()}>Add Record</Button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => dispatch(actionCreators.getUsers()),
        addUser: (name) => dispatch(actionCreators.addUsers(name)),
        deleteUser: (id) => dispatch(actionCreators.deleteUser(id))
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users)
