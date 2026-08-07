export const updateMetaTags = (title, description) => {
  if (title) {
    document.title = `${title} | Arjun Mehra Photography`;
  }
  
  if (description) {
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      metaDescription.content = description;
      document.head.appendChild(metaDescription);
    }
  }
};
