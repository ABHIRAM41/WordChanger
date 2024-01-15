const fs = require('fs');

// Read the JSON file
fs.readFile('combined.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the JSON file:', err);
    return;
  }

  try {
    // Parse the JSON content
    const jsonObject = JSON.parse(data);

    // Process all keys (in this example, converting them to lowercase)
    Object.keys(jsonObject).forEach(key => {
      jsonObject[key.trim()] = jsonObject[key];
      delete jsonObject[key];
    });

    // Convert the updated object back to a JSON string
    const updatedJsonString = JSON.stringify(jsonObject, null, 2);

    // Save the updated JSON string back to the same file
    fs.writeFile('combined.json', updatedJsonString, 'utf8', err => {
      if (err) {
        console.error('Error writing to the JSON file:', err);
        return;
      }

      console.log('JSON file has been updated and saved successfully.');
    });
  } catch (jsonError) {
    console.error('Error parsing JSON:', jsonError);
  }
});
