// Social Media Profile

// 1.User information
const username = 'Juan';
const email = 'juan@gmail.com';
const age = 25;
const isStudent = true;

// 2. adress

const adress = {
    street: '123 main st',
    city: 'New York',
    state: 'NY',
    zipCode: '10001'
};

// 3. hobbies
const hobbies = ['music', 'sports', 'reading'];

// 4. gerating persolized bio

const persolizedBio = ` La bio creada de manera extraña es la siguiente: Name: ${username}, Age: ${age}, Email: ${email}, Student: ${isStudent}, Adress: ${adress.street}, ${adress.city}, ${adress.state}, ${adress.zipCode}, Hobbies: ${hobbies.join(', ')} hola mundo, ahre`;

// 5. output
console.log(persolizedBio);
