
<script>
  let currentSold = 12;

  function updateSold() {
    const soldNumber = document.getElementById('sold-number');
    if (!soldNumber) return;

    // Random increase 1–4
    const increase = Math.floor(Math.random() * 4) + 1;
    let newValue = currentSold + increase;

    // Cap at 52
    if (newValue > 52) newValue = 52;

    currentSold = newValue;

    // Add animation class
    soldNumber.classList.add("bump");
    soldNumber.textContent = currentSold;

    // Remove class after animation ends
    setTimeout(() => {
      soldNumber.classList.remove("bump");
    }, 300);
  }

  updateSold();
  setInterval(updateSold, 2000); // every 2 seconds
</script>
