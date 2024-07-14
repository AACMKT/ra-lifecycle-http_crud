import 'bootstrap-icons/font/bootstrap-icons.css';
import { Component } from 'react';

export class NewNote extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let btn = document.querySelector('.bi-send-check');
        btn.addEventListener('click', this.handleClick.bind(this));

        let input = document.querySelector('.text-input');
        input.addEventListener('input', this.handleInput.bind(this));
    }

    handleClick = async(e) => {
        let input = document.querySelector('.text-input');
        let btn = e.target
        if (((input.value).trim()).length > 0) {
            let value = (input.value).trim()
            await fetch(import.meta.env.VITE_URL + "/notes", {
                method: "POST",
                body: JSON.stringify({ id: 0, content: value })
            });
            this.props.getData();
        }
        input.value = '';
        btn.classList.remove('bi-color');
    }

    handleInput = (e) => {
        let input = e.target;
        let btn = document.querySelector('.bi-send-check');
        ((input.value).trim()).length > 1 ? btn.classList.add('bi-color') : btn.classList.remove('bi-color')
    }

    render() {
        return (
            <div className="controls">
                <h2>New note</h2>
                <textarea className="text-input" id="story" name="story" rows="4" maxLength="300"></textarea>
                <i className="bi bi-send-check"></i>
            </div>
        )
    }
}
