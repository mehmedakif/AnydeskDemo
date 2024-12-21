export const isValidURL = (url: string): boolean => {
    const pattern = new RegExp(
      "^(https?:\\/\\/)?" + 
      "((([a-zA-Z0-9-]+)\\.)+[a-zA-Z]{2,})" + 
      "(\\:\\d+)?(\\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?$", 
      "i" 
    );
    return pattern.test(url);
  };