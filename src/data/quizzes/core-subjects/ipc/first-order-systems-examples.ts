const quiz = [

    {
      question:
        "Why is a mercury thermometer considered a first order system?",
  
      options: [
        "It contains two storage elements",
        "It responds instantly to temperature changes",
        "It contains thermal energy storage and responds gradually",
        "It behaves as a pure capacitive system",
      ],
  
      answer:
        "It contains thermal energy storage and responds gradually",
    },
  
    {
      question:
        "What is the input variable for a mercury thermometer?",
  
      options: [
        "Mercury level",
        "Bulb volume",
        "Surrounding temperature",
        "Pressure",
      ],
  
      answer:
        "Surrounding temperature",
    },
  
    {
      question:
        "In a liquid level system, what is typically the output variable?",
  
      options: [
        "Temperature",
        "Pressure",
        "Flow Rate",
        "Liquid Level",
      ],
  
      answer:
        "Liquid Level",
    },
  
    {
      question:
        "What is the storage element in a liquid level system?",
  
      options: [
        "Outlet Pipe",
        "Valve",
        "Stored Liquid Volume",
        "Pump",
      ],
  
      answer:
        "Stored Liquid Volume",
    },
  
    {
      question:
        "A tank with an inlet and outlet is commonly modeled as:",
  
      options: [
        "Second Order System",
        "Pure Capacitive System",
        "First Order System",
        "Oscillatory System",
      ],
  
      answer:
        "First Order System",
    },
  
    {
      question:
        "What is the standard transfer function of a first order system?",
  
      options: [
        "K/s",
        "K/(τs+1)",
        "(τs+1)/K",
        "K/(τ²s²+1)",
      ],
  
      answer:
        "K/(τs+1)",
    },
  
    {
      question:
        "Which example represents a pure capacitive process?",
  
      options: [
        "Mercury Thermometer",
        "Tank without outlet",
        "Heat Exchanger",
        "Pressure Vessel",
      ],
  
      answer:
        "Tank without outlet",
    },
  
    {
      question:
        "What is the transfer function of a pure capacitive system?",
  
      options: [
        "K/(τs+1)",
        "K/s",
        "1/(τs+1)",
        "Ks",
      ],
  
      answer:
        "K/s",
    },
  
    {
      question:
        "Why does a pure capacitive system not reach steady state?",
  
      options: [
        "It has infinite gain",
        "It has no storage element",
        "It continuously accumulates material or energy",
        "Its time constant is zero",
      ],
  
      answer:
        "It continuously accumulates material or energy",
    },
  
    {
      question:
        "What does a larger time constant indicate?",
  
      options: [
        "Faster response",
        "Higher gain",
        "Slower response",
        "Lower storage capacity",
      ],
  
      answer:
        "Slower response",
    },
  
    {
      question:
        "Which of the following is NOT a first order system example?",
  
      options: [
        "Mercury Thermometer",
        "Liquid Level Tank",
        "Pure Capacitive Tank",
        "Ideal Oscillatory System",
      ],
  
      answer:
        "Ideal Oscillatory System",
    },
  
    {
      question:
        "What determines the speed of response of a first order system?",
  
      options: [
        "Process Gain",
        "Input Magnitude",
        "Time Constant",
        "Output Variable",
      ],
  
      answer:
        "Time Constant",
    },
  
    {
      question:
        "What determines the magnitude of output change in a first order system?",
  
      options: [
        "Time Constant",
        "Process Gain",
        "Storage Capacity",
        "Response Time",
      ],
  
      answer:
        "Process Gain",
    },
  
    {
      question:
        "Which characteristic is common to most first order systems?",
  
      options: [
        "Oscillatory Response",
        "Instantaneous Response",
        "Exponential Response",
        "Random Response",
      ],
  
      answer:
        "Exponential Response",
    },
  
    {
      question:
        "Why are first order examples important in process control?",
  
      options: [
        "They help visualize process dynamics and controller behavior",
        "They eliminate disturbances",
        "They replace transfer functions",
        "They avoid mathematical modeling",
      ],
  
      answer:
        "They help visualize process dynamics and controller behavior",
    },
  
  ];
  
  export default quiz;