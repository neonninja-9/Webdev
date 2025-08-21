function setupScroll(containerId, leftBtnId, rightBtnId) {
  const container = document.getElementById(containerId);
  const scrollAmount = 200;

  document.getElementById(leftBtnId).addEventListener('click', () => {
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  document.getElementById(rightBtnId).addEventListener('click', () => {
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });
}

// Initialize scroll functionality for both sections
setupScroll('trendingSongs', 'trendingLeft', 'trendingRight');
setupScroll('popularArtists', 'artistLeft', 'artistRight');
