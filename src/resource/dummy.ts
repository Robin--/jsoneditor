export const schema = {
  'type': 'object',
  'properties': {
    'name': {
      'type': 'string'
    },
    'vegetarian': {
      'type': 'boolean'
    },
    'birthDate': {
      'type': 'string',
      'format': 'date'
    },
    'nationality': {
      'type': 'string',
      'enum': ['DE', 'IT', 'JP', 'US', 'RU', 'Other']
    },
    'occupation': {
      'type': 'string'
    },
    'comments': {
      'type': 'array',
      'items': {
        'type': 'object',
        'properties': {
          'date': {
            'type': 'string',
            'format': 'date'
          },
          'message': {
            'type': 'string'
          }
        }
      }
    }
  },
  'required': ['occupation', 'nationality']
};

export const data = {
  'comments': [
    {
      'date': new Date(2001, 8, 11).toISOString().substr(0, 10),
      'message': 'This is an example message'
    },
    {
      'date': new Date().toISOString().substr(0, 10),
      'message': 'Get ready for booohay'
    }
  ]
};
