body { 
    background: #fdf6f0; 
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    justify-content: center; 
    height: 100vh; 
    font-family: 'Georgia', serif; 
    margin: 0;
}

#garden { display: flex; gap: 20px; margin-bottom: 50px; font-size: 50px; cursor: pointer; }

.envelope { 
    width: 240px; 
    height: 180px; 
    background: #eec; 
    position: relative; 
    cursor: pointer; 
    border: 2px solid #d4c4a8; 
}

.flap { 
    width: 0; height: 0; 
    border-left: 120px solid transparent; 
    border-right: 120px solid transparent; 
    border-top: 80px solid #d4c4a8; 
    position: absolute; top: 0; 
}

.letter { 
    position: absolute; 
    top: 20px; left: 10px; 
    background: white; 
    padding: 20px; 
    width: 200px; 
    height: 250px; /* Limits the height */
    overflow-y: auto; /* Adds a scrollbar if the text is long */
    opacity: 0; 
    transition: 0.5s; 
    pointer-events: none; 
    border: 1px solid #ccc; 
    font-size: 14px;
    line-height: 1.5;
    color: #333;
}

.envelope.open .letter { transform: translateY(-140px); opacity: 1; pointer-events: auto; }
