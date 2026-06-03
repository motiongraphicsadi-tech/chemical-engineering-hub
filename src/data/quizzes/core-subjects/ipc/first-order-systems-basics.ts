const quiz = [

    {
      question:
        "What is the standard transfer function of a first order system?",
  
      options: [
        "K/(τs+1)",
        "K/(τ²s²+1)",
        "(τs+1)/K",
        "Kτs",
      ],
  
      answer:
        "K/(τs+1)",
    },
  
    {
      question:
        "A first order system contains how many energy storage elements?",
  
      options: [
        "Zero",
        "One",
        "Two",
        "Infinite",
      ],
  
      answer:
        "One",
    },
  
    {
      question:
        "What does the symbol τ represent in a first order system?",
  
      options: [
        "Gain",
        "Error",
        "Time Constant",
        "Input",
      ],
  
      answer:
        "Time Constant",
    },
  
    {
      question:
        "What does the process gain K represent?",
  
      options: [
        "Response speed",
        "Output change per unit input change",
        "System stability",
        "Process delay",
      ],
  
      answer:
        "Output change per unit input change",
    },
  
    {
      question:
        "At one time constant (τ), approximately what percentage of the final response is achieved?",
  
      options: [
        "50%",
        "63.2%",
        "75%",
        "100%",
      ],
  
      answer:
        "63.2%",
    },
  
    {
      question:
        "At two time constants (2τ), approximately what percentage of the final response is achieved?",
  
      options: [
        "63.2%",
        "75%",
        "86.5%",
        "95%",
      ],
  
      answer:
        "86.5%",
    },
  
    {
      question:
        "After approximately how many time constants is a first order system considered to reach steady state?",
  
      options: [
        "1τ",
        "2τ",
        "3τ",
        "5τ",
      ],
  
      answer:
        "5τ",
    },
  
    {
      question:
        "Which equation represents the differential equation of a first order system?",
  
      options: [
        "τ(dy/dt)+y=Kx",
        "τ²(d²y/dt²)+y=Kx",
        "y=Kx",
        "dy/dt=K",
      ],
  
      answer:
        "τ(dy/dt)+y=Kx",
    },
  
    {
      question:
        "Which characteristic is typical of a first order response?",
  
      options: [
        "Oscillatory behavior",
        "Instantaneous response",
        "Smooth exponential response",
        "Chaotic response",
      ],
  
      answer:
        "Smooth exponential response",
    },
  
    {
      question:
        "Which of the following is commonly modeled as a first order system?",
  
      options: [
        "Mixing Tank",
        "Heat Exchanger",
        "Liquid Level System",
        "All of the Above",
      ],
  
      answer:
        "All of the Above",
    },
  
    {
      question:
        "What happens to the output of a first order system after a step input is applied?",
  
      options: [
        "It changes instantly to its final value",
        "It remains constant",
        "It approaches the final value gradually",
        "It oscillates indefinitely",
      ],
  
      answer:
        "It approaches the final value gradually",
    },
  
    {
      question:
        "A larger time constant indicates:",
  
      options: [
        "A faster response",
        "A slower response",
        "Higher gain",
        "Lower gain",
      ],
  
      answer:
        "A slower response",
    },
  
    {
      question:
        "Which parameter determines how quickly a first order process responds?",
  
      options: [
        "Gain",
        "Time Constant",
        "Input Magnitude",
        "Output Variable",
      ],
  
      answer:
        "Time Constant",
    },
  
    {
      question:
        "If the process gain is 5 and the input change is 2 units, what is the output change?",
  
      options: [
        "2",
        "5",
        "7",
        "10",
      ],
  
      answer:
        "10",
    },
  
    {
      question:
        "Why are first order models important in process control?",
  
      options: [
        "They are simple and represent many industrial processes",
        "They eliminate process disturbances",
        "They replace controllers",
        "They only apply to electrical systems",
      ],
  
      answer:
        "They are simple and represent many industrial processes",
    },
  
  ];
  
  export default quiz;