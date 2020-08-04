const createPost = (title, text = 'Default Text', date = new Date().toLocaleDateString()) => {
    // date = date || new Date().toLocaleDateString();
    return {title, text, date}
}

const post = createPost('New Year comes!');
console.log(post);