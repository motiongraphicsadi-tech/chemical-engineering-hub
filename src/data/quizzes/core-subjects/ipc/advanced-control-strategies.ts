const quiz = [

    {
      question:
        "What is the primary objective of advanced control strategies?",
  
      options: [
        "Increase process complexity",
        "Improve process performance beyond basic feedback control",
        "Eliminate controllers",
        "Reduce instrumentation accuracy",
      ],
  
      answer:
        "Improve process performance beyond basic feedback control",
    },
  
    {
      question:
        "Which control strategy acts before a disturbance affects the process?",
  
      options: [
        "Feedback Control",
        "On-Off Control",
        "Feed Forward Control",
        "Manual Control",
      ],
  
      answer:
        "Feed Forward Control",
    },
  
    {
      question:
        "What is required for effective Feed Forward Control?",
  
      options: [
        "Accurate disturbance measurement",
        "Large controller gain",
        "No process model",
        "No feedback signal",
      ],
  
      answer:
        "Accurate disturbance measurement",
    },
  
    {
      question:
        "What is the major advantage of Feed Forward Control?",
  
      options: [
        "Lower instrumentation cost",
        "Corrects disturbances before they affect the process",
        "Eliminates the need for sensors",
        "Removes process dead time",
      ],
  
      answer:
        "Corrects disturbances before they affect the process",
    },
  
    {
      question:
        "Cascade Control uses:",
  
      options: [
        "One controller",
        "Two controllers arranged in series",
        "Multiple sensors only",
        "No feedback loops",
      ],
  
      answer:
        "Two controllers arranged in series",
    },
  
    {
      question:
        "In a cascade control system, the primary controller is often called the:",
  
      options: [
        "Slave Controller",
        "Ratio Controller",
        "Master Controller",
        "Selector Controller",
      ],
  
      answer:
        "Master Controller",
    },
  
    {
      question:
        "What is the main benefit of Cascade Control?",
  
      options: [
        "Reduced instrumentation",
        "Faster disturbance rejection",
        "Elimination of process dynamics",
        "No tuning required",
      ],
  
      answer:
        "Faster disturbance rejection",
    },
  
    {
      question:
        "Ratio Control is used to maintain:",
  
      options: [
        "Constant pressure",
        "Constant temperature",
        "A fixed relationship between variables",
        "Constant controller output",
      ],
  
      answer:
        "A fixed relationship between variables",
    },
  
    {
      question:
        "Which process commonly uses Ratio Control?",
  
      options: [
        "Fuel-Air Mixing",
        "Tank Level Control",
        "Pump Lubrication",
        "Bearing Cooling",
      ],
  
      answer:
        "Fuel-Air Mixing",
    },
  
    {
      question:
        "Split Range Control uses:",
  
      options: [
        "Multiple controllers for one valve",
        "One controller for multiple final control elements",
        "Multiple sensors only",
        "One controller without actuators",
      ],
  
      answer:
        "One controller for multiple final control elements",
    },
  
    {
      question:
        "Which is a common application of Split Range Control?",
  
      options: [
        "Fuel-Air Ratio Control",
        "Steam and Cooling Water Control",
        "Level Measurement",
        "Pressure Indication",
      ],
  
      answer:
        "Steam and Cooling Water Control",
    },
  
    {
      question:
        "Selective Control uses:",
  
      options: [
        "Fixed controller output",
        "Maximum or minimum signal selection",
        "Open loop operation",
        "Only feedforward control",
      ],
  
      answer:
        "Maximum or minimum signal selection",
    },
  
    {
      question:
        "What is a common application of Selective Control?",
  
      options: [
        "Equipment Protection",
        "Flow Measurement",
        "Tank Calibration",
        "Heat Transfer Calculations",
      ],
  
      answer:
        "Equipment Protection",
    },
  
    {
      question:
        "Compared to Feedback Control, Feed Forward Control is generally:",
  
      options: [
        "Slower",
        "Faster",
        "Less accurate always",
        "Simpler",
      ],
  
      answer:
        "Faster",
    },
  
    {
      question:
        "Which statement about Feed Forward and Feedback Control is correct?",
  
      options: [
        "They cannot be used together",
        "Only Feed Forward is used in industry",
        "They are often combined for better performance",
        "Feedback always replaces Feed Forward",
      ],
  
      answer:
        "They are often combined for better performance",
    },
  
    {
      question:
        "Which advanced control strategy is most suitable for blending operations?",
  
      options: [
        "Cascade Control",
        "Ratio Control",
        "Selective Control",
        "Split Range Control",
      ],
  
      answer:
        "Ratio Control",
    },
  
    {
      question:
        "What is the main disadvantage of advanced control strategies?",
  
      options: [
        "Lower accuracy",
        "Higher complexity and cost",
        "No disturbance rejection",
        "Poor stability",
      ],
  
      answer:
        "Higher complexity and cost",
    },
  
    {
      question:
        "Which control strategy is especially useful when a secondary variable responds faster than the primary variable?",
  
      options: [
        "Ratio Control",
        "Selective Control",
        "Cascade Control",
        "Manual Control",
      ],
  
      answer:
        "Cascade Control",
    },
  
    {
      question:
        "Why is Feed Forward Control less effective when disturbance measurements are inaccurate?",
  
      options: [
        "It depends on accurate disturbance prediction",
        "It removes feedback",
        "It increases dead time",
        "It reduces process gain",
      ],
  
      answer:
        "It depends on accurate disturbance prediction",
    },
  
    {
      question:
        "Which advanced control strategy is commonly used to protect compressors and critical equipment from unsafe operating conditions?",
  
      options: [
        "Ratio Control",
        "Split Range Control",
        "Selective Control",
        "Cascade Control",
      ],
  
      answer:
        "Selective Control",
    },
  
  ];
  
  export default quiz;