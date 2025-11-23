document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('calculate-btn');
    const resultArea = document.getElementById('result-area');
    const resultMessage = document.getElementById('result-message');
    const root1Display = document.getElementById('root-1');
    const root2Display = document.getElementById('root-2');

    calculateBtn.addEventListener('click', () => {
        // Get values
        const a = parseFloat(document.getElementById('a').value);
        const b = parseFloat(document.getElementById('b').value);
        const c = parseFloat(document.getElementById('c').value);

        // Validation
        if (isNaN(a) || isNaN(b) || isNaN(c)) {
            alert('Please enter valid numbers for a, b, and c');
            return;
        }

        if (a === 0) {
            alert('Value of "a" cannot be 0 for a quadratic equation');
            return;
        }

        // Calculation Logic (Ported from Python)
        // d = b^2 - 4ac
        const d = Math.pow(b, 2) - (4 * a * c);
        
        let e, f;
        let message = '';
        let showRoots = true;

        if (d > 0) {
            // Two real roots
            e = (-b + Math.pow(d, 0.5)) / (2 * a);
            f = (-b - Math.pow(d, 0.5)) / (2 * a);
            message = 'Congrats! Your results are:';
        } else if (d === 0) {
            // One real root (repeated)
            e = (-b + Math.pow(d, 0.5)) / (2 * a);
            f = e;
            message = 'WOW! Both values are:';
        } else {
            // Complex roots (d < 0)
            // Python code said: "LOL. Give proper value"
            // We will stick to the spirit of the original but maybe make it slightly more informative or keep it fun as requested.
            message = 'LOL. Give proper value (Complex Roots)';
            showRoots = false;
        }

        // Update UI
        resultMessage.textContent = message;
        
        if (showRoots) {
            root1Display.textContent = e.toFixed(2); // Rounding for display
            root2Display.textContent = f.toFixed(2);
            root1Display.parentElement.style.display = 'flex';
            root2Display.parentElement.style.display = 'flex';
        } else {
            root1Display.parentElement.style.display = 'none';
            root2Display.parentElement.style.display = 'none';
        }

        // Show result area with animation
        resultArea.classList.remove('hidden');
    });
});
