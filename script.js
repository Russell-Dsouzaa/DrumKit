function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function playSound(e) {                                                   // console.log(e) prints : KeyboardEvent (all key-value pairs such as code, KeyCode, ctrlKey: true/false, altKey: true/false etc)
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);  // this L.O.C. checks whether there is an audio element which has the same value of data-key as that of the div which we triggered
    const key = document.querySelector(`div[data-key="${e.code}"]`);      // [] is attibute selector
    if (!audio) return;                                                   // If the corresponding audio element doesn't exist, the function ends (Example, when we press any other key other than a,s,d,f,g,h,j,k,l)

    key.classList.add('playing');      // adds the playing class to the div with data-key = "e.code"
    audio.currentTime = 0;             // rewinds the audio file back to start position everytime we press the same key
    audio.play();
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));    // We can't directly listen for an event on a list(ListNode, they are like arrays) of keys(elements) at once , we have to loop over each key(button) and listen whether the transition has ended or not
window.addEventListener('keydown',playSound);