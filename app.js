const data = [
    {
        name: 'John Doe',
        age: 35,
        gender: 'male',
        lookingfor: 'female',
        location: 'San Francisco, CA'
    },
    {
        name: 'John Doe',
        age: 35,
        gender: 'male',
        lookingfor: 'female',
        location: 'San Francisco, CA'
    },
    {
        name: 'John Doe',
        age: 35,
        gender: 'male',
        lookingfor: 'female',
        location: 'San Francisco, CA'
    },
    {
        name: 'John Doe',
        age: 35,
        gender: 'male',
        lookingfor: 'female',
        location: 'San Francisco, CA'
    },
];

const profiles = profileIterator(data);

// Next event
document.getElementById('next').addEventListener('click', nextProfile);

// Next Profile Display
function nextProfile(){
    const currentProfile = profiles.next().value;

    document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Name: ${currentProfile.name}</li>
    </ul>`
}

// Profile Iterator
function profileIterator(profiles){
    let nextIndex = 0;

    return {
        next: function(){
            return nextIndex < profiles.length ? 
            {value: profiles[nextIndex++], done: false} :
            {done: true}
        }
    };
}