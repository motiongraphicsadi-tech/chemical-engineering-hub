const quiz = [

    {
      question:
        "What is the primary characteristic of a second order system?",
  
      options: [
        "Contains one energy storage element",
        "Contains two energy storage elements",
        "Contains no storage elements",
        "Contains infinite storage elements",
      ],
  
      answer:
        "Contains two energy storage elements",
    },
  
    {
      question:
        "Which transfer function represents a standard second order system?",
  
      options: [
        "K/(τs+1)",
        "K/s",
        "Kωₙ²/(s²+2ζωₙs+ωₙ²)",
        "Ks",
      ],
  
      answer:
        "Kωₙ²/(s²+2ζωₙs+ωₙ²)",
    },
  
    {
      question:
        "What does the damping ratio (ζ) primarily determine?",
  
      options: [
        "Process gain",
        "Response speed only",
        "Degree of oscillation and overshoot",
        "Input magnitude",
      ],
  
      answer:
        "Degree of oscillation and overshoot",
    },
  
    {
      question:
        "What symbol is commonly used for damping ratio?",
  
      options: [
        "τ",
        "ωₙ",
        "K",
        "ζ",
      ],
  
      answer:
        "ζ",
    },
  
    {
      question:
        "What does the natural frequency (ωₙ) determine?",
  
      options: [
        "Response speed",
        "Steady-state gain",
        "Measurement accuracy",
        "Process capacity",
      ],
  
      answer:
        "Response speed",
    },
  
    {
      question:
        "An underdamped system occurs when:",
  
      options: [
        "ζ = 0",
        "0 < ζ < 1",
        "ζ = 1",
        "ζ > 1",
      ],
  
      answer:
        "0 < ζ < 1",
    },
  
    {
      question:
        "Which type of second order system exhibits oscillatory behavior?",
  
      options: [
        "Overdamped",
        "Critically Damped",
        "Underdamped",
        "Static System",
      ],
  
      answer:
        "Underdamped",
    },
  
    {
      question:
        "A critically damped system occurs when:",
  
      options: [
        "ζ = 0",
        "ζ < 0",
        "ζ = 1",
        "ζ > 2",
      ],
  
      answer:
        "ζ = 1",
    },
  
    {
      question:
        "Which response type provides the fastest response without oscillation?",
  
      options: [
        "Undamped",
        "Underdamped",
        "Critically Damped",
        "Overdamped",
      ],
  
      answer:
        "Critically Damped",
    },
  
    {
      question:
        "An overdamped system is characterized by:",
  
      options: [
        "Continuous oscillation",
        "Fast oscillatory response",
        "Slow response without oscillation",
        "Instantaneous response",
      ],
  
      answer:
        "Slow response without oscillation",
    },
  
    {
      question:
        "An undamped system occurs when:",
  
      options: [
        "ζ = 0",
        "ζ = 1",
        "ζ > 1",
        "ζ < -1",
      ],
  
      answer:
        "ζ = 0",
    },
  
    {
      question:
        "What is overshoot?",
  
      options: [
        "Failure to reach final value",
        "Response exceeding the final value",
        "Steady-state error",
        "Process delay",
      ],
  
      answer:
        "Response exceeding the final value",
    },
  
    {
      question:
        "What is settling time?",
  
      options: [
        "Time to reach maximum value",
        "Time required to remain within an acceptable error band",
        "Time to start responding",
        "Time constant of the process",
      ],
  
      answer:
        "Time required to remain within an acceptable error band",
    },
  
    {
      question:
        "Which industrial equipment commonly exhibits second order behavior?",
  
      options: [
        "U-tube Manometer",
        "Coupled Tank System",
        "Pneumatic System",
        "All of the Above",
      ],
  
      answer:
        "All of the Above",
    },
  
    {
      question:
        "Why are second order systems important in process control?",
  
      options: [
        "They help analyze oscillations, stability, and controller performance",
        "They eliminate process disturbances",
        "They replace transfer functions",
        "They only apply to mechanical systems",
      ],
  
      answer:
        "They help analyze oscillations, stability, and controller performance",
    },
  
  ];
  
  export default quiz;