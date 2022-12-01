const year = new Date()
const copy = document.getElementById("copy")
copy.innerHTML = year.getFullYear()

// seting fixed scroll 
function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
  };
}
window.addEventListener("scroll", () => {
    const footerYPos = Math.ceil(getOffset("footer").top) 
    const scrolled = Math.ceil(window.scrollY)
    if (scrolled > footerYPos) {
       window.scrollTo({top:footerYPos, left: 0, behavior: 'smooth'})
    }

})
