const quiz = [

    {
      question:
        "What is the primary objective of stability analysis?",
  
      options: [
        "Increase controller cost",
        "Determine whether a system remains stable after disturbances",
        "Reduce process gain",
        "Increase dead time",
      ],
  
      answer:
        "Determine whether a system remains stable after disturbances",
    },
  
    {
      question:
        "A system is considered stable if:",
  
      options: [
        "Output grows infinitely",
        "Output oscillates continuously with increasing amplitude",
        "Bounded input produces bounded output",
        "Gain is always greater than one",
      ],
  
      answer:
        "Bounded input produces bounded output",
    },
  
    {
      question:
        "What does BIBO stand for?",
  
      options: [
        "Basic Input Basic Output",
        "Bounded Input Bounded Output",
        "Balanced Input Balanced Output",
        "Binary Input Binary Output",
      ],
  
      answer:
        "Bounded Input Bounded Output",
    },
  
    {
      question:
        "The roots of which equation determine system stability?",
  
      options: [
        "Input equation",
        "Output equation",
        "Characteristic equation",
        "Laplace equation",
      ],
  
      answer:
        "Characteristic equation",
    },
  
    {
      question:
        "For a stable system, poles must lie:",
  
      options: [
        "In the right-half plane",
        "On the positive real axis",
        "In the left-half plane",
        "At infinity",
      ],
  
      answer:
        "In the left-half plane",
    },
  
    {
      question:
        "A pole in the right-half plane indicates:",
  
      options: [
        "Stable system",
        "Marginally stable system",
        "Unstable system",
        "First-order system",
      ],
  
      answer:
        "Unstable system",
    },
  
    {
      question:
        "What is the characteristic equation of a closed loop system?",
  
      options: [
        "G(s)=0",
        "H(s)=0",
        "1+G(s)H(s)=0",
        "G(s)-H(s)=0",
      ],
  
      answer:
        "1+G(s)H(s)=0",
    },
  
    {
      question:
        "What is the main advantage of the Routh Stability Criterion?",
  
      options: [
        "Requires root calculation",
        "Determines stability without calculating roots",
        "Eliminates transfer functions",
        "Removes dead time",
      ],
  
      answer:
        "Determines stability without calculating roots",
    },
  
    {
      question:
        "In the Routh Criterion, sign changes in the first column indicate:",
  
      options: [
        "Number of zeros",
        "Number of left-half-plane poles",
        "Number of right-half-plane poles",
        "System gain",
      ],
  
      answer:
        "Number of right-half-plane poles",
    },
  
    {
      question:
        "What are the two main plots in a Bode diagram?",
  
      options: [
        "Gain and Error",
        "Magnitude and Phase",
        "Pole and Zero",
        "Input and Output",
      ],
  
      answer:
        "Magnitude and Phase",
    },
  
    {
      question:
        "Gain crossover frequency occurs when:",
  
      options: [
        "Phase equals 0°",
        "Magnitude equals 1 (0 dB)",
        "Phase equals -180°",
        "Gain equals infinity",
      ],
  
      answer:
        "Magnitude equals 1 (0 dB)",
    },
  
    {
      question:
        "Phase crossover frequency occurs when phase angle equals:",
  
      options: [
        "0°",
        "90°",
        "-90°",
        "-180°",
      ],
  
      answer:
        "-180°",
    },
  
    {
      question:
        "Gain Margin is evaluated at:",
  
      options: [
        "Gain crossover frequency",
        "Phase crossover frequency",
        "Natural frequency",
        "Resonant frequency",
      ],
  
      answer:
        "Phase crossover frequency",
    },
  
    {
      question:
        "Phase Margin is evaluated at:",
  
      options: [
        "Gain crossover frequency",
        "Phase crossover frequency",
        "Natural frequency",
        "Settling frequency",
      ],
  
      answer:
        "Gain crossover frequency",
    },
  
    {
      question:
        "A larger phase margin generally indicates:",
  
      options: [
        "Lower stability",
        "Greater relative stability",
        "Higher dead time",
        "System instability",
      ],
  
      answer:
        "Greater relative stability",
    },
  
    {
      question:
        "What is a common effect of dead time in a process?",
  
      options: [
        "Increased phase margin",
        "Reduced phase lag",
        "Reduced stability",
        "Improved damping",
      ],
  
      answer:
        "Reduced stability",
    },
  
    {
      question:
        "Dead time is commonly represented as:",
  
      options: [
        "1/(τs+1)",
        "Ks",
        "e^(-sθ)",
        "s²+1",
      ],
  
      answer:
        "e^(-sθ)",
    },
  
    {
      question:
        "Which of the following is NOT a frequency-domain stability tool?",
  
      options: [
        "Bode Plot",
        "Nyquist Plot",
        "Routh Criterion",
        "Nichols Chart",
      ],
  
      answer:
        "Routh Criterion",
    },
  
    {
      question:
        "A marginally stable system typically exhibits:",
  
      options: [
        "Decaying oscillations",
        "Growing oscillations",
        "Sustained oscillations",
        "No response",
      ],
  
      answer:
        "Sustained oscillations",
    },
  
    {
      question:
        "Why is stability analysis important in process industries?",
  
      options: [
        "To reduce instrumentation",
        "To prevent unsafe and unstable operation",
        "To eliminate controllers",
        "To increase process complexity",
      ],
  
      answer:
        "To prevent unsafe and unstable operation",
    },
  
  ];
  
  export default quiz;