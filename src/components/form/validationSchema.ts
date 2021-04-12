const Yup = require('yup');

export const schema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  tagline: Yup.string().required('Tagline is required'),
  overview: Yup.string().required('Overview is required'),
  vote_average: Yup.number()
    .required()
    .lessThan(100, 'Average vote must be less than 100')
    .moreThan(-1, 'Average vote must be 0 or more'),
  vote_count: Yup.number()
    .required()
    .moreThan(-1, 'Vote count must be 0 or more'),
  budget: Yup.number().required().moreThan(-1, 'Budget must be 0 or more'),
  revenue: Yup.number().required().moreThan(-1, 'Revenue must be 0 or more'),
  runtime: Yup.number()
    .required()
    .moreThan(-1, 'Runtime count must be 0 or more'),
  genres: Yup.array().required().min(1),
  poster_path: Yup.string()
    .required('URL is required')
    .url('Provide valid URL'),
  release_date: Yup.date().default(function () {
    return new Date();
  })
});
