function fullName(firstName, lastName, language) {
    var language = language || 'English';
    return lastName.toUpperCase() + ", " + firstName.toUpperCase() + " - " + language;
}

console.log(fullName('Jordan', 'Hudgens', 'Spanish'));


// Guide to Adding Default Object Values to JavaScript Function Arguments
const blog = {
    title: 'My great post',
    summary: 'Summary of my post'
  }
  
  const openGraphMetadata = ({ title, summary = 'A DailySmarty Post' }) => {
    console.log(`
      og-title=${title}
      og-description=${summary}
    `);
  }
  
  openGraphMetadata(blog);

  