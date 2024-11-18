// Get root element to modify CSS variables
const root = document.documentElement;

// Default colors
const defaultMainColor = '#2d2d2d';
const defaultTrimColor = '#ffd700';

// Function to toggle customize panel visibility
function toggleCustomizePanel() {
    const panel = document.getElementById('customizePanel');
    if (panel) {
        panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
    }
}

// Function to update colors based on color picker values
function updateColors() {
    const mainColor = document.getElementById('mainColor')?.value || defaultMainColor;
    const trimColor = document.getElementById('trimColor')?.value || defaultTrimColor;
    
    // Update CSS variables
    root.style.setProperty('--main-color', mainColor);
    root.style.setProperty('--trim-color', trimColor);
    
    // Save colors to localStorage for persistence
    localStorage.setItem('mainColor', mainColor);
    localStorage.setItem('trimColor', trimColor);
}

// Function to load saved colors from localStorage
function loadSavedColors() {
    const savedMainColor = localStorage.getItem('mainColor');
    const savedTrimColor = localStorage.getItem('trimColor');
    
    if (savedMainColor) {
        const mainColorPicker = document.getElementById('mainColor');
        if (mainColorPicker) {
            mainColorPicker.value = savedMainColor;
            root.style.setProperty('--main-color', savedMainColor);
        }
    }
    
    if (savedTrimColor) {
        const trimColorPicker = document.getElementById('trimColor');
        if (trimColorPicker) {
            trimColorPicker.value = savedTrimColor;
            root.style.setProperty('--trim-color', savedTrimColor);
        }
    }
}

// Initialize colors and add event listeners
document.addEventListener('DOMContentLoaded', () => {
    loadSavedColors();
    
    const customizeBtn = document.getElementById('customizeBtn');
    if (customizeBtn) {
        customizeBtn.addEventListener('click', toggleCustomizePanel);
    }
});
