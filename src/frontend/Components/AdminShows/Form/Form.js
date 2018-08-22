import React from 'react';
import './Form.less';

export default function Form(props) {
    return (
        <form onSubmit={props.onSubmit} className="add-form">
            <ul>
                <li className="form-section">
                    <label>TV Show Title: </label>
                    <input
                        type="text"
                        value={props.title}
                        placeholder="TV Show Title..."
                        name="title"
                        onChange={props.onInputChange}
                        autoComplete="off" />
                </li>
                <li className="form-section">
                    <label>TV Show ID: </label>
                    <input
                        type="text"
                        value={props.id}
                        placeholder="TV Show ID..."
                        name="id"
                        onChange={props.onInputChange}
                        autoComplete="off" />
                </li>
                <li className="form-section">
                    <label>TV Show Creator(s): </label>
                    <div className="multiple-input">
                        {props.creator.map((element, index) => {
                            return (<input
                                type="text"
                                key={`creator-${index}`}
                                value={element}
                                placeholder="TV Show Creator..."
                                onChange={(e) => props.onMultipleInput('creator', e.target.value, index)}
                                autoComplete="off" />)
                        })}
                    </div>
                </li>
                <li className="form-section">
                    <label>TV Show Stars (max 3): </label>
                    <div className="multiple-input">
                        {props.stars.map((element, index) => {
                            return (<input
                                type="text"
                                key={`stars-${index}`}
                                value={element}
                                placeholder="TV Show Star..."
                                onChange={(e) => props.onMultipleInput('stars', e.target.value, index)}
                                autoComplete="off" />)
                        })}
                    </div>
                </li>
                <li className="form-section">
                    <label>Youtube Embedded URL: </label>
                    <input
                        type="text"
                        value={props.videoId}
                        placeholder="YouTube embedded URL..."
                        name="videoId"
                        onChange={props.onInputChange}
                        autoComplete="off" />
                </li>
                <li className="form-section">
                    <label>TV Show Synopsis: </label>
                    <textarea
                        value={props.description}
                        placeholder="TV Show Description..."
                        name="description"
                        onChange={props.onInputChange}
                        autoComplete="off" />
                </li>
            </ul>
            <div className="submitBtn">
                <input type="submit" value="Submit" />
            </div>
        </form>
    )
}