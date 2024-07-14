import { Card } from './Card';
import { Component } from 'react';

export class NotesContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.addEventListener('click', this.removeElement.bind(this))
    }

    componentDidUpdate() {

        document.removeEventListener('click', this.removeElement)
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.removeElement)
    }

    removeElement = async (e) => {
        if (e.target.classList.contains('bi-x-circle')) {
            let id = e.target.parentNode.parentNode.id;
            await fetch(import.meta.env.VITE_URL + "/notes/" + id, {
                method: "DELETE",
            });
            this.props.getData();

        }
    }



    render() {
        return(
            this.props.data.map(note => {
                return(
                    <Card key = { note.id } note = { note.content } id = { note.id } />
            )})
        )
    }
}