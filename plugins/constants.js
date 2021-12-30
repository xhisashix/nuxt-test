const QUIZ = [
  {
    question: '質問１',
    answers: ['Yes', 'No'],
  },
  {
    question: '質問2',
    answers: ['Yes', 'No'],
  },
  {
    question: '質問3',
    answers: ['Yes', 'No'],
  },
  // {
  //   question: '質問4',
  //   answers: ['Yes', 'No'],
  // },
  // {
  //   question: '質問5',
  //   answers: ['Yes', 'No'],
  // },
  // {
  //   question: '質問6',
  //   answers: ['Yes', 'No'],
  // },
  // {
  //   question: '質問7',
  //   answers: ['Yes', 'No'],
  // },
  // {
  //   question: '質問8',
  //   answers: ['Yes', 'No'],
  // },
  // {
  //   question: '質問9',
  //   answers: ['Yes', 'No'],
  // },
  // {
  //   question: '質問10',
  //   answers: ['Yes', 'No'],
  // },
]

const TYPE_PATTERN = [
  {
    type_name: 'A',
    type: [0, 0, 0],
    type_details:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, seLorem ipsum dolor sit amet, consectetur adipisicing elit, seLorem ipsum dolor sit amet, consectetur adipisicing elit, se',
  },
  {
    type_name: 'B',
    type: [0, 0, 1],
  },
]

export default (context, inject) => {
  inject('QUIZ', QUIZ)
  inject('TYPE_PATTERN', TYPE_PATTERN)
}