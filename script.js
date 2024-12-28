const apiUrl = 'https://imminent-reliable-wizard.glitch.me';

// Fetch all users from the server
const fetchUsers = async () => {
  const response = await fetch(apiUrl);
  const users = await response.json();
  const userListDiv = document.getElementById('user-list');
  userListDiv.innerHTML = '<h3>User List:</h3>';
  users.forEach(user => {
    const userDiv = document.createElement('div');
    userDiv.textContent = `ID: ${user.id}, Name: ${user.name}`;
    userListDiv.appendChild(userDiv);
  });
};

// Create a new user
const createUser = async () => {
  const newUser = { name: 'Charlie' };
  await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser),
  });
  fetchUsers(); // Update the user list
};

// Update the user with ID 1
const updateUser = async () => {
  const updatedUser = { name: 'Alice' };
  await fetch(`${apiUrl}/1`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedUser),
  });
  fetchUsers(); // Update the user list
};

// Delete the user with ID 1
const deleteUser = async () => {
  await fetch(`${apiUrl}/1`, {
    method: 'DELETE',
  });
  fetchUsers(); // Update the user list
};

// Event listeners
document.getElementById('create-user').addEventListener('click', createUser);
document.getElementById('update-user').addEventListener('click', updateUser);
document.getElementById('delete-user').addEventListener('click', deleteUser);

// Load the initial list of users
fetchUsers();
