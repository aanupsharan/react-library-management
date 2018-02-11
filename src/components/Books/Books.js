import React, {Component} from 'react';
import {Table, Button} from 'react-bootstrap';
import axios from 'axios';

class Books extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
    }

    removeRecord(id) {
        axios.delete(`http://localhost:3000/books/${id}`)
            .then(() => {
                axios.get("http://localhost:3000/books")
                    .then(res => {
                        this.setState({books: res.data})
                    });
            });
    }

    componentDidMount() {
        axios.get("http://localhost:3000/books")
            .then(res => {
                this.setState({books: res.data})
            })
    }

    render() {
        return (
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
                    this.state.books.map((res, key) =>
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
        );
    }
}

export default Books;