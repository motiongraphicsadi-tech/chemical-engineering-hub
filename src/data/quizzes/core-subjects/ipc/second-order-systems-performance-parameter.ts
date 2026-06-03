const quiz = [

    {
      question:
        "What does overshoot represent in a second order system?",
  
      options: [
        "Time required to reach steady state",
        "Amount by which the response exceeds the final value",
        "Time required to reach the first peak",
        "Ratio of successive oscillations",
      ],
  
      answer:
        "Amount by which the response exceeds the final value",
    },
  
    {
      question:
        "Overshoot is usually expressed as:",
  
      options: [
        "Seconds",
        "Radians",
        "Percentage",
        "Frequency",
      ],
  
      answer:
        "Percentage",
    },
  
    {
      question:
        "What is rise time?",
  
      options: [
        "Time required to reach maximum overshoot",
        "Time required for the response to first reach the desired value",
        "Time required to settle within an error band",
        "Time required to complete one oscillation",
      ],
  
      answer:
        "Time required for the response to first reach the desired value",
    },
  
    {
      question:
        "What is peak time?",
  
      options: [
        "Time required to reach steady state",
        "Time required to reach maximum overshoot",
        "Time required to achieve 63.2% response",
        "Time required to eliminate oscillations",
      ],
  
      answer:
        "Time required to reach maximum overshoot",
    },
  
    {
      question:
        "Settling time refers to:",
  
      options: [
        "Time required to reach the first peak",
        "Time required to remain within a specified error band around the final value",
        "Time required to start responding",
        "Time required to reach 50% response",
      ],
  
      answer:
        "Time required to remain within a specified error band around the final value",
    },
  
    {
      question:
        "Which performance parameter indicates the quality of damping between successive oscillations?",
  
      options: [
        "Rise Time",
        "Peak Time",
        "Settling Time",
        "Decay Ratio",
      ],
  
      answer:
        "Decay Ratio",
    },
  
    {
      question:
        "A smaller decay ratio generally indicates:",
  
      options: [
        "Poor damping",
        "Better damping",
        "Slower response",
        "Higher gain",
      ],
  
      answer:
        "Better damping",
    },
  
    {
      question:
        "Which parameter is most directly affected by the damping ratio?",
  
      options: [
        "Overshoot",
        "Rise Time",
        "Peak Time",
        "All of the Above",
      ],
  
      answer:
        "All of the Above",
    },
  
    {
      question:
        "For an underdamped system, which behavior is expected?",
  
      options: [
        "No oscillation",
        "Overshoot and oscillation",
        "Instant settling",
        "Constant output",
      ],
  
      answer:
        "Overshoot and oscillation",
    },
  
    {
      question:
        "What happens to overshoot as damping ratio increases?",
  
      options: [
        "Increases",
        "Remains constant",
        "Decreases",
        "Becomes infinite",
      ],
  
      answer:
        "Decreases",
    },
  
    {
      question:
        "Which performance parameter is commonly used to evaluate how quickly a system stabilizes?",
  
      options: [
        "Rise Time",
        "Peak Time",
        "Settling Time",
        "Decay Ratio",
      ],
  
      answer:
        "Settling Time",
    },
  
    {
      question:
        "A control loop with excessive overshoot may lead to:",
  
      options: [
        "Improved stability",
        "Equipment stress and instability",
        "Reduced process gain",
        "Elimination of oscillations",
      ],
  
      answer:
        "Equipment stress and instability",
    },
  
    {
      question:
        "Which parameter is often targeted around 0.25 during industrial controller tuning?",
  
      options: [
        "Overshoot",
        "Rise Time",
        "Decay Ratio",
        "Peak Time",
      ],
  
      answer:
        "Decay Ratio",
    },
  
    {
      question:
        "Why are performance parameters important in process control?",
  
      options: [
        "They quantify system response quality",
        "They replace transfer functions",
        "They eliminate disturbances",
        "They remove process dynamics",
      ],
  
      answer:
        "They quantify system response quality",
    },
  
    {
      question:
        "Which of the following performance parameters occurs first during a typical underdamped step response?",
  
      options: [
        "Settling Time",
        "Rise Time",
        "Decay Ratio",
        "Steady-State Error",
      ],
  
      answer:
        "Rise Time",
    },
  
  ];
  
  export default quiz;