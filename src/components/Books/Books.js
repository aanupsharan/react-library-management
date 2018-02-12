import React, {Component} from 'react';
import {Table, Button} from 'react-bootstrap';
import {actionCreators} from '../../actions/index';
import { connect } from 'react-redux';

class Books extends Component {

    constructor(props) {
        super(props);
    }

    addRecord() {
        let name = document.getElementById("name");
        let author = document.getElementById("author");
        this.props.addBook(name.value, author.value);
        name.value = "";
        author.value = "";
    }
    removeRecord(id) {
        this.props.deleteBook(id);
    }

    componentDidMount() {
        this.props.getBooks();
    }

    render() {
        return (
            <div>
                <Table striped bordered condensed hover>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Author</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.book && this.props.book.data.map((res, key) =>
                            <tr key={key}>
                                <td>{res.id}</td>
                                <td>{res.name}</td>
                                <td>{res.author}</td>
                                <td><Button bsStyle="danger" onClick={() => this.removeRecord(res.id)}>Delete Row</Button>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </Table>
                <label>Name : </label><input type="text" id="name"/><br/>
                <label>author : </label><input type="text" id="author"/><br/>
                <Button onClick={() => this.addRecord()}>Add Book</Button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        book: state.book
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getBooks: () => dispatch(actionCreators.getBooks()),
        addBook: (name, author) => dispatch(actionCreators.addBook(name, author)),
        deleteBook: (id) => dispatch(actionCreators.deleteBook(id))
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Books)