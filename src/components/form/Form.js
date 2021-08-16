import * as React from 'react';
import { useForm } from 'react-hook-form';
import './form.css';

function Form() {

    const { register, handleSubmit } = useForm();

    function onFormSubmit(data) {
        console.log(data)
    }

    return (
    <>
        <div className="wholeForm">
            <header className="header">
                Get In Touch
            </header>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <div className="inputForm">
                <fieldset className="contactInformation">
                    <legend>Customer Details</legend>

                    <label htmlFor="details-name">
                        <input
                            placeholder="Full Name"
                            type="text"
                            name="name"
                            id="details-name"
                            {...register("name")}
                        />
                    </label>

                    <label htmlFor="details-company">
                        <input
                            placeholder="Company Name"
                            type="text"
                            name="company"
                            id="details-company"
                            {...register("company")}
                        />
                    </label>

                    <label htmlFor="details-phoneNumber">
                        <input
                            placeholder="Phone Number"
                            type="text"
                            name="phoneNumber"
                            id="details-phoneNumber"
                            {...register("phoneNumber")}
                        />
                    </label>

                    <label htmlFor="details-emailAddress">
                        <input
                            placeholder="Email Address"
                            type="text"
                            name="emailAddress"
                            id="details-emailAddress"
                            {...register("emailAddress")}
                        />
                    </label>
                </fieldset>

                <fieldset className="messageField">
                    <legend>Your Message</legend>

                    <label htmlFor="recipe-comments">

                        <textarea
                            name="comments"
                            id="recipe-comments"
                            rows="4"
                            cols="40"
                            placeholder="Explain in a few words why you want to get in touch"
                        >
                  </textarea>
                    </label>

                    <label htmlFor="referrer">
                        Select one of our expertises:

                        <select
                            name="found-through"
                            id="referrer"
                        >
                            <option value="consultancy">Consultancy</option>
                            <option value="training">Training</option>
                            <option value="support">Support</option>
                        </select>
                    </label>
                </fieldset>
                </div>
                <button type="submit">
                    Send
                </button>
            </form>
        </div>
    </>
    );
}

export default Form;