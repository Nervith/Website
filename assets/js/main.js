
// URL of the published Google Docs document
const googleDocsURL = 'https://www.wattpad.com/1194292693-the-son-of-saga-the-scriptures-2-this-wasn%27t';

// Function to fetch the content of the Google Docs document
async function fetchGoogleDocsContent() {
  try {
    const response = await fetch(googleDocsURL);
    const content = await response.text();
    return content;
  } catch (error) {
    console.error('Error fetching Google Docs content:', error);
    return null;
  }
}

// Call the fetchGoogleDocsContent function
fetchGoogleDocsContent().then(content => {
  if (content) {
	console.log(content);
    // Process the content and extract word count
    // Update your website's display with the word count
  }
});
