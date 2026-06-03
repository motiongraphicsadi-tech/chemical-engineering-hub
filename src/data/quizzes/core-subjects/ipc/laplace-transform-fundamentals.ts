const quiz = [

  {
    question:
      "Why is Laplace Transform widely used in control engineering?",

    options: [
      "It converts algebraic equations into differential equations",
      "It converts differential equations into algebraic equations",
      "It eliminates all system errors",
      "It replaces transfer functions",
    ],

    answer:
      "It converts differential equations into algebraic equations",
  },

  {
    question:
      "What is the Laplace Transform of a constant 1?",

    options: [
      "1/s²",
      "s",
      "1/s",
      "s²",
    ],

    answer:
      "1/s",
  },

  {
    question:
      "What is the Laplace Transform of t?",

    options: [
      "1/s",
      "1/s²",
      "2/s³",
      "s",
    ],

    answer:
      "1/s²",
  },

  {
    question:
      "Which variable represents the Laplace domain?",

    options: [
      "t",
      "x",
      "y",
      "s",
    ],

    answer:
      "s",
  },

  {
    question:
      "Which property allows constants to remain unchanged during transformation?",

    options: [
      "Time Shifting Property",
      "Derivative Property",
      "Constant Multiplication Property",
      "Inverse Property",
    ],

    answer:
      "Constant Multiplication Property",
  },

  {
    question:
      "What is the Laplace Transform of e^(at)?",

    options: [
      "1/(s+a)",
      "1/(s-a)",
      "a/(s²+a²)",
      "s/(s²+a²)",
    ],

    answer:
      "1/(s-a)",
  },

  {
    question:
      "What does the derivative property help convert?",

    options: [
      "Matrices into vectors",
      "Differential equations into algebraic equations",
      "Integrals into derivatives",
      "Functions into constants",
    ],

    answer:
      "Differential equations into algebraic equations",
  },

  {
    question:
      "Integration in the time domain becomes what in the Laplace domain?",

    options: [
      "Multiplication by s",
      "Division by s",
      "Differentiation",
      "Squaring",
    ],

    answer:
      "Division by s",
  },

  {
    question:
      "What is the purpose of Inverse Laplace Transform?",

    options: [
      "Convert algebraic equations into matrices",
      "Convert Laplace-domain functions into time-domain functions",
      "Find controller gain",
      "Remove system disturbances",
    ],

    answer:
      "Convert Laplace-domain functions into time-domain functions",
  },

  {
    question:
      "Which control engineering concept is directly built using Laplace Transform?",

    options: [
      "Transfer Function",
      "P&ID",
      "Valve Sizing",
      "Pump Curve",
    ],

    answer:
      "Transfer Function",
  },

];

export default quiz;