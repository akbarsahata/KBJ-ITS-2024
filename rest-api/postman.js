// Initialize the base subpath
let subpath = '';

// Determine the number of iterations (from 1 to 5)


// Function to generate random subpath parts
function getRandomSubpathPart() {
    const options = [
        pm.variables.replaceIn("{{$randomWord}}").split(" ").join("-").toLowerCase(),
        pm.variables.replaceIn("{{$randomNoun}}").toLowerCase(),
    ];
    return options[Math.floor(Math.random() * options.length)];
}

subpath += getRandomSubpathPart() + '/';

// Loop from 0 to `iterations`, appending random parts to `subpath`
for (let i = 1; i < 6 && Math.random() < 0.5; i++) {
    // Append a randomly selected subpath part and a forward slash
    subpath += getRandomSubpathPart() + '/';
}

// Decide whether to append a random integer or UUID at the end
const finalPart = Math.random() > 0.5 ? "" : Math.random() > 0.5
    ? pm.variables.replaceIn("{{$randomInt}}")
    : pm.variables.replaceIn("{{$randomUUID}}");

// Append the final part to complete the subpath
subpath += finalPart;

if (subpath[subpath.length - 1] === '/') {
    subpath = subpath.slice(0, subpath.length - 1)
}

// Log the generated subpath to the console (for verification)
console.log("Generated subpath:", subpath);

// Set the generated subpath as a Postman variable for use in the request URL
pm.environment.set("randomSubpath", subpath);

function getRandomToken() {
    return `Bearer ${pm.variables.replaceIn("{{$randomUUID}}")}`;
}

// Randomly decide whether to set the Authorization header
if (Math.random() > 0.5) { // 50% chance
    const token = getRandomToken();
    pm.request.headers.add({ key: 'Authorization', value: token });
    console.log("Authorization header set with token:", token);
} else {
    console.log("Authorization header not set.");
}