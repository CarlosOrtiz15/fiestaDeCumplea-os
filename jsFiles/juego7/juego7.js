document.addEventListener('DOMContentLoaded', () => {
    const state = {
        nombre_juego: 'Juego#2',
        timeStr: '',
        timer_total: 0,
        time_total_str: '',
        intentos: 0,
        condition: false, // true when all answers are correct
        showResults: false,
        correctCount: 0,
        incorrectCount: 0,
        minutes: 0,
        seconds: 0,
        timer: null,
        selectedBox: null, // Stores the ID of the currently dragged box
        boxes: [
            { id: 'box1-cl', content: '05:00pm', isDropped: false},
            { id: 'box2-cl', content: '5 de Febrero', isDropped: false},
            { id: 'box3-cl', content: 'Luis', isDropped: false},
            { id: 'box4-cl', content: 'Sofia', isDropped: false},
            { id: 'box5-cl', content: 'Independencia #10', isDropped: false},
            { id: 'box6-cl', content: 'Fecha:', isDropped: false},
            { id: 'box7-cl', content: 'Para:', isDropped: false},
            { id: 'box9-cl', content: 'Lugar:', isDropped: false},
            { id: 'box10-cl', content: 'Hora:', isDropped: false},
            { id: 'box11-cl', content: 'De:', isDropped: false},
            

        ],
        dropZones: [
            // top y left son porcentajes de la imagen de fondo
            { id: 'dropZone6-cl', content: '', isDropped: false, isCheck: false, isCorrect: null, draggedBoxId: null, top: 53, left: 25, height: '8%', width: '50%', correctAnswer: 'box2-cl', isHovered: false },
            { id: 'dropZone7-cl', content: '', isDropped: false, isCheck: false, isCorrect: null, draggedBoxId: null, top: 69, left: 25, height: '7%', width: '50%', correctAnswer: 'box1-cl', isHovered: false },
            { id: 'dropZone8-cl', content: '', isDropped: false, isCheck: false, isCorrect: null, draggedBoxId: null, top: 90, left: 36, height: '8%', width: '39%', correctAnswer: 'box4-cl', isHovered: false },
            { id: 'dropZone9-cl', content: '', isDropped: false, isCheck: false, isCorrect: null, draggedBoxId: null, top: 37, left: 25, height: '8%', width: '50%', correctAnswer: 'box5-cl', isHovered: false },
            { id: 'dropZone10-cl', content: '', isDropped: false, isCheck: false, isCorrect: null, draggedBoxId: null, top: 6, left: 36, height: '8%', width: '39%', correctAnswer: 'box3-cl', isHovered: false },
            { id: 'dropZone11-cl', content: '', isDropped: false, isCheck: false, isCorrect: null, draggedBoxId: null, top: 6, left: 20, height: '8%', width: '15%', correctAnswer: 'box7-cl', isHovered: false },
            { id: 'dropZone12-cl', content: '', isDropped: false, isCheck: false, isCorrect: null, draggedBoxId: null, top: 29, left: 43, height: '7%', width: '15%', correctAnswer: 'box9-cl', isHovered: false },
            { id: 'dropZone13-cl', content: '', isDropped: false, isCheck: false, isCorrect: null, draggedBoxId: null, top: 46, left: 43, height: '6%', width: '15%', correctAnswer: 'box6-cl', isHovered: false },
            { id: 'dropZone14-cl', content: '', isDropped: false, isCheck: false, isCorrect: null, draggedBoxId: null, top: 62, left: 43, height: '6%', width: '15%', correctAnswer: 'box10-cl', isHovered: false },
            { id: 'dropZone15-cl', content: '', isDropped: false, isCheck: false, isCorrect: null, draggedBoxId: null, top: 90, left: 20, height: '8%', width: '15%', correctAnswer: 'box11-cl', isHovered: false },

        ]
    };
    function abrirModalConVideo(url) {
        const modal = document.getElementById("emergente");
        const iframe = document.querySelector("#emergente iframe");

        iframe.src = url;
        modal.style.display = "block";
    }
    // --- DOM Elements ---
    const correctCountElement = document.getElementById('correct-count-cl');
    const incorrectCountElement = document.getElementById('incorrect-count-cl');
    const incorrectTextElement = document.getElementById('incorrect-text-cl');
    const btnVerificar = document.getElementById('btn-verificar-cl');
    const btnReintentar = document.getElementById('btn-reintentar');
    //const btnTerminar = document.getElementById('btn-terminar');
    const opcionesContainerDeskopt = document.getElementById('opciones-container-deskopt-cl');
    const opcionesContainerMovil = document.getElementById('opciones-container-movil-cl');
    const overlaySpacesContainer = document.getElementById('overlay-spaces-container-cl');

    // --- Helper Functions ---
    const findBoxById = (boxId) => {
        return state.boxes.find(box => box.id === boxId);
    };

    const findDropZoneById = (dropZoneId) => {
        return state.dropZones.find(dropZone => dropZone.id === dropZoneId);
    };

    const attachBoxListeners = (boxElement, box) => {
    const canDrag = !box.isDropped;

    boxElement.draggable = canDrag;
    boxElement.setAttribute('draggable', canDrag ? 'true' : 'false');

    const img = boxElement.querySelector('img');
    if (img) {
        img.setAttribute('draggable', 'false');
        img.addEventListener('dragstart', (e) => e.preventDefault());
    }

    boxElement.addEventListener('dragstart', (e) => {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', box.id);
        state.selectedBox = box.id;
        console.log('[dragstart]', box.id); 
    });

    boxElement.addEventListener('dragend', () => {
        state.selectedBox = null;
        renderBoxes();
    });

    boxElement.addEventListener('click', () => {
        if (!box.isDropped) {
        if (state.selectedBox && state.selectedBox !== box.id) {
            const prev = document.getElementById(state.selectedBox);
            if (prev) prev.classList.remove('selected');
        }
        state.selectedBox = box.id;
        boxElement.classList.toggle('selected');
        }
    });
    };

    // --- Render Functions ---
    const renderBoxes = () => {
        opcionesContainerDeskopt.innerHTML = '';
        opcionesContainerMovil.innerHTML = '';

        state.boxes.forEach(box => {
            const boxElement = document.createElement('div');
            boxElement.id = box.id;
            boxElement.classList.add('box');
            if (box.isDropped) {
                boxElement.classList.add('dropped');
            }
            if (state.selectedBox === box.id) {
                boxElement.classList.add('selected');
            }
            boxElement.draggable = !box.isDropped;
            boxElement.innerHTML = `<span>${box.content}</span><img src="${box.imagePath}" alt="" draggable="false">`;  
            
            
            attachBoxListeners(boxElement, box);
            const clone = boxElement.cloneNode(true);
            attachBoxListeners(clone, box);

            opcionesContainerMovil.appendChild(boxElement);
            opcionesContainerDeskopt.appendChild(clone);
        });
    };

    const renderDropZones = () => {
        overlaySpacesContainer.innerHTML = '';
        state.dropZones.forEach(dropZone => {
            const dropZoneElement = document.createElement('div');
            dropZoneElement.id = dropZone.id;
            dropZoneElement.classList.add('drop-zone');
            dropZoneElement.style.top = `${dropZone.top}%`;
            dropZoneElement.style.left = `${dropZone.left}%`;
            dropZoneElement.style.height = dropZone.height;
            dropZoneElement.style.width = dropZone.width;

            // Apply classes based on state
            if (dropZone.isDropped) {
                dropZoneElement.classList.add('has-content');
                if (dropZone.isCheck) {
                    if (dropZone.isCorrect) {
                        dropZoneElement.classList.add('correct');
                    } else {
                        dropZoneElement.classList.add('incorrect');
                    }
                }
            } else {
                dropZoneElement.classList.add('initial');
            }
            if (dropZone.isHovered && !dropZone.isDropped) {
                dropZoneElement.classList.add('hover');
            }


            if (dropZone.isDropped) {
                if (dropZone.imagePath) {
                      dropZoneElement.innerHTML = `
                        <div class="drop-content">
                        <span>${dropZone.content}</span>
                        <img class="imgDropZone" src="${dropZone.imagePath}" alt="">
                        </div>`;
                } else {
                    dropZoneElement.innerHTML = `<span>${dropZone.content}</span>`;
                }
            } else {
                // Show content if not dropped, or empty if it's supposed to be filled by image
                // dropZoneElement.innerHTML = `<span>${dropZone.content}</span>`; // This should be empty or a placeholder
            }


            dropZoneElement.addEventListener('dragover', (e) => {
                e.preventDefault(); // Necessary to allow dropping
                if (!dropZone.isDropped) {
                    dropZone.isHovered = true;
                    renderDropZones(); // Update class
                }
            });
            dropZoneElement.addEventListener('dragleave', () => {
                dropZone.isHovered = false;
                renderDropZones(); // Update class
            });
            dropZoneElement.addEventListener('drop', (e) => {
                e.preventDefault();
                dropZone.isHovered = false; // Remove hover class
                const boxId = e.dataTransfer.getData('text/plain');
                if (boxId && !dropZone.isDropped) { // Only drop if no box is already here
                    setDropZoneContent(dropZone.id, boxId);
                    renderGame(); // Re-render everything to update states
                }
            });
            dropZoneElement.addEventListener('click', () => {
                // Handle click for mobile or to clear content
                if (dropZone.isDropped) {
                    clearDropZoneContent(dropZone.id);
                    renderGame();
                } else if (state.selectedBox) { // For mobile: if a box is selected, try to drop it
                    setDropZoneContent(dropZone.id, state.selectedBox);
                    renderGame();
                }
            });

            overlaySpacesContainer.appendChild(dropZoneElement);
        });
    };

    const updateResultsDisplay = () => {
        correctCountElement.innerText = state.correctCount;
        incorrectCountElement.innerText = state.incorrectCount;
        if (state.incorrectCount > 0) {
            incorrectTextElement.classList.add('texto-rojo');
        } else {
            incorrectTextElement.classList.remove('texto-rojo');
        }

        if (state.showResults) {
            btnVerificar.style.display = 'block';
            if (state.condition) {
                btnReintentar.style.display = 'none';
                //btnTerminar.style.display = 'block';
            } else {
                btnReintentar.style.display = 'block';
                //btnTerminar.style.display = 'none';
            }
        } else {
            btnVerificar.style.display = 'block';
            btnReintentar.style.display = 'none';
            //btnTerminar.style.display = 'none';
        }
    };

    const renderGame = () => {
        renderBoxes();
        renderDropZones();
        updateResultsDisplay();
    };

    // --- Game Logic Functions ---
    const clearDropZoneContent = (dropZoneId) => {
        const dropZone = findDropZoneById(dropZoneId);
        if (dropZone && dropZone.isDropped) {
            const box = findBoxById(dropZone.draggedBoxId);
            if (box) {
                box.isDropped = false;
            }
            dropZone.isDropped = false;
            dropZone.draggedBoxId = null;
            dropZone.content = '';
            dropZone.imagePath = '';
            dropZone.isCorrect = null;
            dropZone.isCheck = false;
            dropZone.isHovered = false;
            state.selectedBox = null; // Deselect if clicking on a dropped item
        }
    };

    const setDropZoneContent = (dropZoneId, boxId) => {
        const box = findBoxById(boxId);
        const dropZone = findDropZoneById(dropZoneId);

        // If the box is already dropped elsewhere, clear its previous drop zone
        const previousDropZone = state.dropZones.find(dz => dz.draggedBoxId === boxId);
        if (previousDropZone && previousDropZone.id !== dropZoneId) {
            clearDropZoneContent(previousDropZone.id);
        }

        if (box && dropZone && !dropZone.isDropped) {
            box.isDropped = true;
            dropZone.isDropped = true;
            dropZone.draggedBoxId = boxId;
            dropZone.content = box.content;
            dropZone.imagePath = box.imagePath;
            state.selectedBox = null; // Clear selected box after dropping
        }
    };

    const checkAnswers = () => {
        state.intentos++;

        state.correctCount = 0;
        state.incorrectCount = 0;

        state.dropZones.forEach(dropZone => {
            const box = findBoxById(dropZone.draggedBoxId);
            dropZone.isCorrect = (box && box.id === dropZone.correctAnswer);
            dropZone.isCheck = true; // Mark for visual feedback

            if (dropZone.isCorrect) {
                state.correctCount++;
            } else {
                state.incorrectCount++;
            }
        });

        state.showResults = true;

        if (state.correctCount === state.dropZones.length) { // Check if all are correct
            state.condition = true;
        } else {
            state.condition = false;
        }
        if (state.correctCount === 10) {
            abrirModalConVideo("https://www.youtube.com/embed/GEIR6rdUNUM");
        }
        document.querySelectorAll(".aciertosErroresCL").forEach(el => el.style.display = "block");
        renderGame(); // Re-render to show results
        // saveResults(); // If you implement backend saving
    };



    const redirectToRoot = () => {
        window.location.href = '/'; // Change this to your correct root URL
    };

    // const saveResults = () => {
    //     // Implement AJAX call here if you need to save results to a backend
    //     // Example using fetch:
    //     /*
    //     fetch('/save-results', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'X-CSRF-TOKEN': 'your-csrf-token' // If you have CSRF protection
    //         },
    //         body: JSON.stringify({
    //             nombre_juego: state.nombre_juego,
    //             time_total: state.time_total_str,
    //             time: state.timeStr,
    //             intentos: state.intentos,
    //             correct_count: state.correctCount,
    //             incorrect_count: state.incorrectCount,
    //         })
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log('Results saved:', data.message);
    //     })
    //     .catch(error => {
    //         console.error('Error saving results:', error);
    //     });
    //     */
    // };

    // --- Event Listeners for Buttons ---
    btnVerificar.addEventListener('click', checkAnswers);
    //btnTerminar.addEventListener('click', redirectToRoot);

    // --- Initial Game Setup ---
    renderGame(); // Initial render of all elements
    
});