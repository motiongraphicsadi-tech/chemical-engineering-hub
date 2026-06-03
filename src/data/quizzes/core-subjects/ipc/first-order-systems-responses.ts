const quiz = [

    {
      question:
        "Which response is most commonly used for process identification and controller tuning?",
  
      options: [
        "Ramp Response",
        "Impulse Response",
        "Step Response",
        "Sinusoidal Response",
      ],
  
      answer:
        "Step Response",
    },
  
    {
      question:
        "What is the standard step response of a first order system?",
  
      options: [
        "Ke^(-t/τ)",
        "K(1-e^(-t/τ))",
        "Kt",
        "Ksin(ωt)",
      ],
  
      answer:
        "K(1-e^(-t/τ))",
    },
  
    {
      question:
        "For a unit step input, the final value of a first order system equals:",
  
      options: [
        "Time Constant",
        "Input Frequency",
        "Process Gain",
        "Process Delay",
      ],
  
      answer:
        "Process Gain",
    },
  
    {
      question:
        "A ramp input in the Laplace domain is represented by:",
  
      options: [
        "1/s",
        "1/s²",
        "1",
        "ω/(s²+ω²)",
      ],
  
      answer:
        "1/s²",
    },
  
    {
      question:
        "What characteristic is commonly observed in the ramp response of a first order system?",
  
      options: [
        "Oscillation",
        "Process lag",
        "Instant response",
        "Negative gain",
      ],
  
      answer:
        "Process lag",
    },
  
    {
      question:
        "An impulse input in the Laplace domain is represented by:",
  
      options: [
        "1",
        "1/s",
        "1/s²",
        "s",
      ],
  
      answer:
        "1",
    },
  
    {
      question:
        "What is the general form of the impulse response of a first order system?",
  
      options: [
        "(K/τ)e^(-t/τ)",
        "K(1-e^(-t/τ))",
        "Kt",
        "Ksin(ωt)",
      ],
  
      answer:
        "(K/τ)e^(-t/τ)",
    },
  
    {
      question:
        "What happens to the impulse response as time increases?",
  
      options: [
        "It grows indefinitely",
        "It oscillates continuously",
        "It decays toward zero",
        "It remains constant",
      ],
  
      answer:
        "It decays toward zero",
    },
  
    {
      question:
        "Which response is primarily used in frequency response analysis?",
  
      options: [
        "Step Response",
        "Ramp Response",
        "Impulse Response",
        "Sinusoidal Response",
      ],
  
      answer:
        "Sinusoidal Response",
    },
  
    {
      question:
        "A sinusoidal response typically exhibits:",
  
      options: [
        "Amplitude change and phase shift",
        "Only amplitude change",
        "Only phase shift",
        "No change",
      ],
  
      answer:
        "Amplitude change and phase shift",
    },
  
    {
      question:
        "Which response is used to study the tracking ability of a process?",
  
      options: [
        "Step Response",
        "Ramp Response",
        "Impulse Response",
        "Frequency Response",
      ],
  
      answer:
        "Ramp Response",
    },
  
    {
      question:
        "Which response returns to zero after sufficient time?",
  
      options: [
        "Step Response",
        "Ramp Response",
        "Impulse Response",
        "All of the Above",
      ],
  
      answer:
        "Impulse Response",
    },
  
    {
      question:
        "What determines how quickly a first order system responds to any input?",
  
      options: [
        "Process Gain",
        "Time Constant",
        "Input Type",
        "Output Variable",
      ],
  
      answer:
        "Time Constant",
    },
  
    {
      question:
        "For a first order system, the response to a step input is generally:",
  
      options: [
        "Oscillatory",
        "Exponential",
        "Linear",
        "Random",
      ],
  
      answer:
        "Exponential",
    },
  
    {
      question:
        "Why are standard input signals used in process dynamics?",
  
      options: [
        "To simplify process analysis and characterization",
        "To eliminate disturbances",
        "To avoid controller design",
        "To reduce plant capacity",
      ],
  
      answer:
        "To simplify process analysis and characterization",
    },
  
  ];
  
  export default quiz;