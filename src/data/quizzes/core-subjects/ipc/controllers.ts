const quiz = [

    {
      question:
        "What is the primary function of a controller?",
  
      options: [
        "Measure flow rate",
        "Compare SP and PV and generate corrective action",
        "Store process data",
        "Increase process gain",
      ],
  
      answer:
        "Compare SP and PV and generate corrective action",
    },
  
    {
      question:
        "What does SP stand for in a control system?",
  
      options: [
        "System Pressure",
        "Signal Processor",
        "Setpoint",
        "Safety Parameter",
      ],
  
      answer:
        "Setpoint",
    },
  
    {
      question:
        "What does PV represent?",
  
      options: [
        "Pressure Valve",
        "Process Variable",
        "Process Volume",
        "Power Value",
      ],
  
      answer:
        "Process Variable",
    },
  
    {
      question:
        "How is error defined in a control system?",
  
      options: [
        "PV − SP",
        "SP + PV",
        "SP − PV",
        "CO − PV",
      ],
  
      answer:
        "SP − PV",
    },
  
    {
      question:
        "Which controller type operates only in fully ON or fully OFF states?",
  
      options: [
        "P Controller",
        "PI Controller",
        "PID Controller",
        "On-Off Controller",
      ],
  
      answer:
        "On-Off Controller",
    },
  
    {
      question:
        "Which controller action is directly proportional to the error signal?",
  
      options: [
        "Integral",
        "Derivative",
        "Proportional",
        "On-Off",
      ],
  
      answer:
        "Proportional",
    },
  
    {
      question:
        "What is the mathematical expression for a proportional controller?",
  
      options: [
        "CO = Kp e(t)",
        "CO = Ki ∫e(t)dt",
        "CO = Kd de/dt",
        "CO = SP − PV",
      ],
  
      answer:
        "CO = Kp e(t)",
    },
  
    {
      question:
        "What is the main limitation of a proportional controller?",
  
      options: [
        "Slow response",
        "Cannot respond to disturbances",
        "Steady-state offset may remain",
        "Always unstable",
      ],
  
      answer:
        "Steady-state offset may remain",
    },
  
    {
      question:
        "Which controller action eliminates steady-state offset?",
  
      options: [
        "Proportional",
        "Derivative",
        "Integral",
        "On-Off",
      ],
  
      answer:
        "Integral",
    },
  
    {
      question:
        "What is the mathematical operation performed by an integral controller?",
  
      options: [
        "Differentiation",
        "Integration",
        "Multiplication",
        "Division",
      ],
  
      answer:
        "Integration",
    },
  
    {
      question:
        "What is the primary purpose of derivative action?",
  
      options: [
        "Remove offset",
        "Increase gain",
        "Predict future error and improve stability",
        "Measure process variables",
      ],
  
      answer:
        "Predict future error and improve stability",
    },
  
    {
      question:
        "Which controller action is most sensitive to measurement noise?",
  
      options: [
        "Proportional",
        "Integral",
        "Derivative",
        "On-Off",
      ],
  
      answer:
        "Derivative",
    },
  
    {
      question:
        "Which controller combines proportional and integral actions?",
  
      options: [
        "PD",
        "PID",
        "PI",
        "On-Off",
      ],
  
      answer:
        "PI",
    },
  
    {
      question:
        "Which controller combines proportional, integral, and derivative actions?",
  
      options: [
        "PI",
        "PD",
        "PID",
        "On-Off",
      ],
  
      answer:
        "PID",
    },
  
    {
      question:
        "Which controller type is most widely used in industrial process control?",
  
      options: [
        "On-Off Controller",
        "Derivative Controller",
        "PID Controller",
        "Manual Controller",
      ],
  
      answer:
        "PID Controller",
    },
  
  ];
  
  export default quiz;