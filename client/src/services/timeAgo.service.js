export const timeAgo = (dateString) => {
    const currentDate = new Date();
    const date = new Date(dateString);
    const seconds = Math.floor((currentDate - date) / 1000);
  
    let interval = Math.floor(seconds / 31536000);
    if (interval > 1) {
      return interval + ' years ago';
    }
  
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + ' months ago';
    }
  
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + ' days ago';
    }
  
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + ' hours ago';
    }
  
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + ' minutes ago';
    }
  
    if(seconds < 10) return 'just now';
  
    return Math.floor(seconds) + ' seconds ago';
  };

  console.log(timeAgo("2024-02-07T15:50:39.583Z"))