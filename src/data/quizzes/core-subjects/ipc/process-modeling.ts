const quiz = [

    {
      question:
        "What is process modeling?",
  
      options: [
        "Physical construction of equipment",
        "Mathematical representation of a process",
        "Plant maintenance activity",
        "Controller hardware design",
      ],
  
      answer:
        "Mathematical representation of a process",
    },
  
    {
      question:
        "Why is process modeling important in process control?",
  
      options: [
        "To increase plant size",
        "To predict process behavior and design controllers",
        "To eliminate instrumentation",
        "To replace operators",
      ],
  
      answer:
        "To predict process behavior and design controllers",
    },
  
    {
      question:
        "Which conservation principle is commonly used in process modeling?",
  
      options: [
        "Momentum only",
        "Accumulation = Input − Output + Generation − Consumption",
        "Boyle's Law",
        "Ideal Gas Law",
      ],
  
      answer:
        "Accumulation = Input − Output + Generation − Consumption",
    },
  
    {
      question:
        "Which variable is commonly the output of a tank level system?",
  
      options: [
        "Temperature",
        "Pressure",
        "Liquid Level",
        "Density",
      ],
  
      answer:
        "Liquid Level",
    },
  
    {
      question:
        "A simple storage tank is often modeled as:",
  
      options: [
        "Zero order system",
        "First order system",
        "Third order system",
        "Pure delay system",
      ],
  
      answer:
        "First order system",
    },
  
    {
      question:
        "What is the main characteristic of a non-interacting tank system?",
  
      options: [
        "Tanks influence each other directly",
        "Flow depends on level differences between tanks",
        "Each tank behaves independently",
        "No flow exists between tanks",
      ],
  
      answer:
        "Each tank behaves independently",
    },
  
    {
      question:
        "What is the main characteristic of an interacting tank system?",
  
      options: [
        "Tanks behave independently",
        "Tank levels influence interconnecting flow",
        "No accumulation occurs",
        "Only one tank exists",
      ],
  
      answer:
        "Tank levels influence interconnecting flow",
    },
  
    {
      question:
        "Which system is generally easier to model mathematically?",
  
      options: [
        "Interacting Tank System",
        "Non-Interacting Tank System",
        "Distillation Column",
        "Reactor Network",
      ],
  
      answer:
        "Non-Interacting Tank System",
    },
  
    {
      question:
        "What is the purpose of a surge tank?",
  
      options: [
        "Increase reaction rate",
        "Reduce flow fluctuations",
        "Generate steam",
        "Increase pressure permanently",
      ],
  
      answer:
        "Reduce flow fluctuations",
    },
  
    {
      question:
        "Which application commonly uses mixing system models?",
  
      options: [
        "Concentration control",
        "Power generation",
        "Gas compression",
        "Heat insulation",
      ],
  
      answer:
        "Concentration control",
    },
  
    {
      question:
        "What mathematical tool is commonly used to convert process models into transfer functions?",
  
      options: [
        "Fourier Series",
        "Laplace Transform",
        "Taylor Expansion",
        "Matrix Inversion",
      ],
  
      answer:
        "Laplace Transform",
    },
  
    {
      question:
        "What is the standard transfer function of a first order process?",
  
      options: [
        "K/s",
        "K/(τs+1)",
        "Ks",
        "1/(s²+1)",
      ],
  
      answer:
        "K/(τs+1)",
    },
  
    {
      question:
        "Which of the following is a common industrial application of process modeling?",
  
      options: [
        "Controller Design",
        "Process Simulation",
        "Plant Optimization",
        "All of the Above",
      ],
  
      answer:
        "All of the Above",
    },
  
    {
      question:
        "What is one limitation of process models?",
  
      options: [
        "They perfectly represent reality",
        "They contain assumptions and approximations",
        "They do not require validation",
        "They eliminate disturbances",
      ],
  
      answer:
        "They contain assumptions and approximations",
    },
  
    {
      question:
        "What should engineers do after developing a process model?",
  
      options: [
        "Ignore plant data",
        "Validate the model using real process data",
        "Discard the model",
        "Convert it directly into hardware",
      ],
  
      answer:
        "Validate the model using real process data",
    },
  
  ];
  
  export default quiz;