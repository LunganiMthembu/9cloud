// Quiz functionality and data

const quizData = {
    mathematics: {
        title: 'Mathematics Quiz',
        questions: [
            {
                question: 'What is the derivative of x²?',
                options: ['2x', 'x', '2', 'x²'],
                correct: 0,
                explanation: 'The derivative of x² is 2x using the power rule.'
            },
            {
                question: 'What is the value of π (pi) approximately?',
                options: ['3.14159', '2.71828', '1.41421', '1.73205'],
                correct: 0,
                explanation: 'π (pi) is approximately 3.14159.'
            },
            {
                question: 'What is 2³?',
                options: ['6', '8', '9', '12'],
                correct: 1,
                explanation: '2³ = 2 × 2 × 2 = 8'
            },
            {
                question: 'What is the quadratic formula?',
                options: ['x = -b ± √(b²-4ac) / 2a', 'x = a + b + c', 'x = b² - 4ac', 'x = 2a + b'],
                correct: 0,
                explanation: 'The quadratic formula is x = (-b ± √(b²-4ac)) / 2a'
            },
            {
                question: 'What is the sum of angles in a triangle?',
                options: ['90°', '180°', '270°', '360°'],
                correct: 1,
                explanation: 'The sum of angles in any triangle is always 180°.'
            }
        ]
    },
    science: {
        title: 'Science Quiz',
        questions: [
            {
                question: 'What is the chemical symbol for water?',
                options: ['H2O\
