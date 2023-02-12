/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { registerUser } from '../../utils/auth'; // Update with path to registerUser

function RegisterForm({ user, updateUser }) {
  const [firstName, lastName] = user.fbUser.displayName.split(' ');
  const date = new Date().toISOString().slice(0, 10);

  const [formData, setFormData] = useState({
    firstName,
    lastName,
    profileImage: '',
    nickname: '',
    createdOn: date,
    uid: user.uid,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(formData).then(() => updateUser(user.uid));
  };

  return (
    <>
      <h3>Complete Your Account Registration</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text">What's Your Nickname?</Form.Label>
          <Form.Control name="nickname" required placeholder="e.g. Cool_Kats" onChange={({ target }) => setFormData((prev) => ({ ...prev, [target.name]: target.value }))} />
          <Form.Text className="text-muted">***Username MUST be different from your first and last name</Form.Text>
          <div />
          <br />
          <Form.Label className="text">Profile Image</Form.Label>
          <Form.Control name="profileImage" required placeholder="Image URL" onChange={({ target }) => setFormData((prev) => ({ ...prev, [target.name]: target.value }))} />
        </Form.Group>
        <Button variant="dark" type="submit">
          Register for Account
        </Button>
      </Form>
    </>
  );
}

RegisterForm.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string.isRequired,
    fbUser: PropTypes.shape({
      displayName: PropTypes.string,
    }).isRequired,
  }).isRequired,
  updateUser: PropTypes.func.isRequired,
};

export default RegisterForm;
