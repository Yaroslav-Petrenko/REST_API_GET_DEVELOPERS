/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import './post-form.css';
import request from '../../../services/request';

function PostForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    file: '',
  });

  return (
    <div className="form-container">
      <form
        name="post-form"
        className="post-form"
        onSubmit={(e) => {
          e.preventDefault();
          console.log('событие', e);

          const { name, email, phone } = document.forms['post-form'];
          request('/POST', 'POST', {
            name: name.value,
            email: email.value,
            phone: e.target[2].value,
            file: phone.value,
          });
          console.log('form', document.forms['post-form']);
          // request('/POST', 'POST', {
          //   name: e.target[0].value,
          //   email: e.target[1].value,
          //   phone: e.target[2].value,
          //   file: e.target[7].value,
          // });
        }}
      >
        <input
          value="testvalue"
          onChange={(e) => {
            setForm((prev) => ({ ...prev, name: e.target.value }));
          }}
          name="name"
          placeholder="Your name"
          type="text"
          className="input form-input-name"
        />
        <input
          onChange={(e) => {
            setForm((prev) => {
              console.log(e.target.value);
              return { ...prev, email: e.target.value };
            });
          }}
          value={form.email}
          name="email"
          placeholder="Email"
          type="email"
          className="input form-input-email"
          onClick={(e) => {
            console.log('name="email" e.target.name', e.target.name);
          }}
        />
        <input
          name="phone"
          placeholder="Phone"
          type="number"
          className="input form-input-phone"
          onClick={(e) => {
            console.log('name="phone" e.target.name', e.target.name);
          }}
        />

        <div className="form-input-radio-title">Select your position</div>
        <div className="post-radio-block">
          <input
            name="position"
            type="radio"
            className="form-input-radio"
            value="Frontend developer"
            onClick={(e) => {
              console.log('name="position" e.target.name', e.target.name);
            }}
          />
          <label id="label">Frontend developer</label>
          <br />
          <input
            name="position"
            type="radio"
            className="form-input-radio"
            value="Backend developer"
          />
          <label id="label">Backend developer</label>
          <br />
          <input
            name="position"
            type="radio"
            className="form-input-radio"
            value="Designer"
          />
          <label id="label">Designer</label>
          <br />
          <input
            name="position"
            type="radio"
            className="form-input-radio"
            value="QA"
          />
          <label id="label">QA</label>
          <br />

          <input type="file" className="form-input-file" />
        </div>
        <input id="form-input-submit" type="submit" />
      </form>
    </div>
  );
}

export default PostForm;
