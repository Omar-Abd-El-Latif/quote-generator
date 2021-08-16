const text = document.querySelector('.qoute');
const author = document.querySelector('.author')
const nextBtn = document.querySelector('.btn')

const getQoute = async () => {
    const res = await fetch('https://type.fit/api/quotes');
    const qoutes = await res.json();
    const num = Math.floor(Math.random() * qoutes.length)
    const item = qoutes[num]

    const qoute = item.text;
    const authorName = item.author;
    text.innerHTML = qoute;
    author.innerHTML = authorName;

}
nextBtn.addEventListener('click', getQoute);
getQoute();