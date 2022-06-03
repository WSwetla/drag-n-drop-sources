const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (const placeholder of placeholders) {
  placeholder.addEventListener('dragover', dragover)/*вызывается, когда элемент, который перетаскиваем, находится непосредственно над placeholder, куда мы его можем поместить. */
  placeholder.addEventListener('dragenter', dragenter)/*вызывается, когда элемент, который перетаскиваем, находится непосредственно на территории placeholder, куда мы его можем поместить. */
  placeholder.addEventListener('dragleave', dragleave)/*вызывается, когда элемент, который перетаскиваем, перетащили над placeholder,но вышли. */
  placeholder.addEventListener('drop', dragdrop)/*вызывается, когда мы элемент отпустили. */
}

function dragstart(event) {
  event.target.classList.add('hold')
  setTimeout(() => event.target.classList.add('hide'), 0)
}

function dragend(event) {
  event.target.classList.remove('hold')
  event.target.classList.remove('hide')
}

function dragover(event) {
  event.preventDefault()
}

function dragenter(event) {
  event.target.classList.add('hovered')/*доб горизонт полосу сверху у placeholder */
}

function dragleave(event) {
  event.target.classList.remove('hovered')/*убирает горизонт полосу сверху у placeholder */
}

function dragdrop(event) {
  event.target.classList.remove('hovered')
  event.target.append(item)
}