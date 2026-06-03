const quiz = [

    {
      question:
        "What is controller tuning?",
  
      options: [
        "Repairing a controller",
        "Adjusting controller parameters for desired performance",
        "Replacing a sensor",
        "Calibrating a valve",
      ],
  
      answer:
        "Adjusting controller parameters for desired performance",
    },
  
    {
      question:
        "Why is controller tuning necessary?",
  
      options: [
        "To improve process stability and performance",
        "To increase equipment size",
        "To eliminate controllers",
        "To reduce instrumentation",
      ],
  
      answer:
        "To improve process stability and performance",
    },
  
    {
      question:
        "Which controller parameters are adjusted during PID tuning?",
  
      options: [
        "Kp, Ki, Kd",
        "Flow, Pressure, Temperature",
        "Gain, Density, Viscosity",
        "PV, SP, CO",
      ],
  
      answer:
        "Kp, Ki, Kd",
    },
  
    {
      question:
        "Which tuning method is based on sustained oscillations?",
  
      options: [
        "Cohen-Coon",
        "Root Locus",
        "Ziegler-Nichols",
        "Bode Method",
      ],
  
      answer:
        "Ziegler-Nichols",
    },
  
    {
      question:
        "What does Ku represent in the Ziegler-Nichols method?",
  
      options: [
        "Ultimate Gain",
        "Ultimate Frequency",
        "Controller Gain",
        "Process Gain",
      ],
  
      answer:
        "Ultimate Gain",
    },
  
    {
      question:
        "What does Pu represent in the Ziegler-Nichols method?",
  
      options: [
        "Process Variable",
        "Ultimate Period",
        "Pressure Unit",
        "Proportional Unit",
      ],
  
      answer:
        "Ultimate Period",
    },
  
    {
      question:
        "In the Ziegler-Nichols method, what is done first?",
  
      options: [
        "Increase derivative action",
        "Set integral and derivative actions to zero",
        "Increase dead time",
        "Reduce controller gain to zero",
      ],
  
      answer:
        "Set integral and derivative actions to zero",
    },
  
    {
      question:
        "The Cohen-Coon method is primarily based on:",
  
      options: [
        "Frequency response",
        "Root locus",
        "Process reaction curve",
        "Nyquist plot",
      ],
  
      answer:
        "Process reaction curve",
    },
  
    {
      question:
        "Which process model is commonly used in Cohen-Coon tuning?",
  
      options: [
        "FOPDT Model",
        "Second Order Oscillatory Model",
        "Pure Integrator",
        "State Space Model",
      ],
  
      answer:
        "FOPDT Model",
    },
  
    {
      question:
        "Which parameter is explicitly considered in the Cohen-Coon method?",
  
      options: [
        "Dead Time",
        "Valve Size",
        "Sensor Range",
        "Sampling Rate",
      ],
  
      answer:
        "Dead Time",
    },
  
    {
      question:
        "Which tuning method generally provides more aggressive tuning?",
  
      options: [
        "Cohen-Coon",
        "Ziegler-Nichols",
        "Manual Tuning",
        "None of the Above",
      ],
  
      answer:
        "Ziegler-Nichols",
    },
  
    {
      question:
        "Increasing proportional gain generally causes:",
  
      options: [
        "Faster response",
        "Reduced offset",
        "Greater oscillation tendency",
        "All of the Above",
      ],
  
      answer:
        "All of the Above",
    },
  
    {
      question:
        "What is the primary benefit of integral action?",
  
      options: [
        "Reduces noise",
        "Eliminates steady-state offset",
        "Increases dead time",
        "Improves sensor accuracy",
      ],
  
      answer:
        "Eliminates steady-state offset",
    },
  
    {
      question:
        "What is the primary benefit of derivative action?",
  
      options: [
        "Eliminates offset",
        "Improves stability and reduces overshoot",
        "Increases gain",
        "Removes disturbances completely",
      ],
  
      answer:
        "Improves stability and reduces overshoot",
    },
  
    {
      question:
        "Which controllers are most commonly used in industry?",
  
      options: [
        "On-Off Controllers",
        "PD Controllers",
        "PI and PID Controllers",
        "Derivative Controllers",
      ],
  
      answer:
        "PI and PID Controllers",
    },
  
    {
      question:
        "What is the main objective of controller tuning?",
  
      options: [
        "Maximize oscillations",
        "Balance speed, stability, and accuracy",
        "Eliminate process dynamics",
        "Increase dead time",
      ],
  
      answer:
        "Balance speed, stability, and accuracy",
    },
  
    {
      question:
        "A controller tuned too aggressively may result in:",
  
      options: [
        "Improved robustness",
        "Oscillations and instability",
        "Reduced process gain",
        "Elimination of overshoot",
      ],
  
      answer:
        "Oscillations and instability",
    },
  
    {
      question:
        "Which tuning method is an open-loop tuning technique?",
  
      options: [
        "Ziegler-Nichols Ultimate Gain Method",
        "Cohen-Coon Method",
        "Root Locus Method",
        "Frequency Response Method",
      ],
  
      answer:
        "Cohen-Coon Method",
    },
  
    {
      question:
        "Modern DCS systems often include:",
  
      options: [
        "Automatic tuning tools",
        "Manual relay logic only",
        "No controller adjustment features",
        "Mechanical tuning devices",
      ],
  
      answer:
        "Automatic tuning tools",
    },
  
    {
      question:
        "Which of the following is NOT a typical tuning objective?",
  
      options: [
        "Good disturbance rejection",
        "Fast settling",
        "Stable operation",
        "Maximum sustained oscillation",
      ],
  
      answer:
        "Maximum sustained oscillation",
    },
  
  ];
  
  export default quiz;