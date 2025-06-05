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
            { id: 'box1', content: '05:00pm', isDropped: false, imagePath: 'imgs/ejercicio/j2/reloj.png' },
            { id: 'box2', content: '5 de Febrero', isDropped: false, imagePath: 'imgs/ejercicio/j2/calendario.png' },
            { id: 'box3', content: 'Luis', isDropped: false, imagePath: 'imgs/ejercicio/j2/luis.png' },
            { id: 'box4', content: 'Sofia', isDropped: false, imagePath: 'imgs/ejercicio/j2/sofia.png' },
            { id: 'box5', content: 'Independencia #10', isDropped: false, imagePath: 'imgs/ejercicio/j2/casa.png' }
        ],
        dropZones: [
            // top y left son porcentajes de la imagen de fondo
            { id: 'dropZone6', content: '', imagePath: '', isDropped: false, isCheck: false, isCorrect: null, draggedBoxId: null, top: 53, left: 25, height: '8%', width: '50%', correctAnswer: 'box2', isHovered: false },
            { id: 'dropZone7', content: '', imagePath: '', isDropped: false, isCheck: false, isCorrect: null, draggedBoxId: null, top: 68, left: 25, height: '8%', width: '50%', correctAnswer: 'box1', isHovered: false },
            { id: 'dropZone8', content: '', imagePath: '', isDropped: false, isCheck: false, isCorrect: null, draggedBoxId: null, top: 90, left: 36, height: '8%', width: '39%', correctAnswer: 'box4', isHovered: false },
            { id: 'dropZone9', content: '', imagePath: '', isDropped: false, isCheck: false, isCorrect: null, draggedBoxId: null, top: 37, left: 25, height: '8%', width: '50%', correctAnswer: 'box5', isHovered: false },
            { id: 'dropZone10', content: '', imagePath: '', isDropped: false, isCheck: false, isCorrect: null, draggedBoxId: null, top: 6, left: 36, height: '8%', width: '39%', correctAnswer: 'box3', isHovered: false }
        ]
    };

    // --- DOM Elements ---
    const timerElement = document.getElementById('timer');
    const correctCountElement = document.getElementById('correct-count');
    const incorrectCountElement = document.getElementById('incorrect-count');
    const incorrectTextElement = document.getElementById('incorrect-text');
    const btnVerificar = document.getElementById('btn-verificar');
    const btnReintentar = document.getElementById('btn-reintentar');
    const btnTerminar = document.getElementById('btn-terminar');
    const opcionesContainerDeskopt = document.getElementById('opciones-container-deskopt');
    const opcionesContainerMovil = document.getElementById('opciones-container-movil');
    const overlaySpacesContainer = document.getElementById('overlay-spaces-container');
    const controlsSection = document.getElementById('controls-section');

    // --- Timer Functions ---
    const startTimer = () => {
        state.timer = setInterval(() => {
            state.seconds++;
            if (state.seconds === 60) {
                state.minutes++;
                state.seconds = 0;
            }
            updateTimerDisplay();
        }, 1000);
    };

    const stopTimer = () => {
        clearInterval(state.timer);
    };

    const updateTimerDisplay = () => {
        timerElement.innerText = `${state.minutes.toString().padStart(2, '0')}:${state.seconds.toString().padStart(2, '0')}`;
    };

    // --- Helper Functions ---
    const findBoxById = (boxId) => {
        return state.boxes.find(box => box.id === boxId);
    };

    const findDropZoneById = (dropZoneId) => {
        return state.dropZones.find(dropZone => dropZone.id === dropZoneId);
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
            boxElement.innerHTML = `<span>${box.content}</span><img class="imgBox" src="${box.imagePath}" alt="" draggable="false">`;

            // Drag and Drop Events for draggable boxes
            boxElement.addEventListener('dragstart', (e) => {
                state.selectedBox = box.id;
                e.dataTransfer.setData('text/plain', box.id);
            });
            boxElement.addEventListener('dragend', () => {
                state.selectedBox = null;
                renderBoxes(); // Re-render to remove 'selected' class
            });
            boxElement.addEventListener('click', () => {
                // Allows selection for mobile drag-drop if not already dropped
                if (!box.isDropped) {
                     // Deselect previously selected box if any
                    if (state.selectedBox && state.selectedBox !== box.id) {
                        const prevSelectedBox = document.getElementById(state.selectedBox);
                        if (prevSelectedBox) {
                            prevSelectedBox.classList.remove('selected');
                        }
                    }
                    state.selectedBox = box.id;
                    boxElement.classList.toggle('selected');
                }
            });

            opcionesContainerDeskopt.appendChild(boxElement.cloneNode(true)); // Clone for desktop
            opcionesContainerMovil.appendChild(boxElement); // Use original for mobile (or clone if preferred)
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

            // Add content if dropped
            if (dropZone.isDropped) {
                // If content is text, display span. If it's an image, display img.
                if (dropZone.imagePath) {
                    dropZoneElement.innerHTML = `<img class="imgDropZone" src="${dropZone.imagePath}" alt="">`;
                } else {
                    dropZoneElement.innerHTML = `<span>${dropZone.content}</span>`;
                }
            } else {
                // Show content if not dropped, or empty if it's supposed to be filled by image
                // dropZoneElement.innerHTML = `<span>${dropZone.content}</span>`; // This should be empty or a placeholder
            }


            // Drag and Drop Events for drop zones
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
            btnVerificar.style.display = 'none';
            if (state.condition) {
                btnReintentar.style.display = 'none';
                btnTerminar.style.display = 'block';
            } else {
                btnReintentar.style.display = 'block';
                btnTerminar.style.display = 'none';
            }
        } else {
            btnVerificar.style.display = 'block';
            btnReintentar.style.display = 'none';
            btnTerminar.style.display = 'none';
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
        state.timer_total += (state.minutes * 60) + state.seconds;

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

        stopTimer();
        calculateTotalTimeStrings(); // Update time strings for display/saving
        renderGame(); // Re-render to show results
        // saveResults(); // If you implement backend saving
    };

    const calculateTotalTimeStrings = () => {
        const m = Math.floor(state.timer_total / 60);
        const s = state.timer_total % 60;

        state.time_total_str = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        state.timeStr = `${state.minutes.toString().padStart(2, '0')}:${state.seconds.toString().padStart(2, '0')}`;
    };

    const redirectToRoot = () => {
        window.location.href = '/'; // Change this to your correct root URL
    };

    const resetGame = () => {
        state.boxes.forEach(box => {
            box.isDropped = false;
        });

        state.dropZones.forEach(dropZone => {
            dropZone.isDropped = false;
            dropZone.isCheck = false;
            dropZone.isCorrect = null;
            dropZone.draggedBoxId = null;
            dropZone.content = '';
            dropZone.imagePath = '';
            dropZone.isHovered = false;
        });

        state.correctCount = 0;
        state.incorrectCount = 0;
        state.minutes = 0;
        state.seconds = 0;
        state.showResults = false;
        state.condition = false;
        state.selectedBox = null;

        startTimer();
        renderGame(); // Initial render after reset
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
    btnReintentar.addEventListener('click', resetGame);
    btnTerminar.addEventListener('click', redirectToRoot);

    // --- Initial Game Setup ---
    startTimer();
    renderGame(); // Initial render of all elements
});