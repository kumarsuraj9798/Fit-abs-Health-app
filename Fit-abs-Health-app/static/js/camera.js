document.addEventListener('DOMContentLoaded', () => {
    const socket = io();
    const canvas = document.getElementById('videoCanvas');
    const ctx = canvas.getContext('2d');
    let isStreaming = false;

    // Set canvas size
    canvas.width = 640;
    canvas.height = 480;

    function drawFrame(imageData) {
        const img = new Image();
        img.onload = () => {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        };
        img.src = imageData;
    }

    // Handle connection events
    socket.on('connect', () => {
        console.log('Connected to server');
    });

    socket.on('disconnect', () => {
        console.log('Disconnected from server');
        isStreaming = false;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });

    socket.on('connect_error', (error) => {
        console.error('Connection error:', error);
        isStreaming = false;
    });

    // Start camera when button is clicked
    window.startCamera = function() {
        if (!isStreaming) {
            console.log('Requesting camera stream...');
            socket.emit('start-stream');
            isStreaming = true;
        }
    };

    // Handle incoming video frames with pose detection
    socket.on('video-frame', (data) => {
        try {
            if (data && data.frame) {
                const imageData = `data:image/jpeg;base64,${data.frame}`;
                drawFrame(imageData);
            } else {
                console.error('Invalid frame data received:', data);
            }
        } catch (error) {
            console.error('Error processing video frame:', error);
        }
    });


        socket.on('rep-count', (data) => {
        try {
            if (!data) return;
            let count = null;
            if (typeof data === 'number') {
                count = data;
            } else if (data && typeof data.count !== 'undefined') {
                count = data.count;
            }

            // Defensive: try to coerce to number
            if (count !== null) {
                count = Number(count);
            }

            // Debug log so you can see incoming rep-count events in browser console
            console.log('[rep-debug] received rep-count from server ->', count);

            // Only update if numeric and finite
            if (typeof count === 'number' && isFinite(count)) {
                if (typeof window.updateReps === 'function') {
                    window.updateReps(count);
                } else {
                    window.currentReps = count;
                    if (typeof renderCounters === 'function') renderCounters();
                }
            } else {
                // If not numeric, still set to 0 for clarity
                if (typeof window.updateReps === 'function') {
                    window.updateReps(0);
                } else {
                    window.currentReps = 0;
                    if (typeof renderCounters === 'function') renderCounters();
                }
            }
        } catch (err) {
            console.error('Error processing rep-count event:', err);
        }
    });


    // Handle errors
    socket.on('error', (error) => {
        console.error('Socket error:', error);
        isStreaming = false;
    });
});
