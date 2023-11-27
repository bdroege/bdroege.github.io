// helper website: https://www.digitalocean.com/community/tutorials/js-drag-and-drop-vanilla-js

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);
    var dropzone = event.target;

    // check for accuracy
    if (draggedElement.dataset.catagory === dropzone.parentElement.dataset.catagory) {
        dropzone.appendChild(draggedElement);
    } else {
        alert("Invalid drop. The item doesn't belong here.");
    }
}

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("text");
  const draggedElement = document.getElementById(data);
  const dropzone = event.target.closest(".dnd-dropzone");

  if (dropzone && dropzone.parentElement.dataset.category === draggedElement.dataset.category) {
    dropzone.appendChild(draggedElement);
    validate();
  }
}

function validate() {
  const categories = document.querySelectorAll(".dnd-card-category");
  let allCorrect = true;

  categories.forEach(category => {
    const categoryWords = category.querySelectorAll(".dnd-wordbank");
    if (categoryWords.length > 0) {
      const categoryData = category.dataset.category;
      categoryWords.forEach(word => {
        if (word.dataset.category !== categoryData) {
          allCorrect = false;
        }
      });
    } else {
      allCorrect = false;
    }
  });

  if (allCorrect) {
    alert("Congratulations! - completed");
  }
}
