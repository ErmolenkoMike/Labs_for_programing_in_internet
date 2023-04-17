function invokeAfterDelay(fn, delay) {
    return new Promise(resolve => setTimeout(() => resolve(fn()), delay));
}

const randomPromise = invokeAfterDelay(() => Math.floor(Math.random() * 11), 2000);
randomPromise.then(result => console.log(result));


function produceRandomAfterDelay(delay) {
    return invokeAfterDelay(() => Math.floor(Math.random() * 11), delay);
}

const randomPromise1 = produceRandomAfterDelay(1000);
const randomPromise2 = produceRandomAfterDelay(2000);

Promise.all([randomPromise1, randomPromise2]).then(results => {
    const sum = results.reduce((acc, val) => acc + val, 0);
    console.log(sum);
});


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

(async function() {
    await sleep(1000);
})();



const users = [
    { id: 0, name: 'John', age: 25, city: 'New York' },
    { id: 1, name: 'Mary', age: 30, city: 'San Francisco' },
    { id: 2, name: 'Bob', age: 35, city: 'Chicago' },
    { id: 3, name: 'Alice', age: 40, city: 'Los Angeles' }
];

function getUser(id) {
    return invokeAfterDelay(() => {
        const user = users.find(user => user.id === id);
        if (user) {
            return user;
        } else {
            throw new Error('User not found');
        }
    }, 1000);
}


async function loadUsers(ids) {
    try {
        const promises = ids.map(id => getUser(id));
        const users = await Promise.all(promises);
        return users;
    } catch (error) {
        console.log(error.message);
        return null;
    }
}


function logCall(callback) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(new Date());
            resolve(callback());
        }, 1000);
    });
}

logCall(() => console.log('First call'))
    .then(() => logCall(() => console.log('Second call')))
    .then(() => logCall(() => console.log('Third call')))
    .then(() => logCall(() => console.log('Fourth call')));


async function showUsers(ids) {
    console.log("loading");
    try {
        const users = await loadUsers(ids);
        console.log(users);
    } catch (error) {
        console.error(error);
    } finally {
        console.log("loading finished");
    }
}
showUsers([0, 1, 2, 3]);
