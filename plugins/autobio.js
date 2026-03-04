// Improved and modernized Autobio Plugin

/**
 * Autobio Plugin
 * This plugin automatically generates a user bio
 * with a modern, visually appealing layout.
 * 
 * Features:
 * - Dynamic content generation
 * - Customizable styles
 * - Easy integration with user profiles
 */

function generateAutobio(user) {
    // Create a user bio with modern styles
    const bio = `<div style='font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ccc; border-radius: 8px; background-color: #f9f9f9;'>\n` +
        `<h2 style='color: #333;'>Hello, I'm ${user.name}</h2>\n` +
        `<p style='color: #555;'>${user.description}</p>\n` +
        `<ul>\n` +
        `${user.interests.map(interest => `<li style='color: #007BFF;'>${interest}</li>`).join('')}\n` +
        `</ul>\n` +
        `</div>`;

    return bio;
}

// Usage example:
const user = { name: 'John Doe', description: 'A passionate developer.', interests: ['JavaScript', 'React', 'Node.js'] };
console.log(generateAutobio(user));