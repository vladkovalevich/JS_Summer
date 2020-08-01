const getUsersWithEyeColor = (users, color) => {
    return users.filter(user => user.eyeColor === color);
};

console.log(getUsersWithEyeColor(users, "blue")); 