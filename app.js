const data = [
    {
        name: 'John Doe',
        age: 35,
        gender: 'Male',
        lookingfor: 'Female',
        location: 'San Francisco, CA',
        image: 'https://randomuser.me/api/portraits/men/82.jpg'
    },
    {
        name: 'Jane Davis',
        age: 31,
        gender: 'Female',
        lookingfor: 'Male',
        location: 'San Leandro, CA',
        image: 'https://randomuser.me/api/portraits/women/82.jpg'
    },
    {
        name: 'Sam Adams',
        age: 28,
        gender: 'Male',
        lookingfor: 'Female',
        location: 'Larkspur, CA',
        image: 'https://randomuser.me/api/portraits/men/80.jpg'
    },
    {
        name: 'Jen Mando',
        age: 37,
        gender: 'Female',
        lookingfor: 'Male',
        location: 'Daly City, CA',
        image: 'https://randomuser.me/api/portraits/women/85.jpg'
    },
];

const profiles = profileIterator(data);

// call next profile
nextProfile();

// Next event
document.getElementById('next').addEventListener('click', nextProfile);

// Next Profile Display
function nextProfile() {
    const currentProfile = profiles.next().value;

    if (currentProfile !== undefined) {
        document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for 
        ${currentProfile.lookingfor}</li>
    </ul>`;

        document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`
    } else {
        // no more profiles
        window.location.reload()
    }
}

// Profile Iterator
function profileIterator(profiles) {
    let nextIndex = 0;

    return {
        next: function () {
            return nextIndex < profiles.length ?
                { value: profiles[nextIndex++], done: false } :
                { done: true }
        }
    };
}